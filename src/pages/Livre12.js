import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre12() {
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
		const livre12 = document.getElementById("livre12");
		livre12.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre12 = document.getElementById("livre12");
		livre12.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre12 = document.getElementById("livre12");
		livre12.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre12 = document.getElementById("livre12");
		livre12.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre12" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/objectif-a-long-terme.jpg"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Vision Long Terme et Objectifs</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">
							L'art de dessiner son futur , un chemin vers l'accomplissement
						</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans le tumulte incessant de notre vie quotidienne, il est facile de se perdre dans l’urgence des tâches,
							des obligations et des distractions qui nous entourent. Pourtant, prendre du recul pour définir une vision
							à long terme est essentiel pour orienter nos actions et donner un sens à nos efforts. Cette vision est
							notre étoile polaire, un phare qui éclaire notre chemin même dans les moments les plus sombres. Elle nous
							permet de nous projeter dans l’avenir, de rêver grand et d’aspirer à un meilleur soi. En établissant des
							objectifs clairs et motivants, nous pouvons transformer cette vision en une réalité tangible.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La première étape de ce processus consiste à s’engager dans une réflexion profonde sur ce que nous
							souhaitons réellement accomplir dans notre vie. Quelles sont nos passions, nos valeurs, nos talents ?
							Quelle empreinte voulons-nous laisser dans ce monde ? Prendre le temps de répondre à ces questions
							fondamentales est une invitation à explorer notre essence. Cet exercice de réflexion peut s’accompagner de
							journaling, de méditation ou même de discussions avec des personnes qui nous inspirent. Il s’agit d’un
							voyage intérieur où chaque réponse nous rapproche un peu plus de notre véritable désir.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Une fois que nous avons commencé à définir cette vision, il est crucial de la rendre aussi précise que
							possible. Une vision floue ne peut pas guider nos actions. Par exemple, au lieu de dire « Je veux être
							heureux », nous pourrions affiner cela en disant « Je souhaite créer un équilibre entre ma vie
							professionnelle et personnelle, passer plus de temps avec ma famille, et développer mes compétences
							artistiques ». En précisant notre vision, nous la rendons plus tangible, plus accessible, et nous créons
							une image claire de ce que nous désirons atteindre.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Après avoir défini notre vision, il est temps de transformer celle-ci en objectifs concrets. Les objectifs
							sont les étapes qui nous mèneront à notre destination finale. Ils doivent être SMART : spécifiques,
							mesurables, atteignables, réalistes et temporellement définis. Par exemple, si notre vision est de devenir
							un expert dans notre domaine, un objectif pourrait être « Suivre un cours de formation dans ce domaine
							d’ici la fin de l’année ». En décomposant notre vision en objectifs clairs, nous créons un plan d’action
							qui rend notre rêve plus réalisable.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Il est également essentiel de se rappeler que ces objectifs ne sont pas gravés dans le marbre. La vie est
							dynamique, et nos aspirations peuvent évoluer avec le temps. En étant flexibles et en nous adaptant aux
							changements, nous restons en phase avec notre vision. Cela nécessite une évaluation régulière de nos
							progrès, une réévaluation de nos objectifs et la capacité d’ajuster notre parcours en fonction des
							circonstances et des nouvelles opportunités.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La motivation joue un rôle clé dans la réalisation de nos objectifs. Il est facile de se laisser submerger
							par les défis ou de perdre de vue notre vision dans les moments de difficulté. Pour maintenir notre
							motivation, il est utile de célébrer nos petites victoires. Chaque étape franchie vers notre objectif
							mérite d’être reconnue. Ces célébrations renforcent notre engagement et nous rappellent que chaque effort
							compte. De plus, s’entourer de personnes positives qui partagent nos aspirations peut être une source de
							soutien et d’inspiration. Les échanges avec des mentors ou des amis qui nous encouragent à persévérer sont
							inestimables dans notre parcours.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Une autre clé pour nourrir notre vision est de rester connecté à notre « pourquoi ». Pourquoi cette vision
							est-elle importante pour nous ? Quelles émotions et quels désirs sous-tendent notre quête ? Lorsque nous
							comprenons les raisons profondes qui nous poussent à agir, nous trouvons une source de motivation
							inépuisable. Cela nous aide à surmonter les obstacles et à rester concentrés sur notre chemin, même
							lorsque la route devient difficile.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Enfin, l’une des leçons les plus précieuses que nous pouvons apprendre sur ce chemin est que le voyage
							compte autant que la destination. La poursuite de nos objectifs et de notre vision est une aventure en
							soi. Elle nous offre des opportunités d’apprentissage, de croissance personnelle et d’épanouissement. En
							embrassant ce processus, nous découvrons non seulement notre potentiel, mais aussi la joie de chaque étape
							parcourue. Chaque défi, chaque échec, chaque succès contribue à la richesse de notre expérience de vie.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, établir une vision à long terme et définir des objectifs clairs nous permet de naviguer à travers
							les méandres de la vie avec intention et sens. C’est un voyage qui demande courage et engagement, mais qui
							peut nous mener vers un avenir épanouissant, aligné avec notre véritable essence. En prenant le temps de
							rêver, de planifier et d’agir, nous pouvons transformer nos aspirations en réalité, créant ainsi une vie
							qui nous inspire et nous comble.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre12;
