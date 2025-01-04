import React, { useEffect , useState  } from "react";
import "../styles css/style.css";
import { Link, useLocation } from "react-router-dom";

function LivreTitle() {
	

  
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
		const container = document.getElementById("container");
		container.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const container = document.getElementById("container");
		container.style.background = "linear-gradient(to right , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const container = document.getElementById("container");
		container.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const container = document.getElementById("container");
		container.style.backgroundColor = "black";
	}

	useEffect(() => {
			const theme = window.localStorage.getItem("theme");
			if (theme) {
				applyTheme(theme);
			}
		});

	const [activeLink, setActiveLink] = useState(null);
		const location = useLocation();  
	
		useEffect(() => {
			
			// Mettre à jour le lien actif en fonction de l'URL actuelle
			if (location.pathname === "/livre1") {
				setActiveLink("livre1");
			} else if (location.pathname === "/livre2") {
				setActiveLink("livre2");
			} else if (location.pathname === "/livre3") {
				setActiveLink("livre3");
			} else if (location.pathname === "/livre4") {
				setActiveLink("livre4");
			}else if (location.pathname === "/livre5") {
				setActiveLink("livre5");
			}else if (location.pathname === "/livre6") {
				setActiveLink("livre6");
			}else if (location.pathname === "/livre7") {
				setActiveLink("livre7");
			}
			else if (location.pathname === "/livre8") {
				setActiveLink("livre8");
			}
			else if (location.pathname === "/livre9") {
				setActiveLink("livre9");
			}
			else if (location.pathname === "/livre10") {
				setActiveLink("livre10");
			}
			else if (location.pathname === "/livre11") {
				setActiveLink("livre11");
			}
			else if (location.pathname === "/livre12") {
				setActiveLink("livre12");
			}
			else if (location.pathname === "/livre13") {
				setActiveLink("livre13");
			}
			else if (location.pathname === "/livre14") {
				setActiveLink("livre14");
			}
			else if (location.pathname === "/livre15") {
				setActiveLink("livre15");
			}
		}, [location]); 

		

	return (
		<>
			<div
				
				id="container"
				className=" fixed bg-black bg-opacity-20  gap-5 flex flex-col overflow-scroll items-center h-[100vh] left-0  py-28 w-[25%] max-md:hidden"
			>
				<div className="fixed bottom-0 z-20 text-white bg-zinc-800 gap-2 flex justify-center items-center w-[25%] h-20 ">
					<img src="./images/speakers/profilImage (7).jpeg" alt="" id="ico" className="w-14 h-12" />
					<p>Développements personnel</p>
				</div>
				<Link id="lnk" to="/livre1" className={activeLink === "livre1" ? "activeTitle" : ""}>
					<p
						
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Philosophie du stoïcisme
					</p>
				</Link>

				<Link to="/livre2" className={activeLink === "livre2" ? "activeTitle" : ""} >
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Acceptation et Résilience
					</p>
				</Link>
				<Link to="/livre3" className={activeLink === "livre3" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Méditation et Pleine Conscience
					</p>
				</Link>

				<Link to="/livre4" className={activeLink === "livre4" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Gestion des émotions
					</p>
				</Link>

				<Link to="/livre5" className={activeLink === "livre5" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Mentalité de Croissance
					</p>
				</Link>

				<Link to="/livre6" className={activeLink === "livre6" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Développement de la Discipline
					</p>
				</Link>

				<Link to="/livre7" className={activeLink === "livre7" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Prise de Décision et Sagesse
					</p>
				</Link>

				<Link to="/livre8" className={activeLink === "livre8" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Minimalisme et Détachement
					</p>
				</Link>

				<Link to="/livre9" className={activeLink === "livre9" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Importance des Relations et des Connexions
					</p>
				</Link>

				<Link to="/livre10" className={activeLink === "livre10" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Gestion du Stress et de l’Anxiété
					</p>
				</Link>

				<Link to="/livre11" className={activeLink === "livre11" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Compréhension et Connaissance de Soi
					</p>
				</Link>

				<Link to="/livre12" className={activeLink === "livre12" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Vision Long Terme et Objectifs
					</p>
				</Link>

				<Link to="/livre13" className={activeLink === "livre13" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Mentalité de la Prospérité
					</p>
				</Link>

				<Link to="/livre14" className={activeLink === "livre14" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Sérénité et Patience
					</p>
				</Link>

				<Link to="/livre15" className={activeLink === "livre15" ? "activeTitle" : ""}>
					<p
						id="scale"
						className="text-white bg-blue-500 bg-opacity-10 hover:scale-105 mt-0 hover:bg-opacity-20 cursor-pointer p-2 text-center radius-sm w-[300px] flex justify-center 
						"
					>
						Service aux Autres et Empathie
					</p>
				</Link>
			</div>
		</>
	);

}
export default LivreTitle;
