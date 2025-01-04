import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre11() {

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
		const livre11 = document.getElementById("livre11");
		livre11.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre11 = document.getElementById("livre11");
		livre11.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre11 = document.getElementById("livre11");
		livre11.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre11 = document.getElementById("livre11");
		livre11.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre11" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/istock-00007027-b61e8152037-original-940x624.jpg"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Compréhension et Connaissance de Soi</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">Le voyage intérieur , une quête pour l'authenticité</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans le tumulte du quotidien, il est facile de se perdre dans les exigences extérieures, d’oublier
							l’essentiel : qui sommes-nous vraiment ? La compréhension et la connaissance de soi constituent les
							fondations d’une vie authentique, épanouissante. C’est un voyage intérieur, une exploration des recoins
							les plus profonds de notre être, où réside la clé pour naviguer à travers les complexités de l’existence.
							Ce cheminement nous demande courage et patience, mais les récompenses sont inestimables. C’est à travers
							cette quête que l’on découvre non seulement ses forces et ses faiblesses, mais aussi ses valeurs
							fondamentales, ses passions et son but.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La première étape de cette exploration intérieure consiste à s’accorder un temps de réflexion. Dans notre
							monde hyperconnecté, il est souvent difficile de trouver un moment de calme. Pourtant, il est essentiel de
							s’accorder des espaces de solitude, loin des distractions. Que ce soit par la méditation, l’écriture dans
							un journal, ou simplement en se promenant en pleine nature, ces moments de tranquillité permettent
							d’écouter la voix intérieure. Quels sont nos désirs, nos aspirations ? Qu’est-ce qui nous motive vraiment
							? En prenant le temps de répondre à ces questions, nous posons les jalons de notre compréhension
							personnelle.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							La connaissance de soi s’enrichit également à travers l’introspection. Prendre conscience de nos émotions,
							de nos réactions, de nos schémas de pensée est un processus essentiel. Quelles sont les situations qui
							déclenchent des réponses émotionnelles fortes ? Quelles croyances limitantes nous empêchent d’avancer ? En
							observant nos comportements sans jugement, nous pouvons commencer à identifier les racines de nos
							frustrations et de nos peurs. C’est un travail parfois délicat, mais c’est dans cette prise de conscience
							que se cache le pouvoir de la transformation. Nous avons tous des blessures et des zones d’ombre, mais les
							reconnaître est un acte de bravoure qui ouvre la voie à la guérison.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Un autre aspect fondamental de la connaissance de soi est la compréhension de nos valeurs. Qu’est-ce qui
							compte le plus pour nous ? La famille, la créativité, l’intégrité, la liberté ? Nos valeurs sont comme des
							boussoles, guidant nos choix et nos actions. Lorsque nous sommes en harmonie avec nos valeurs, nous
							éprouvons un sentiment de plénitude. À l’inverse, lorsque nous agissons en contradiction avec elles, la
							dissonance intérieure peut engendrer du stress et de l’anxiété. Prendre le temps de définir clairement ce
							qui est important pour nous permet d’aligner notre vie avec notre essence, d’établir des priorités claires
							et de vivre avec intention.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							L’auto-évaluation peut également être enrichie par le retour des autres. Parfois, les proches voient en
							nous des aspects que nous ne percevons pas. Être ouvert aux critiques constructives, à la rétroaction,
							peut offrir des perspectives précieuses sur notre comportement et notre impact sur le monde. Il ne s’agit
							pas de laisser les autres définir qui nous sommes, mais d’accueillir leurs impressions comme des pièces
							d’un puzzle que nous sommes en train d’assembler. Cela nous aide à développer une conscience plus
							holistique de nous-mêmes.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans ce voyage de connaissance de soi, il est important d’accueillir la vulnérabilité. La vulnérabilité
							n’est pas un signe de faiblesse, mais de courage. Oser être soi-même, sans masque, sans artifice, est un
							acte libérateur. C’est en acceptant nos imperfections et en embrassant notre authenticité que l’on trouve
							la paix intérieure. En apprenant à nous aimer tels que nous sommes, avec nos forces et nos faiblesses,
							nous ouvrons la voie à une confiance en soi durable, qui ne dépend pas des avis extérieurs.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Enfin, la connaissance de soi est un processus dynamique, en constante évolution. Au fur et à mesure que
							nous grandissons, que nous vivons de nouvelles expériences, nos perceptions de nous-mêmes peuvent changer.
							Il est donc crucial de rester curieux, d’être prêt à réévaluer nos croyances et nos aspirations. Cultiver
							une mentalité de croissance nous permet d’accueillir le changement avec ouverture et d’apprendre à chaque
							étape du chemin.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, comprendre et connaître soi-même est bien plus qu’un simple exercice d’introspection ; c’est une
							quête pour vivre en accord avec notre essence. En nous engageant dans ce voyage intérieur, nous découvrons
							la richesse de notre propre être, un espace où la paix, la clarté et l’authenticité peuvent s’épanouir.
							Cette connaissance est la clé qui ouvre la porte à des relations plus profondes, à des choix plus éclairés
							et à une vie pleine de sens. C’est un voyage sans fin, mais chaque pas sur ce chemin nous rapproche un peu
							plus de la personne que nous sommes réellement, et c’est là le véritable trésor.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre11;
