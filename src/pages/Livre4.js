import React , {useEffect} from "react";
import Footer from "../composants/Footer";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre4() {

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
		const livre4 = document.getElementById("livre4");
		livre4.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre4 = document.getElementById("livre4");
		livre4.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre4 = document.getElementById("livre4");
		livre4.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre4 = document.getElementById("livre4");
		livre4.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer />
			<div id="livre4" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img src="./images/notesImages/emotions.jpg" alt="" className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]" />
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">La Gestion des émotions</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">L'art de comprendre et d'apaiser son cœur</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La vie est faite d’émotions, d’une palette infinie de ressentis qui colorent chaque jour différemment, qui
							nous font vibrer, qui nous transportent ou nous bouleversent. Nos émotions sont, en un sens, les voix
							profondes de notre être qui nous parlent, qui nous guident. Mais parfois, elles nous envahissent, nous
							emportent, et il devient difficile de garder un équilibre intérieur. Savoir les gérer, les comprendre, et
							même les apaiser est un art précieux, une clé vers une existence plus sereine et plus joyeuse.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La première étape pour bien gérer ses émotions est d’abord de les accepter, de les reconnaître comme des
							alliées, non comme des ennemies à combattre. Il est naturel de ressentir, d’avoir des instants de
							tristesse, de colère, de joie ou de peur. Se rappeler cela, c’est déjà poser les bases d’une relation
							saine avec nos émotions. Plutôt que de les réprimer ou de les ignorer, apprenons à les accueillir
							calmement, sans jugement. Si l’on ressent de la colère, par exemple, au lieu de s’en vouloir ou de
							chercher à l’éliminer d’un coup, on peut simplement prendre un moment pour respirer et observer cette
							colère. Pourquoi est-elle là ? Qu’est-ce qu’elle cherche à me dire ? Dans cet acte simple d’écoute,
							l’émotion commence déjà à s’apaiser, car elle se sent reconnue.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le pouvoir de l’écoute intérieure est immense. Prenons le temps, même quelques instants par jour, pour
							nous reconnecter à nos émotions, les ressentir sans y réagir immédiatement. C’est comme si l’on apprenait
							à surfer sur des vagues : au lieu de nous laisser submerger, on s’ajuste, on suit le mouvement avec une
							certaine douceur, une certaine souplesse. Lorsque l’on ressent une émotion forte, le simple fait de fermer
							les yeux, de prendre une profonde inspiration et d’écouter ce que l’on ressent nous permet de créer un
							espace entre nous et l’émotion. Dans cet espace, nous ne sommes plus seulement « en colère » ou « anxieux
							», mais des observateurs qui prennent conscience de l’émotion. Et dans cette prise de conscience,
							l’intensité de l’émotion commence à diminuer, tout naturellement.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Se rappeler que chaque émotion a sa place, son utilité, peut aussi transformer notre façon de les vivre.
							La peur, par exemple, nous alerte sur un danger potentiel, la tristesse nous pousse parfois à nous
							recentrer, à prendre soin de nous-mêmes. Mais ce sont des messages, et non des identités. Nous ne sommes
							pas nos émotions ; elles ne sont que des invités passagers dans notre esprit et notre cœur. Cette pensée,
							si simple et pourtant si puissante, peut nous aider à retrouver notre calme face à l’agitation intérieure.
							Comme un ciel qui reste vaste, même lorsque des nuages passent, notre être reste intact, même lorsque des
							émotions le traversent.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Pour nous aider dans cette gestion, il existe des pratiques qui nourrissent cette stabilité intérieure. La
							respiration, par exemple, est une alliée précieuse. Prendre le temps de respirer profondément, d’entrer en
							contact avec notre souffle, nous ramène dans le moment présent, loin des tourments qui se nourrissent
							souvent de nos projections ou de nos souvenirs. Chaque respiration devient alors un pont vers le calme,
							vers une conscience apaisée. De même, l’expression de nos émotions par l’écriture, la parole, ou l’art est
							un moyen simple et puissant de les libérer, de ne pas les laisser s’accumuler ou nous envahir. Écrire ce
							que l’on ressent, en toute sincérité, ou en parler à une personne de confiance peut être comme une fenêtre
							ouverte, laissant sortir les émotions avec légèreté.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Et, enfin, dans la gestion des émotions, n’oublions jamais la bienveillance envers nous-mêmes. Nous sommes
							humains, et notre richesse réside aussi dans cette capacité à ressentir, à être touchés par la vie. Nos
							émotions, qu’elles soient douces ou difficiles, sont des témoignages de notre sensibilité, de notre
							profondeur. En les acceptant, en les comprenant, nous apprenons à mieux nous connaître et à vivre de
							manière plus authentique.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, aborder nos émotions avec calme et positivité nous permet de vivre chaque instant pleinement, sans
							fuir ce que l’on ressent, mais au contraire, en accueillant chaque émotion comme une étape vers une plus
							grande paix intérieure. Peu à peu, nous découvrons que nous avons en nous tout ce qu’il faut pour surfer
							sur les vagues de la vie, avec confiance, douceur, et une sérénité grandissante.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre4;
