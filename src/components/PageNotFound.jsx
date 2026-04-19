import React from "react";

const PageNotFound = ({ location }) => {
	return (
		<div className='photo-container'>
			<li className='not-found'>
				<h3>Oops, that page does not exist</h3>
				<p>
					404 Error: The url does not exist for <code>{location.pathname}</code>
					.
				</p>
				<a
					data-flickr-embed='true'
					href='https://www.flickr.com/photos/9756642@N02/7459375332/in/album-72157630147982346/'
					title='Camping-24'
				>
					<img
						src='https://res.cloudinary.com/codelikeagirl29/image/upload/v1652566052/404_xln68n.webp'
						className='ocean'
						width='1500'
						height='600'
						alt='404PageError'
					/>
					<script
						async
						src='//embedr.flickr.com/assets/client-code.js'
						charSet='utf-8'
					></script>
				</a>
			</li>
		</div>
	);
};

export default PageNotFound;
