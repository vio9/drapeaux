import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const Countries = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("https://restcountries.com/v2/regionalbloc/eu")
			.then((res) => setData(res.data));
	}, []);

	return (
		<div className="countries">
			<ul className="countries-list">
				{data.map((country) => (
					<Card {...country} />
				))}
			</ul>
		</div>
	);
};

export default Countries;
