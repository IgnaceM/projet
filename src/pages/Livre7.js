import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre7() {

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
		const livre7 = document.getElementById("livre7");
		livre7.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre7 = document.getElementById("livre7");
		livre7.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre7 = document.getElementById("livre7");
		livre7.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre7 = document.getElementById("livre7");
		livre7.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre7" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/decission.jpg"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Prise de Décision et sagesse</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">Le choix éclairé , chemin vers l'harmonie intérieure</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Il est dit que chaque décision que l’on prend est une pierre posée sur le chemin de notre vie. Chaque
							choix, petit ou grand, trace une route invisible, qui nous mène plus près de notre vérité ou nous en
							éloigne. La sagesse dans la prise de décision est une invitation à écouter cette route, à entendre, non
							pas les bruits du monde, mais la voix plus profonde qui murmure en nous, celle qui connaît ce dont nous
							avons réellement besoin. Un choix fait dans la sagesse est un acte de paix, un pas vers la sérénité, car
							il émane d’un esprit clair, détaché des attentes, des peurs, et des désirs éphémères.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Avant toute prise de décision, arrêtons-nous. Le monde encourage à agir vite, à répondre instantanément.
							Mais la sagesse, elle, nous appelle à ralentir, à respirer. Car c’est dans le silence et l’immobilité que
							le cœur peut vraiment s’exprimer, que l’intuition profonde se révèle. La sagesse est patiente, elle ne se
							presse pas. Elle sait que, bien souvent, ce n’est pas dans l’urgence que l’on trouve la justesse, mais
							dans la tranquillité, dans l’acceptation de l’instant. Pour agir avec discernement, il est essentiel de se
							libérer des émotions fugaces, d’éclaircir l’esprit, comme on attendrait que l’eau troublée d’un ruisseau
							retrouve sa transparence. Ce n’est que dans la clarté que l’on peut voir le fond.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Une décision sage n’est pas une question de calculs ou de prévisions. Elle va au-delà du bien et du mal
							apparent, au-delà des peurs et des désirs de l’ego. Elle est enracinée dans une vision plus vaste, celle
							qui comprend que chaque choix, chaque action a des répercussions, comme une onde qui se propage. Ainsi, le
							sage ne pense pas seulement à lui-même, mais à la résonance de ses actes dans le monde, aux effets
							invisibles de ses décisions sur la vie qui l’entoure. Prendre une décision en conscience, c’est aussi
							mesurer la portée de ses choix, dans le temps et l’espace, avec humilité et responsabilité.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Il est crucial de se poser une question simple mais puissante : « Cette décision est-elle en accord avec
							mes valeurs, avec ce que je veux bâtir de durable ? » Cette question ramène à la lumière de
							l’authenticité, à une fidélité envers soi-même. Car combien de fois l’on cède à des impulsions, à des
							influences extérieures, oubliant ainsi le fil de sa propre destinée. La sagesse, c’est ce rappel constant
							que nos décisions doivent être les reflets de notre essence, et non de nos craintes ou de nos envies
							passagères.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Cependant, être sage dans ses choix ne signifie pas fuir l’incertitude, car elle fait partie de toute
							décision. La sagesse n’est pas l’absence de doute, mais la capacité de s’ouvrir à l’inconnu avec
							confiance, de lâcher prise sur le besoin de contrôler tous les résultats. C’est accepter que la vie est un
							flux, que tout n’est pas toujours prévisible, mais que l’on peut avancer, avec foi, en suivant ce qui nous
							paraît juste. Le sage ne cherche pas des certitudes, il cherche l’harmonie avec le moment, une connexion
							sincère avec la réalité. C’est cette acceptation de l’incertain qui confère aux décisions leur
							authenticité, leur douceur, leur liberté.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Enfin, rappelons-nous que la vraie sagesse dans la prise de décision est empreinte de compassion. Car
							toute décision, même la plus réfléchie, peut affecter les autres. Il faut alors être attentif, ne jamais
							décider avec dureté ni pour son seul avantage, mais avec un esprit ouvert, prêt à comprendre l’autre, prêt
							à entendre les besoins qui s’expriment autour de nous. Une décision sage porte en elle une bienveillance
							profonde ; elle ne sépare pas, elle unit, elle apporte la paix à celui qui choisit comme à ceux qui en
							ressentiront les effets.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, la prise de décision sage est un art : elle demande patience, humilité, sincérité et courage. Elle
							ne se presse pas, mais avance, ferme et tranquille, guidée par la clarté intérieure. Car à la fin, chaque
							décision consciente est un pas vers l’équilibre, un acte de paix posé sur le chemin de la vie.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre7;
