import React , {useEffect , useRef} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";


function Livre1() {

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
		const livre1 = document.getElementById("livre1");
		livre1.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre1 = document.getElementById("livre1");
		livre1.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre1 = document.getElementById("livre1");
		livre1.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre1 = document.getElementById("livre1");
		livre1.style.backgroundColor="black"
	}

	

	return (
		<>
			<LivreTitle/>
			<HeaderText />
			<Footer/>
			<div id="livre1" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img src="./images/notesImages/stoicisme.jpeg" alt="" className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]" />
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">La Philosophie du stoïcisme</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">Introduction</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans une époque où l’imprévisibilité règne et où les certitudes se raréfient, il existe pourtant une voie,
							un chemin millénaire emprunté par ceux qui cherchaient non seulement la sagesse, mais surtout la paix
							intérieure. Cette voie, qui pourrait sembler austère, nous appelle pourtant avec une promesse profonde :
							celle de faire face au monde sans se laisser emporter par ses tumultes. C’est le Stoïcisme, un art de
							vivre aussi rigoureux que libérateur. À la base de cette philosophie se trouve un concept crucial, parfois
							difficile à accepter, mais essentiel pour transformer notre façon de voir la vie : la dichotomie du
							contrôle.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Tout commence ici, dans cette simple mais impitoyable distinction entre ce qui dépend de nous et ce qui ne
							dépend pas de nous. Nous pouvons contrôler nos pensées, nos actions, nos intentions, mais le monde
							extérieur ? Notre santé, la météo, l’opinion des autres, le succès de nos efforts ? Tout cela échappe à
							notre emprise. Combien de fois avons-nous été dévastés, plongés dans des tourments intérieurs face à des
							événements que nous ne pouvions maîtriser ? Combien de nuits avons-nous passées à ressasser ce qui échappe
							irrémédiablement à notre pouvoir ? Le stoïcien sait qu’il ne gagnera jamais cette bataille s’il cherche à
							plier le monde à ses volontés. Il choisit plutôt de diriger son énergie vers ce qu’il peut véritablement
							modeler : son esprit, ses pensées, sa propre attitude.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Une fois ce contrôle accepté, une autre question survient, encore plus profonde, presque terrifiante dans
							sa simplicité : si le monde ne peut être entièrement façonné, comment devrions-nous alors l’affronter ? La
							réponse des stoïciens est tout aussi tranchante. Ce qui a de la valeur, ce qui demeure au-delà des aléas
							de l’existence, c’est la vertu – non pas comme une simple moralité, mais comme un engagement ferme envers
							des principes qui surpassent les circonstances.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans le cœur du stoïcien, quatre vertus règnent en maîtresses, comme les piliers d’un temple : la sagesse,
							le courage, la justice, la tempérance. La sagesse, cette capacité rare de discerner le bon du mauvais, de
							ne pas confondre le futile et l’essentiel, devient un guide. Dans un monde où tout va vite, où la
							surabondance d’informations nous étourdit, combien parviennent réellement à faire des choix éclairés, à
							vivre en accord avec ce qui compte ? Le courage, cette force brute et silencieuse qui nous permet
							d’affronter l’inconnu, de marcher avec résolution même lorsque le chemin semble noyé dans les ténèbres,
							s’impose alors. Pour le stoïcien, le courage n’est pas une bravade, mais un engagement : ne pas céder aux
							peurs, ne pas fuir l’adversité. Quant à la justice, elle est plus qu’un simple respect de la loi. Elle est
							la volonté, inébranlable, de traiter chaque être avec équité, de reconnaître l’humanité qui nous lie les
							uns aux autres. Enfin, la tempérance, cette retenue presque ascétique, nous rappelle qu’il y a une liberté
							puissante à se détacher des excès, à résister aux pulsions qui nous entraînent dans une quête sans fin de
							plaisirs éphémères.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Mais ce chemin de vertu, aussi noble soit-il, exige une force particulière : celle de ne pas céder aux
							assauts des émotions destructrices. La résilience émotionnelle devient alors l’armure du stoïcien. Dans
							les pires moments, quand tout semble se dresser contre nous, il ne s’agit pas de nier la douleur, ni de
							prétendre que tout va bien, mais d’accueillir les sentiments sans les laisser nous submerger. Il y a
							quelque chose de presque héroïque dans cette façon de s’ériger face aux difficultés, de ne pas céder au
							désespoir. C’est comme une flamme discrète, mais intense, qui refuse de s’éteindre même au milieu de la
							tempête.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Pourtant, au cœur de cette quête de contrôle et de vertu, un paradoxe se dévoile : vivre dans l’instant
							présent, pleinement, sans se laisser happer par les regrets du passé ni par les peurs de l’avenir. Marc
							Aurèle, l’empereur stoïcien, répétait sans relâche cette injonction dans ses écrits : "Ne te trouble pas
							de ce qui n’existe pas encore". Vivre dans le présent, c’est vivre avec clarté, avec une intensité rare.
							Et cette intensité se double de la gratitude, une gratitude qui ne s’arrête pas aux succès ou aux
							plaisirs. Pour le stoïcien, même l’épreuve, même la souffrance est un bien, car elle nous façonne, elle
							nous offre une occasion d’éprouver notre force intérieure.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Enfin, il y a une réflexion qui plane sur toute cette philosophie, une pensée qui pousse à l’humilité et à
							la lucidité : celle de notre propre mortalité. Le stoïcien médite sur la mort non pour s’en effrayer, mais
							pour s’en inspirer. Car comprendre que notre temps est limité, que chaque jour pourrait être le dernier,
							c’est saisir l’urgence de vivre avec intégrité, avec fidélité à soi-même. Que les opinions des autres, que
							les pertes et les gains matériels ne pèsent plus bien lourd face à cette vérité. La mort, pour le
							stoïcien, est la grande conseillère, celle qui nous rappelle de ne pas perdre de temps en futilités.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi se dessine le chemin stoïcien, un chemin austère et exigeant, mais qui, pour celui qui ose s’y
							aventurer, promet une liberté incomparable. Celle de ne plus être esclave ni des autres, ni des
							événements, ni même de soi. C’est la promesse d’une paix intérieure que rien ni personne ne peut ébranler.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre1;
