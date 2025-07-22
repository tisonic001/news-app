import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
	return (
		<div className="card h-100 bg-dark text-white d-flex flex-column">
			<img
				src={src ? src : image}
				className="card-img-top"
				alt="news"
				style={{ height: "180px", objectFit: "cover" }}
			/>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{title?.slice(0, 60)}...</h5>
				<p className="card-text">{description?.slice(0, 120)}...</p>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="btn-read-more mt-auto"
				>
					Read More
				</a>
			</div>
		</div>
	);
};

export default NewsItem;
