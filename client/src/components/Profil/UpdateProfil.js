import React from "react";
import LeftNav from "../LeftNav";
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
	const userData = useSelector((state) => state.userReducer);

	return (
		<div className="profil-container">
			<LeftNav />
			<h1>Profil de {userData.pseudo}</h1>
			<div className="update-container">
				<div className="picture-part">
					<h3>Photo du profil</h3>
					<img src={userData.picture} alt="user-pic" />
					<UploadImg />
					{/* <p>{errors.maxSize}</p>
                    <p>{errors.format}</p> */}
				</div>
			</div>
		</div>
	);
};

export default UpdateProfil;
