import React, { useContext } from "react";
import Log from "../components/Log";
import { UIdContext } from "../components/AppContext";

const Profil = () => {
	const uid = useContext(UIdContext);

	return (
		<div className="profil-page">
			{uid ? (
				<h1>UPDATE PAGE</h1>
			) : (
				<div className="log-container">
					<Log signin={false} signup={true} />
					<div className="img-container">
						<img src="./assets/img/settings-ico.svg" alt="img" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Profil;
