import { useEffect, useState } from "react";
import { UIdContext } from "./components/AppContext";
import Routes from "./components/Routes";
import axios from "axios";

const App = () => {
	const [uid, setUId] = useState(null);

	useEffect(() => {
		const fetchToken = async () => {
			await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}jwtid`,
				withCredentials: true,
			})
				.then((res) => setUId(res.data))
				.catch((err) => console.log("no token"));
		};
		fetchToken();
	}, [uid]);

	return (
		<UIdContext.Provider value={uid}>
			<Routes />
		</UIdContext.Provider>
	);
};

export default App;
