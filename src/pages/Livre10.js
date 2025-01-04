import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre10() {
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
		const livre10 = document.getElementById("livre10");
		livre10.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre10 = document.getElementById("livre10");
		livre10.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre10 = document.getElementById("livre10");
		livre10.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre10 = document.getElementById("livre10");
		livre10.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre10" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/Work-related-stress-uk.jpg"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto">
					<div className="w-[80%] m-auto max-md:w-[100%]">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Gestion du Stress et de l’Anxiété</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">Naviguer à travers les tempêtes intérieures</h1>
					</div>
					<div className="w-[100%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le stress et l’anxiété sont des compagnons familiers dans la vie moderne, des ombres qui semblent
							s’accroître à mesure que le monde tourne plus vite, que les exigences s’accumulent, et que les attentes,
							souvent irréalistes, pèsent sur nos épaules. Dans ce tumulte, il devient vital d’apprendre à gérer ces
							émotions, à les apprivoiser plutôt qu’à les fuir. Car, bien que naturelles, elles ne doivent pas devenir
							les maîtres de notre existence. Au contraire, en développant des stratégies efficaces pour faire face au
							stress et à l’anxiété, nous pouvons transformer ces forces perturbatrices en tremplins vers la résilience
							et la sérénité.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le premier pas vers une gestion efficace du stress réside dans la prise de conscience. Il est essentiel
							d’apprendre à reconnaître les signes précurseurs de l’anxiété, ces petits murmures de notre corps et de
							notre esprit qui annoncent une montée de la tension. Cela peut être une respiration plus rapide, un rythme
							cardiaque accru, une sensation d’oppression dans la poitrine. Prendre le temps de s’arrêter, de se poser
							et de réfléchir à ce qui se passe en nous est un acte puissant. C’est dans cette observation attentive que
							l’on peut commencer à identifier les déclencheurs du stress. Quelles situations, quelles pensées ou
							quelles personnes provoquent cette montée d’angoisse ? En prenant conscience de ces éléments, nous pouvons
							commencer à établir une distance, à développer une approche plus objective et moins réactive face à nos
							émotions.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Une autre clé dans la gestion du stress réside dans l’établissement de rituels apaisants. La vie moderne,
							souvent frénétique, nous pousse à courir d’un objectif à l’autre, oubliant de prendre soin de nous.
							Pourtant, intégrer des moments de pause dans notre journée est crucial. Que ce soit par la méditation, le
							yoga, ou simplement une promenade en pleine nature, ces instants de calme permettent de rétablir
							l’équilibre, de retrouver un centre. C’est dans cette tranquillité que l’on peut respirer profondément,
							relâcher les tensions accumulées, et se reconnecter à soi. Prendre soin de notre corps et de notre esprit,
							c’est leur offrir un refuge, un espace de ressourcement où le stress ne peut pénétrer.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La respiration est également un outil puissant dans la gestion de l’anxiété. Souvent négligée, notre
							respiration est un pont vers le calme. Prendre un moment pour se concentrer sur sa respiration, pour
							pratiquer des techniques de respiration profonde, peut aider à dissiper l’anxiété. Par exemple, la méthode
							de la respiration 4-7-8, qui consiste à inspirer pendant quatre secondes, retenir sa respiration pendant
							sept secondes, puis expirer lentement pendant huit secondes, est un moyen efficace d’apaiser le système
							nerveux. En dirigeant notre attention vers ce rythme, nous donnons à notre esprit un point d’ancrage, une
							ancre dans la tempête de nos pensées.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Il est également crucial d’aborder le stress sous l’angle de la gestion du temps et des priorités. Trop
							souvent, nous nous laissons submerger par des tâches et des obligations qui, au final, ne sont pas
							essentielles. En apprenant à établir des priorités claires, à dire non lorsque cela est nécessaire, et à
							planifier des moments de détente dans notre emploi du temps, nous pouvons réduire le stress de manière
							significative. La clé est d’adopter une approche proactive plutôt que réactive. En étant maître de notre
							temps, nous reprenons le contrôle, et cela permet de diminuer l’anxiété liée aux échéances et aux
							attentes.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Il ne faut pas non plus négliger l’importance des connexions humaines dans la gestion du stress. Partager
							ses préoccupations, se confier à un ami, un proche ou même un professionnel, peut alléger le poids que
							l’on porte. Les relations humaines offrent un soutien précieux, une écoute attentive qui peut transformer
							notre perception des choses. Souvent, verbaliser nos craintes ou nos doutes diminue leur intensité, et
							l’on réalise alors qu’elles ne sont pas aussi insurmontables que l’on avait pu le croire.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Enfin, il est essentiel de cultiver une mentalité de gratitude et de positivité. Dans les moments de
							stress, il peut être difficile de voir la lumière, mais se concentrer sur ce qui va bien, sur les petites
							joies de la vie quotidienne, peut changer notre perspective. Tenir un journal de gratitude, où l’on note
							chaque jour des choses pour lesquelles nous sommes reconnaissants, permet de nourrir cet état d’esprit.
							Cela nous aide à recentrer notre attention sur le positif et à développer une résilience face aux défis.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, gérer le stress et l’anxiété n’est pas un acte de soumission, mais un choix conscient de se
							reconnecter à soi, de cultiver des pratiques qui favorisent la paix intérieure. C’est une invitation à
							apprivoiser ces émotions, à en faire des alliées plutôt que des ennemies. En adoptant des stratégies
							proactives et en créant un environnement favorable à notre bien-être, nous pouvons non seulement surmonter
							le stress, mais également le transcender, en en faisant une étape vers une vie plus équilibrée et
							épanouissante.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre10;
