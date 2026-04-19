// src/components/PhotoContainer.jsx
import React, { Component } from "react";
import Photos from "./Photos";
import NotFound from "./NotFound";

class PhotoContainer extends Component {
	// 1. Initial Load: Fetch data when component first mounts
	componentDidMount() {
		this.performSearch();
	}

	// 2. Button Clicks: Detect when the URL changes (e.g., from /bmw to /mountains)
	componentDidUpdate(prevProps) {
		// We check if the pathname has changed to avoid infinite fetch loops
		if (prevProps.location.pathname !== this.props.location.pathname) {
			this.performSearch();
		}
	}

	// 3. Logic: Determine what to search for based on the URL
	performSearch = () => {
		const { match, handleSearch } = this.props;

		// Logic: If there's an :input param (from SearchForm), use it. 
		// Otherwise, grab the name from the path (for the Nav buttons).
		let query = match.params.input || match.path.replace("/", "");

		// Fallback: If we're on the root path "/"
		if (query === "" || query === "search") {
			query = "ocean";
		}

		handleSearch(query);
	};

	render() {
		const { data, loading, match } = this.props;
		const title = match.params.input || match.path.replace("/", "");

		if (loading) return null; // Let App.jsx handle the loading spinner

		return (
			<div className="photo-container pb-20">
				{/* Modern Title - capitalized dynamically */}
				<h2 className="text-4xl font-extrabold text-slate-800 mb-8 capitalize tracking-tight">
					{title || "Discover"}
				</h2>

				{data.length > 0 ? (
					/* Modern Masonry Grid using Tailwind Columns */
					<ul className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
						{data.map((photo) => (
							<Photos key={photo.id} photo={photo} />
						))}
					</ul>
				) : (
					<div className="py-20">
						<NotFound />
					</div>
				)}
			</div>
		);
	}
}

export default PhotoContainer;