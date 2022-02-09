import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink to="/" activeClassName="active">
				Home
			</NavLink>
			<NavLink to="/about" activeClassName="active">
				About
			</NavLink>
		</div>
	);
};

export default Navigation;
