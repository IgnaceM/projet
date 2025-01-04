import React , {useEffect , useState} from "react";
import "../styles css/style.css";
import { Link, useLocation } from "react-router-dom";

function Footer() {

	const [activeLink, setActiveLink] = useState(null);
		const location = useLocation();  
	
		useEffect(() => {
			// Mettre à jour le lien actif en fonction de l'URL actuelle
			if (location.pathname === "/homeText") {
				setActiveLink("homeText");
			} else if (location.pathname === "/homeAudio") {
				setActiveLink("homeAudio");
			}
		}, [location]);

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
		const footer = document.getElementById("footer");
		footer.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const footer = document.getElementById("footer");
		footer.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const footer = document.getElementById("footer");
		footer.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const footer = document.getElementById("footer");
		footer.style.background = "black";
	}

	const share = async()=>{
		const share = document.getElementById("share");

	
		
			if (navigator.share) {
				try {
					await navigator.share({
						title: "Ignace App ! Meilleure application de développement personnel",
						text: "Découvrez ce site incroyable !",
						url: window.location.href,
					});
					console.log("Contenu partagé avec succès");
				} catch (error) {
					console.error("Erreur lors du partage :", error);
				}
			} else {
				alert("Le partage n’est pas pris en charge sur ce navigateur.");
			}
	
		}
	return (
	
	
		<>
			<div
				id="footer"
				className=" fixed bottom-0 flex justify-between items-center mt-32 z-40 w-full h-20 px-7 opacity-0 max-md:opacity-100"
			>
				<Link to="/homeText">
					<div className="flex flex-col justify-center items-center ">
						<img src=".\images\Note_50px.png" alt="" className="h-[35px] w-[35px]" />
						<p className={activeLink === "homeText" ? "text-purple-700" : "text-gray-400"}>Livres</p>
					</div>
				</Link>

				<Link to="/homeAudio">
					<div className="flex flex-col justify-center items-center ">
						<img src=".\images\Musical Notes_50px.png" alt="" className="h-[35px] w-[35px]" />
						<p className={activeLink === "homeAudio" ? "text-purple-700" : "text-gray-400"}>Audios</p>
					</div>
				</Link>

				<Link to="/about">
					<div className="flex flex-col justify-center items-center ">
						<img src=".\images/High Importance_50px.png" alt="" className="h-[35px] w-[35px]" />
						<p className="-mt-1 text-gray-400 ">A propos</p>
					</div>
				</Link>

				<div id="share" onClick={()=> share()} className="flex flex-col justify-center items-center ">
					<img src=".\images/Share_50px.png" alt="" className="h-[35px] w-[35px]" />
					<p className="-mt-1 text-gray-400 ">Partager</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
