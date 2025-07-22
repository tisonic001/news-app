import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import "../src/App.css";

const App = () => {
	const [category, setCategory] = useState("");

	return (
		<div
			style={{ backgroundColor: "#0d1b2a", minHeight: "100vh", color: "white" }}
		>
			<Navbar setCategory={setCategory} />
			<NewsBoard category={category} />
		</div>
	);
};

export default App;
