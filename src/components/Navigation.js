import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink to="/" className="active">
				Home
			</NavLink>
			<NavLink to="/about" className="active">
				About
			</NavLink>
		</div>
	);
};

export default Navigation;
