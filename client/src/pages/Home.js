import React, { useContext } from "react";
import { UIdContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";
import Log from "../components/Log";
import Trends from "../components/Trends";

const Home = () => {
	const uid = useContext(UIdContext);

	return (
		<div className="home">
			<LeftNav />
			<div className="main">
				<div className="home-header">{uid ? <NewPostForm /> : <Log signin={true} signup={false} />}</div>
				<Thread />
			</div>
			<div className="right-side">
				<div className="wrapper">
					<Trends />
				</div>
			</div>
		</div>
	);
};

export default Home;
