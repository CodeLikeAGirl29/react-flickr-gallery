import React from "react";

const Photos = ({ photo }) => {
	return (
		<li>
			<img
				srcSet={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
				src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
				alt={photo.title}
			/>
		</li>
	);
};

export default Photos;
