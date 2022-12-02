import React from "react";
import { useQuery, gql } from "@apollo/client";

import Banner from "../../organisms/banner/banner";
import Carousel from "../../organisms/carousel/carousel";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";

const EXCHANGE_RATES = gql`
	query {
		books {
			name
		}
	}
`;

const Homepage = ({ banner, carousel, footer, header }) => {
	const { loading, error, data } = useQuery(EXCHANGE_RATES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<>
			<Header {...header} />
			<h2>Products</h2>
			{data.books.map(({ name }) => (
				<h3>{name}</h3>
			))}
			<Banner {...banner} />
			<Carousel {...carousel} />
			<Footer {...footer} />
		</>
	);
};

export default Homepage;