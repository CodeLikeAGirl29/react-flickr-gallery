import React from "react";
import { NavLink } from "react-router-dom";
//Stateless

const Nav = (props) => {
	const setLink = (e) => {
		let link = e.target.name;
		props.fetchNav(link);
	};

	return (
		<nav className='main-nav'>
			<ul>
				<li>
					<NavLink exact to='/' name='mountains' onClick={setLink}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/bmw' name='BMW' onClick={setLink}>
						BMW
					</NavLink>
				</li>
				<li>
					<NavLink to='/mountains' name='mountains' onClick={setLink}>
						Mountains
					</NavLink>
				</li>
				<li>
					<NavLink to='/cityscapes' name='cityscapes' onClick={setLink}>
						Cityscapes
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
