import React from "react";

const Card = ({ name, capital, population, flag }) => {
	const numberFormat = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	};

	return (
		<li className="card">
			<img src={flag} alt="flag" />
			<div className="data-container">
				<ul>
					<li>{name}</li>
					<li>capitale :{capital}</li>
					<li>population : {numberFormat(population)}</li>
				</ul>
			</div>
		</li>
	);
};

export default Card;
