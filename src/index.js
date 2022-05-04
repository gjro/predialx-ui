import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Router/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Routes></Routes>
	</React.StrictMode>
);
