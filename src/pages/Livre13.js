import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre13() {

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
		const livre13 = document.getElementById("livre13");
		livre13.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre13 = document.getElementById("livre13");
		livre13.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre13 = document.getElementById("livre13");
		livre13.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre13 = document.getElementById("livre13");
		livre13.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre13" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/prosperite.avif"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Mentalité de la Prospérité</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">
							La richesse intérieure comme fondement de l'abondance
						</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Adopter une mentalité de prospérité est une démarche qui transcende la simple accumulation de biens matériels ; c’est un véritable état d’esprit, ancré dans la conviction que l’abondance est un droit naturel. Dans un monde où l’obsession pour la richesse matérielle est omniprésente, il est vital de comprendre que la prospérité commence à l’intérieur de nous. Cela repose sur des principes universels, comme la loi de l'attraction et la loi de la vibration, qui régissent nos expériences de vie. Que se passerait-il si nous réalisions que tout ce que nous attirons dans notre existence est le reflet de notre propre état d’esprit ? Pourquoi tant d’entre nous restent ils coincés dans un schéma de manque, de peur et de limitation ?
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						La loi de l'attraction stipule que nos pensées et nos émotions attirent des circonstances similaires dans notre vie. Si nous nous concentrons sur l'abondance, la gratitude et la prospérité, nous sommes plus susceptibles d'attirer des expériences qui résonnent avec cette énergie positive. Cela nécessite une transformation radicale de nos croyances, car trop souvent, nous avons été conditionnés à croire que les ressources sont limitées. Adopter une mentalité de prospérité commence par un changement de perspective. Au lieu de se focaliser sur ce qui nous manque, nous devons célébrer ce que nous avons déjà. La pratique quotidienne de la gratitude peut transformer notre état d’esprit et nous ouvrir aux nombreuses opportunités qui nous entourent.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Il est crucial de comprendre que la prospérité englobe bien plus que la richesse financière. Elle touche tous les aspects de notre vie : notre santé, nos relations, notre développement personnel. Une mentalité de prospérité nous pousse à envisager une approche holistique de l’abondance. La loi de la vibration nous rappelle que tout dans l’univers est énergie, et que notre propre vibration influence notre réalité. En élevant notre fréquence par des pensées et des émotions positives, nous créons un environnement favorable à l'abondance. Imaginez la puissance de se lever chaque jour avec une intention claire d'attirer des expériences positives : cette intention résonne et attire des résultats en accord avec notre fréquence.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Prendre des risques calculés et sortir de notre zone de confort sont également des éléments essentiels d’une mentalité de prospérité. La loi de l'attraction exige que nous soyons actifs dans la création de notre réalité. Cela implique d'oser saisir les opportunités, même si elles semblent intimidantes. Les personnes qui réussissent à transcender les défis sont celles qui choisissent de voir des possibilités là où d’autres ne voient que des obstacles. Cette audace peut ouvrir des portes inattendues. Mais il faut garder à l’esprit que la peur est souvent un obstacle à notre réussite. La clé est de reconnaître cette peur et de l’utiliser comme un tremplin pour avancer. En acceptant d'échouer, nous découvrons une puissance incroyable qui nous propulse vers l’avant.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Les relations que nous cultivons jouent également un rôle fondamental dans notre prospérité. S'entourer de personnes qui partagent une mentalité d'abondance nous permet de nourrir notre propre état d'esprit. Les interactions positives renforcent notre conviction que la prospérité est à notre portée. La loi de la correspondance, qui stipule que nos relations sont le reflet de notre état intérieur, souligne l’importance de choisir judicieusement notre entourage. Les échanges avec des individus inspirants et motivants peuvent éveiller en nous des aspirations profondes, nous poussant à réaliser notre potentiel.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Un autre aspect de la mentalité de prospérité est la générosité. Donner sans attendre en retour est un acte puissant qui renforce notre croyance en l’abondance. La loi du don et de la réception nous rappelle que ce que nous donnons revient toujours vers nous, souvent de manière inattendue. Que ce soit par des actes de bénévolat, en partageant nos connaissances ou en soutenant ceux qui nous entourent, cette générosité crée un cycle positif qui enrichit notre vie et celle des autres. En choisissant d’agir avec bienveillance, nous affirmons que la prospérité ne réside pas dans l’accumulation, mais dans le partage.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						La patience et la persévérance sont également essentielles. La mentalité de prospérité ne se construit pas du jour au lendemain ; elle est le fruit d’un engagement constant envers notre développement personnel. Dans le cadre de la loi de l’évolution, nous devons accepter que chaque échec, chaque revers est une occasion d'apprendre et de grandir. La clé est de rester engagé envers notre vision, de continuer à vibrer à une fréquence élevée, même lorsque les résultats ne sont pas immédiatement visibles. C’est dans cette continuité que se manifeste véritablement l’abondance.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						En somme, embrasser une mentalité de prospérité est un voyage intérieur qui commence par une transformation de notre état d’esprit. En cultivant l’abondance, en pratiquant la gratitude, en cultivant des relations enrichissantes et en agissant avec audace, nous créons un environnement propice à la richesse intérieure. Ce voyage nous permet de découvrir que la véritable prospérité ne se mesure pas en termes matériels, mais en termes de qualité de vie, d’expériences et de connexions authentiques. La richesse réside dans notre capacité à vivre pleinement, à aimer et à partager, tout en restant ancrés dans une vibration positive. En fin de compte, la mentalité de prospérité nous invite à embrasser la vie avec passion et ouverture, à croire en notre capacité à attirer le meilleur, et à participer activement à la création d’un monde d’abondance pour nous-mêmes et pour les autres.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre13;
