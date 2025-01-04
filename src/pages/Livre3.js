import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre3() {

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
		const livre3 = document.getElementById("livre3");
		livre3.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre3 = document.getElementById("livre3");
		livre3.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre3 = document.getElementById("livre3");
		livre3.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre3 = document.getElementById("livre3");
		livre3.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre3" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img src="./images/notesImages/38.jpg" alt="" className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]" />
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Méditation et Pleine Conscience</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">L'art de l'instant , la maîtrise de soi</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans le silence et la simplicité de l’instant, loin des tumultes du quotidien, une pratique millénaire
							nous invite à ralentir, à écouter, à observer. Elle pourrait sembler futile, presque naïve, à l’ère où
							tout va si vite, où chaque seconde doit être « productive », mais elle détient une puissance insoupçonnée,
							capable de transformer notre rapport au monde, aux autres et à nous-mêmes. Cette pratique, c’est la
							méditation, l’art de la pleine conscience, ce retour vers une présence totale à l’instant. Se poser, se
							taire, être, simplement. Le paradoxe est là : en cultivant la tranquillité, on découvre une énergie
							intérieure, une clarté d’esprit que rien d’autre ne peut offrir.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Méditer, c’est d’abord arrêter la fuite incessante de nos pensées, de ces vagues de ruminations, de
							jugements et de projections qui obscurcissent notre perception du monde. Nous passons une grande partie de
							notre vie perdus dans nos esprits, piégés dans des scénarios imaginaires, souvent anxiogènes. La pleine
							conscience, cette capacité à ramener notre attention sur le moment présent, nous libère de cet
							enchevêtrement mental. Cela ne signifie pas que les pensées disparaissent ; elles continuent de surgir,
							comme des nuages flottant dans le ciel. Mais au lieu de s’y accrocher, au lieu de les suivre sans fin, la
							méditation nous enseigne à les observer, à les laisser passer sans s’y attacher. Comme un spectateur qui
							regarde un film en gardant toujours un léger recul, sans se perdre dans l’illusion de l’écran.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ce détachement, cette capacité à voir nos pensées comme de simples phénomènes passagers, est une véritable
							libération. Prenons l’exemple de la colère. Une émotion puissante, dévorante, qui, lorsqu’elle nous
							possède, peut nous pousser à des actes et des paroles que l’on regrette par la suite. Par la pleine
							conscience, nous apprenons à identifier la colère lorsqu’elle émerge, à reconnaître sa nature éphémère, à
							la voir comme une flamme qui finira par s’éteindre d’elle même. La méditation devient alors une sorte
							d’entraînement : elle forge notre capacité à résister aux impulsions, à ne pas réagir instinctivement sous
							l’emprise des émotions. Cette distance que l’on apprend à instaurer entre nous et nos ressentis crée une
							puissance tranquille, une maîtrise de soi qui transcende les circonstances.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans cette pratique, le souffle est notre ancre. Il est toujours là, constant, régulier, prêt à nous
							ramener dans l’instant dès que notre esprit s’égare. Le simple acte de prêter attention à notre
							respiration, de suivre l’air qui entre et sort de notre corps, peut sembler insignifiant, mais il est au
							cœur de la méditation. Car en concentrant notre attention sur le souffle, nous redécouvrons notre corps,
							ce lien direct avec la réalité, ce qui est « ici et maintenant ». Peu à peu, on cesse de vivre uniquement
							dans la tête. On redescend, on réintègre cette présence physique, cet ancrage au monde concret. On devient
							pleinement vivant.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Mais la pleine conscience ne s’arrête pas au moment de la méditation formelle, assis en silence. Elle est
							une pratique que l’on peut infuser dans chaque instant, chaque geste, chaque parole. En mangeant, en
							marchant, en parlant avec quelqu’un, en travaillant. Lorsque l’on vit dans la pleine conscience, chaque
							acte, même le plus banal, devient une occasion d’être totalement présent, de savourer pleinement la
							réalité. Par exemple, en buvant un simple verre d’eau, au lieu de le faire machinalement, comme une
							formalité, on peut se concentrer sur chaque sensation : le goût, la fraîcheur, la texture. Cette
							attention, cette immersion dans le présent, transforme l’ordinaire en une expérience riche et profonde.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La méditation et la pleine conscience révèlent ainsi une vérité essentielle : ce n’est pas le monde
							extérieur, les événements, qui dictent notre paix intérieure. Ce qui nous trouble, ce qui nous perturbe,
							ce sont souvent les pensées que nous entretenons, les jugements que nous formulons. La méditation nous
							apprend à nous libérer de cette dépendance au monde extérieur, à trouver en nous cette paix qui reste
							intacte, même au cœur de la tempête. C’est une révolution douce mais radicale : on cesse de chercher le
							bonheur dans les choses, dans les personnes, dans les circonstances. On réalise qu’il est là, en soi, dans
							cet espace de calme, de silence, de conscience pure.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Imagine un moment de stress intense, une situation où tout semble t’échapper. Tu pourrais réagir,
							t’énerver, laisser la panique prendre le dessus. Mais, fort de cette pratique de la pleine conscience, tu
							choisis de t’arrêter. Un instant seulement. Tu respires, tu observes ton émotion sans t’y identifier. Et
							dans cet instant de recul, tu retrouves ton calme, ta clarté. Tu vois la situation telle qu’elle est, sans
							le voile des émotions qui déforme la perception. Ce moment de méditation devient alors une arme puissante,
							un moyen de reprendre le contrôle, de rester maître de soi même face aux situations les plus complexes.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, la méditation et la pleine conscience ne sont pas des refuges ou des échappatoires. Elles ne nous
							éloignent pas du monde, bien au contraire. Elles nous ramènent à une présence plus aigüe, plus vraie, qui
							nous permet de rencontrer la vie avec un esprit apaisé, une conscience élargie. En cultivant cette
							pratique, on apprend à vivre non plus en réaction, mais en accord, en harmonie avec le réel, avec un
							esprit limpide, toujours prêt à accueillir l’instant tel qu’il est.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre3;
