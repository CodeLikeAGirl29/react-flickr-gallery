// src/components/Nav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const linkClass = "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-slate-200 hover:bg-slate-100 text-slate-600";
	const activeClass = "!bg-blue-600 !text-white !border-blue-600 shadow-md shadow-blue-200";

	return (
		<nav className="mt-4">
			<ul className="flex flex-wrap justify-center gap-4">
				<li>
					<NavLink
						to='/architecture'
						className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}
					>
						Architecture
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/wilderness'
						className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}
					>
						Wilderness
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/minimal'
						className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}
					>
						Minimal
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/textures'
						className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}
					>
						Textures
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;