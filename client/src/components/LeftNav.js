import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
	return (
		<div className="left-nav-container">
			<div className="icons">
				<NavLink to="/">
					<img src="./assets/pictos/home.svg" alt="home" />
				</NavLink>
				<br />
				<NavLink to="/trending">
					<img src="./assets/pictos/trending.svg" alt="trending" />
				</NavLink>
				<br />
				<NavLink to="/profil">
					<img src="./assets/pictos/user.svg" alt="profil" />
				</NavLink>
				<br />
			</div>
		</div>
	);
};

export default LeftNav;
