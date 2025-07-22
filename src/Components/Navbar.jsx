const Navbar = ({ setCategory }) => {
	return (
		<nav className="navbar navbar-dark bg-dark px-3">
			<a className="navbar-brand" href="#">
				<span className="badge bg-light text-dark fs-5">SonicNews</span>
			</a>
			<div className="d-flex gap-1">
				<button
					className="btn btn-outline-light rounded-pill px-3 py-1"
					onClick={() => setCategory("science")}
				>
					Science
				</button>
				<button
					className="btn btn-outline-light rounded-pill px-3 py-1"
					onClick={() => setCategory("technology")}
				>
					Technology
				</button>
				<button
					className="btn btn-outline-light rounded-pill px-3 py-1"
					onClick={() => setCategory("business")}
				>
					Business
				</button>
				<button
					className="btn btn-outline-light rounded-pill px-3 py-1"
					onClick={() => setCategory("entertainment")}
				>
					Entertainment
				</button>
				<button
					className="btn btn-outline-light rounded-pill px-3 py-1"
					onClick={() => setCategory("sports")}
				>
					Sports
				</button>
				<button
					className="btn btn-outline-light rounded-pill px-3 py-1"
					onClick={() => setCategory("health")}
				>
					Health
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
