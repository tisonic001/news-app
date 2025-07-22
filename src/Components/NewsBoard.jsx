import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		let url = `https://newsapi.org/v2/top-headlines?country=us${
			category ? `&category=${category}` : ""
		}&apiKey=ca1a3c1086e84678b2d24a3465bc2cd1`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => setArticles(data.articles));
	}, [category]);

	return (
		<div className="container my-4">
			<h2 className="text-center mb-4">
				Latest <span className="badge bg-danger">News</span>
			</h2>
			<div className="row justify-content-center">
				{articles.map((news, index) => (
					<div
						className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4"
						key={index}
					>
						<NewsItem
							title={news.title}
							description={news.description}
							src={news.urlToImage}
							url={news.url}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewsBoard;
