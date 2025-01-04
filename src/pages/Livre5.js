import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";


function Livre5() {

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
		const livre5 = document.getElementById("livre5");
		livre5.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre5 = document.getElementById("livre5");
		livre5.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre5 = document.getElementById("livre5");
		livre5.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre5 = document.getElementById("livre5");
		livre5.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle/>
			<HeaderText />
			<Footer/>
			<div id="livre5" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img src="./images/notesImages/germination.jpg" alt="" className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]" />
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Mentalité de Croissance</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">Dépasser ses propres limites , défier l'immobilisme</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Penses-tu vraiment que tu as atteint ton potentiel ? Que tu es aussi capable, aussi compétent que possible ? Si c’est ce que tu crois, alors tu te condamnes toi-même à rester là, immobile, emprisonné dans cette idée fixe. Une mentalité de croissance ne tolère pas cette illusion confortable. Elle ne se satisfait pas de limites imaginées, ni d’un état stagnant. Car en réalité, chaque jour, chaque échec, chaque succès, est une opportunité de croissance, de transformation. Te laisses-tu vraiment l’opportunité de dépasser ce que tu crois être tes capacités ?
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						La mentalité de croissance, c’est ce regard impitoyable sur soi, qui refuse de se cacher derrière des excuses comme « je ne suis pas fait pour ça » ou « c’est trop tard pour changer ». Ce sont des barrières, et ce qui est pire, ce sont des barrières que tu as choisies. Bien sûr, c’est rassurant de penser qu’on a déjà atteint le maximum, que nos limites sont fixes, tracées, bien visibles. Mais c’est aussi la manière la plus efficace de saboter sa propre réussite, de refuser de devenir la personne que l’on pourrait être. Sors de cette zone de confort où tout te semble déjà défini. C’est là que commence la vraie transformation.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Oser t’aventurer hors de ces frontières auto-imposées exige une confrontation directe avec tes faiblesses. Es-tu prêt à reconnaître que tu ne sais pas tout ? Que tu échoueras, souvent ? Es-tu prêt à affronter le fait que des erreurs font partie de ton parcours ? Une mentalité de croissance ne supporte pas les excuses, elle n’accepte pas les raccourcis. Ceux qui veulent grandir, qui veulent vraiment voir de quoi ils sont capables, savent que chaque erreur, chaque correction, chaque ajustement fait partie d’un apprentissage sans fin. Dans cette vision, échouer n’est pas une honte, c’est une étape nécessaire, un enseignement qu’on accueille, même avec un peu de douleur, parce qu’on sait qu’il y a une leçon précieuse à en tirer.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Mais la question reste : es-tu prêt à vivre ce processus ? À remettre en question ce que tu crois savoir, à désapprendre pour mieux réapprendre ? Dans ce chemin de croissance, la complaisance est l’ennemi. Ce qui hier était ton meilleur peut, demain, ne plus être assez. Cette idée peut être inconfortable, voire effrayante. Pourtant, ceux qui embrassent cette mentalité savent que le confort ne mène nulle part. Seule la confrontation, l’effort, l’insatisfaction constructive sont de véritables moteurs de transformation.
							
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Observe-toi dans les moments d’inconfort. Comment réagis-tu lorsque tu fais face à un obstacle ? Quand tout ne se déroule pas comme tu l’espérais ? Si tu cherches à te détourner, si tu te dis que ce n’est pas fait pour toi, alors il est peut-être temps de te demander : est-ce que je me donne vraiment la chance d’évoluer ? Une mentalité de croissance n’évite pas le défi, elle le recherche. Elle sait que chaque difficulté est une opportunité de prouver sa capacité à s’adapter, à progresser, à devenir plus fort.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Alors, reste en mouvement. Ne te repose pas sur tes acquis, ne te laisse pas séduire par l’idée que tu es « assez bon ». Car en vérité, il n’y a pas de « assez ». Il n’y a pas de ligne d’arrivée. La croissance est un chemin sans fin, une quête vers des versions toujours meilleures de toi même. Ce chemin n’est pas pour ceux qui veulent se reposer ; il est pour ceux qui veulent repousser leurs propres limites, dépasser chaque succès pour en atteindre un autre, toujours plus grand.
						</p>
						<br />
						<br />
						
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre5;
