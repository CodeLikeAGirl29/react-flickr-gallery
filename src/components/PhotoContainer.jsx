import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Photos from "./Photos";
import NotFound from "./NotFound";

const PhotoContainer = ({ data, loading, handleSearch, isFetchingMore }) => {
	const { topic } = useParams();

	// Handle URL changes
	useEffect(() => {
		if (topic) {
			handleSearch(topic, true);
		}
	}, [topic]);

	// Handle Infinite Scroll
	useEffect(() => {
		const handleScroll = () => {
			const scrollCheck = window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight;

			if (scrollCheck && !loading && !isFetchingMore) {
				handleSearch(topic || "ocean", false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [loading, isFetchingMore, topic, handleSearch]);

	if (loading && data.length === 0) return null;

	return (
		<div className="photo-container pb-20">
			<h2 className="text-4xl font-extrabold text-slate-800 mb-8 capitalize tracking-tight">
				{topic || "Discover"}
			</h2>

			{data.length > 0 ? (
				<ul className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
					{data.map((photo, index) => (
						// Using index + id ensures unique keys when appending more photos
						<Photos key={`${photo.id}-${index}`} photo={photo} />
					))}
				</ul>
			) : (
				!loading && <div className="py-20"><NotFound /></div>
			)}
		</div>
	);
};

export default PhotoContainer;