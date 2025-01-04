import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles css/style.css";

export default function Settings() {
	useEffect(() => {
		const theme = window.localStorage.getItem("theme");
		if (theme) {
			applyTheme(theme);
		}
	});

	function applyTheme(theme) {
		window.localStorage.setItem("theme", theme);

		switch (theme) {
			case "theme1":
				theme1();
				break;
			case "theme2":
				theme2();
				break;
			case "theme3":
				theme3();
				break;
			case "theme4":
				theme4();
				break;
			default:
				theme1();
		}
	}

	function theme1() {
		window.localStorage.getItem("theme1");
		const bod = document.getElementById("bod");
		bod.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const bod = document.getElementById("bod");
		bod.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const bod = document.getElementById("bod");
		bod.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const bod = document.getElementById("bod");
		bod.style.background = "black";
	}

	return (
		<>
			<div id="bod" className="h-lvh max-md:py-3">
				<br />
				<div className="fixed top-0 py-5 text-white shadow-md w-full flex justify-between px-[8%]">
				<Link to="/homeText">
						<p>Retour</p>
					</Link>
					<h1>Paramètres</h1>

					<Link to="/homeText">
						<p>Sauvegarder</p>
					</Link>
				</div>
				<div className="mt-32 max-md:mt-14 flex justify-center text-white">
					<h1>Themes</h1>
				</div>
				<div className="text-white mt-28 max-md:mt-14 text-2xl flex flex-wrap justify-center gap-10 max-md:gap-5">
					<p
						id="theme"
						onClick={() => applyTheme("theme1")}
						className="w-52 h-36 max-md:w-36 max-md:h-32 flex justify-center items-center rounded-sm cursor-pointer "
						style={{ background: "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )" }}
					>
						theme 1
					</p>
					<p
						id="theme"
						onClick={() => applyTheme("theme2")}
						className="w-52 h-36 max-md:w-36 max-md:h-32 flex text-white justify-center items-center rounded-sm cursor-pointer "
						style={{ background: "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))" }}
					>
						theme 2
					</p>

					<p
						id="theme"
						onClick={() => applyTheme("theme3")}
						className="w-52 h-36 max-md:w-36 max-md:h-32 flex text-white justify-center items-center rounded-sm cursor-pointer "
						style={{ background: "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))" }}
					>
						theme 3
					</p>

					<p
						id="theme"
						onClick={() => applyTheme("theme4")}
						className="w-52 h-36 max-md:w-36 max-md:h-32 flex text-white justify-center items-center rounded-sm cursor-pointer "
						style={{ background: "black" }}
					>
						theme 4
					</p>
				</div>
			</div>
		</>
	);
}
