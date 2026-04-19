// src/components/Photos.js
import React from "react";

const Photos = ({ photo }) => {
	return (
		<li className='relative mb-6 break-inside-avoid group overflow-hidden rounded-2xl bg-slate-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1'>
			{/* Image with subtle zoom on hover */}
			<img
				className='w-full object-cover transition-transform duration-700 group-hover:scale-110'
				src={photo.urls.regular}
				alt={photo.alt_description}
				loading="lazy"
			/>

			{/* Dark Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
				<div className='flex items-center gap-3'>
					{/* Photographer's Profile Image */}
					<img
						src={photo.user.profile_image.small}
						alt={photo.user.name}
						className="w-8 h-8 rounded-full border border-white/50"
					/>
					<div className="text-white">
						<p className='text-xs font-light opacity-80'>Photo by</p>
						<p className='text-sm font-semibold truncate'>{photo.user.name}</p>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Photos;