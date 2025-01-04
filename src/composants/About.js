import React , {useEffect} from "react";

function About() {

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
		const about = document.getElementById("about");
		about.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const about = document.getElementById("about");
		about.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const about = document.getElementById("about");
		about.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const about = document.getElementById("about");
		about.style.backgroundColor="black"
	}

	return (
		<>
			<div id="about" className="w-full h-full max-md:py-10 ">
        <a href="/homeText"><img src="..\images\Left_50px.png" alt="" className="absolute top-3 left-3 w-8 h-8 cursor-pointer" /></a>
				
				<div  className="flex flex-col h-lvh justify-center items-center">
					<img src="./images/logo.png" alt="" className="w-40 max-md:w-24 max-md:mb-5" />
          <h3 className="text-gray-500 uppercase text-[20px] -mt-4 font-bold">Ignace App</h3>
          <h3 className="text-blue-500 mt-5 text-[18px]">A propos de l'Application IGNACE APP
          </h3>
          <br />
          <p className="text-gray-500 w-1/2 text-[18px] max-md:w-[80%] max-md:text-[15px]">IGNACE APP est une application mobile innovante qui centralise des enseignements en Développement personnel provenant de diverses sources reconnues pour leurs qualités et leurs pertinences. conçue pour offrir un parcours d'apprentissage enrichi, elle permet d'accéder facilement à des textes inspirants, des articles spécialisés, ainsi qu'à une sélection des meilleurs audios éducatifs disponibles sur YouTube et autres plateformes.</p>
          <br />
          <p className="text-gray-500 w-1/2 text-[18px] max-md:w-[80%] max-md:text-[15px]">Grace à une approche de développement qui valorise l'experience utilisateur, l'application propose un environnement structuré et optimisé pour une progression personnelle continue et mesurable. En allant contenu et technologie, IGNACE APP met entre vos mains les outils essentiels pour enrichir votre développement personnel au quotidien</p>
          <br />
          <p className="text-gray-500 max-md:text-[15px] ">Développée par IGNACE MASIRIKA - <span className="text-blue-500">2024</span></p>
          <br />
				</div>
			</div>
		</>
	);
}
export default About;
