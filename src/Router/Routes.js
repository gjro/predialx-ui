import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import LoginScreen from "../screens/loginScreen";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<LoginScreen />} path="/" exact></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
