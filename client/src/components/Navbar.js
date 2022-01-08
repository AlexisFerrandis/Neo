import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UIdContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
	const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);

	return (
		<nav>
			<div className="nav-container">
				<div className="logo">
					<NavLink to="/">
						<div className="logo">
							<img src="./assets/logo/logo.svg" alt="home" />
							<h3>CPN NAME</h3>
						</div>
					</NavLink>
				</div>
				{uid ? (
					<ul>
						<li></li>
						<li className="welcome">
							<NavLink to="/profil">
								<h5>Bienvenue {userData.pseudo}</h5>
							</NavLink>
						</li>
						<Logout />
					</ul>
				) : (
					<ul>
						<li></li>
						<li>
							<NavLink to="/profil">
								<img src="./assets/pictos/login.svg" alt="login" />
							</NavLink>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
