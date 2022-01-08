import React, { useContext } from "react";
import Log from "../components/Log";
import { UIdContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
	const uid = useContext(UIdContext);

	return (
		<div className="profil-page">
			{uid ? (
				<UpdateProfil />
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
