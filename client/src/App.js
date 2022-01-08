import { useEffect, useState } from "react";
import { UIdContext } from "./components/AppContext";
import Routes from "./components/Routes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

const App = () => {
	const [uid, setUId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchToken = async () => {
			await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}jwtid`,
				withCredentials: true,
			})
				.then((res) => setUId(res.data))
				.catch((err) => console.log(err + "no token"));
		};
		fetchToken();

		if (uid) dispatch(getUser(uid));
	}, [uid]);

	return (
		<UIdContext.Provider value={uid}>
			<Routes />
		</UIdContext.Provider>
	);
};

export default App;
