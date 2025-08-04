import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import newsImage from "../assets/news.jpg";

const NewsBoard = ({ category }) => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const isProduction = import.meta.env.MODE === "production";

		if (isProduction) {
			
			setArticles([
				{
					title: "Sample News Title 1",
					description: "This is a sample news article shown for demo purposes.",
					urlToImage: newsImage,
					url: "#",
				},
				{
					title: "Sample News Title 2",
					description:
						"Another placeholder article while API is not available.",
					urlToImage: newsImage,
					url: "#",
				},
				{
					title: "Sample News Title 3",
					description: "You can update the API or add more dummy data here.",
					urlToImage: newsImage,
					url: "#",
				},
			]);
		} else {
			
			let url = `https://newsapi.org/v2/top-headlines?country=us${
				category ? `&category=${category}` : ""
			}&apiKey=${import.meta.env.VITE_API_KEY}`;

			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					if (data.articles) {
						setArticles(data.articles);
					} else {
						setArticles([]);
					}
				})
				.catch((error) => {
					console.error("API error:", error);
					setArticles([]);
				});
		}
	}, [category]);

	return (
		<div className="container my-4">
			<h2 className="text-center mb-4">
				Latest <span className="badge bg-danger">News</span>
			</h2>
			{articles.length > 0 ? (
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
			) : (
				<p className="text-center text-danger">
					No articles found or API error.
				</p>
			)}
		</div>
	);
};

export default NewsBoard;
