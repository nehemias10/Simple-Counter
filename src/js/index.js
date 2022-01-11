//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.js";

//render your react application
/* ReactDOM.render(<Home />, document.querySelector("#app")); */
import { SecondsCounter } from "./component/home.js";

let counter = 0;
setInterval(function () {
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.getElementById("app")
	);
	counter += 1;
}, 1000);
