import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre6() {

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
		const livre6 = document.getElementById("livre6");
		livre6.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre6 = document.getElementById("livre6");
		livre6.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre6 = document.getElementById("livre6");
		livre6.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre6 = document.getElementById("livre6");
		livre6.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre6" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/Effective-tips-for-building-discipline.jpg"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Développement de la Discipline</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">
							Choisir entre la douleur de la discipline et la souffrance du regret
						</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans cette vie, que tu le veuilles ou non, tu devras choisir ta douleur : la discipline ou le regret. Ces
							deux forces n’ont rien de semblable, mais elles t’accompagnent inévitablement, d’une manière ou d’une
							autre. Si tu es prêt à faire face à la rigueur de la discipline, tu ouvriras la voie à la satisfaction,
							aux succès solides, à cette fierté méritée. Mais si tu renonces, si tu préfères le confort facile et
							temporaire de l’inaction, prépare-toi à vivre avec une amertume plus dévorante que toutes les autres :
							celle du regret. La discipline, certes, demande des sacrifices, mais elle donne en retour une vie
							construite, maîtrisée, une vie où tu n’es pas victime de tes propres faiblesses.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Penses-y une minute. Tous ces moments où tu choisis la facilité, ces décisions de procrastiner, de
							repousser à demain ce que tu pourrais accomplir aujourd’hui, s’accumulent en un bilan qui finira par te
							peser, par te trahir. Tu pourrais croire que céder à la paresse est inoffensif, mais en vérité, c’est un
							poison lent qui détruit tes ambitions, qui t’éloigne des choses que tu sais pourtant mériter. La paresse,
							cette faiblesse qui te murmure de rester dans ton confort, est une ennemie silencieuse, une sirène
							trompeuse qui t’entraîne vers l’échec. Car, finalement, chaque moment d’inaction est une opportunité de
							moins, un rêve qui s’éloigne, une chance que tu as laissée filer.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Oui, la discipline est dure. Elle te demande de te lever tôt quand tu préfèrerais rester au lit, de
							répéter inlassablement les efforts, même quand l’envie n’est plus là. Elle exige de toi des choix
							quotidiens, petits ou grands, qui ne sont pas toujours agréables. Mais sache ceci : chaque jour où tu
							choisis la discipline, tu avances. Tu construis quelque chose, tu te renforces. Parce que, oui, la
							discipline forge un caractère. Elle transforme la volonté en acier. Elle fait de toi une personne sur qui
							l’on peut compter, quelqu’un de fiable et de stable. Mais surtout, elle t’entraîne, elle t’élève à un
							niveau que la paresse ne pourra jamais t’offrir.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Et alors, que choisis-tu ? Vivre dans l’ombre de tes propres renoncements ? Laisser tes peurs et ton
							confort te dominer, jusqu’à ce qu’il ne te reste plus que le goût amer du regret ? Car, sois en sûr, le
							regret n’est pas indulgent. Il est cruel, implacable, et il ne te laisse jamais en paix. Il te rappellera
							sans cesse les moments où tu aurais pu agir, où tu aurais pu te surpasser, mais où tu as faibli, où tu as
							cédé à la facilité. Tu le sentiras, ce regret, et il sera bien plus douloureux que n’importe quel effort
							que tu aurais pu faire, car le regret ne t’offre aucune rédemption, aucune seconde chance. Il est
							définitif.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La discipline, elle, t’apprend le courage. Elle te pousse à surmonter les obstacles, à te confronter à
							toi-même, à te découvrir plus résistant, plus résolu que tu ne le pensais. Elle est un choix conscient, un
							engagement à ne pas accepter la médiocrité, ni dans tes actions, ni dans ton esprit. Ceux qui osent
							embrasser la discipline le savent : c’est un chemin exigeant, mais il mène quelque part. Il mène à des
							victoires, petites ou grandes, qui sont toujours le fruit de ton propre effort, de ta persévérance. Et
							cette fierté-là, celle qui naît du travail accompli, rien ni personne ne pourra te l’enlever. Elle est à
							toi, à jamais.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Alors, ose te poser la question : que veux-tu vraiment ? Veux-tu goûter à la satisfaction profonde de
							quelqu’un qui a persévéré, qui s’est battu pour ce qu’il voulait ? Ou veux-tu t’enfoncer dans la facilité,
							pour au final ne récolter que des regrets ? Sache que chaque jour sans discipline est un jour où tu te
							prives de ta propre réussite, un jour où tu renonces à ce que tu pourrais accomplir. La paresse ne te
							donnera rien, rien d’autre qu’une vie fade, inachevée, une existence sans substance, sans véritable
							accomplissement.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La discipline, quant à elle, bien que sévère, te pousse à transcender tes propres limites. Elle te
							rappelle que la grandeur n’est pas donnée, elle se mérite, elle se forge. Elle se gagne par des actes
							quotidiens, par des sacrifices que d’autres ne sont pas prêts à faire. Oui, elle est rude, elle est
							exigeante, mais elle est juste, elle te rend meilleur, plus fort, plus libre. Et c’est cela, au fond, la
							véritable liberté : être capable de se diriger soi-même, de ne pas être esclave de ses propres faiblesses,
							de ses propres tentations.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Alors, choisis avec courage, et rappelle-toi : une vie sans discipline est une vie sans fondation, une
							existence qui vacille au moindre obstacle. Mais une vie guidée par la discipline, même avec ses épreuves,
							est une vie solide, une vie bâtie pour durer. Ne laisse pas la paresse te voler cela.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre6;
