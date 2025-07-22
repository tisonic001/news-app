import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = `https://newsapi.org/v2/top-headlines?country=us${
			category ? `&category=${category}` : ""
		}&apiKey=ca1a3c1086e84678b2d24a3465bc2cd1`;

		setLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (Array.isArray(data.articles)) {
					setArticles(data.articles);
				} else {
					setError("No articles found or API error.");
				}
				setLoading(false);
			})
			.catch((err) => {
				setError("Failed to fetch news.");
				setLoading(false);
			});
	}, [category]);

	return (
		<div className="container my-4">
			<h2 className="text-center mb-4">
				Latest <span className="badge bg-danger">News</span>
			</h2>

			{loading && <p className="text-center">Loading...</p>}
			{error && <p className="text-center text-danger">{error}</p>}

			<div className="row justify-content-center">
				{Array.isArray(articles) &&
					articles.map((news, index) => (
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
