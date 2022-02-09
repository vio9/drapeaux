import React from "react";

const Card = ({ name, capital, population, flag }) => {
	return (
		<li className="Card">
			<img src={flag} alt="flag" />
			<div className="data-container">
				<ul>
					<li>{name}</li>
					<li>capitale :{capital}</li>
					<li>population: {population}</li>
				</ul>
			</div>
		</li>
	);
};

export default Card;
