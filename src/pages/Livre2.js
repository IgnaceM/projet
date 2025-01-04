import React, { useEffect } from "react";
import Footer from "../composants/Footer";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre2() {
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
		const livre2 = document.getElementById("livre2");
		livre2.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre2 = document.getElementById("livre2");
		livre2.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre2 = document.getElementById("livre2");
		livre2.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre2 = document.getElementById("livre2");
		livre2.style.backgroundColor = "black";
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer />
			<div
				id="livre2"
				className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14"
			>
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/resilience.jpg"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Acceptation et resilience</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">Accueillir le réel , transcender l'épreuve</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							S’il existe un art oublié dans notre époque pressée, un art que les anciens connaissaient bien, c’est
							celui d’accepter le monde tel qu’il est, avec ses imperfections, ses chaos et ses mystères. Nous vivons
							souvent dans la révolte, en guerre contre tout ce qui nous échappe, convaincus que nos vies devraient se
							conformer à un idéal de confort et de perfection. Mais pour celui qui cherche la force intérieure, la paix
							ne vient jamais de ce combat épuisant contre la réalité, mais bien de l’acceptation de cette réalité, même
							dans ses aspects les plus déroutants, les plus sombres.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							L’acceptation n’est pas un renoncement. Ce n’est pas se résigner passivement aux événements en fermant les
							yeux. C’est au contraire un acte de lucidité, une conscience claire et aiguë que certaines choses ne
							peuvent être changées et que la seule véritable liberté est de choisir comment nous réagissons face à
							elles. Cette acceptation, ce regard impitoyable et honnête, nous libère d’un poids immense : celui de la
							colère, de la frustration, de l’amertume qui naît de nos attentes déçues. Quand on accepte, vraiment, que
							les autres ne sont pas comme nous voudrions qu’ils soient, que les échecs font partie intégrante de la
							vie, que nos désirs ne se réaliseront pas toujours, on se libère d’un esclavage subtil, mais tenace.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Prenons un exemple : imagine une relation amicale qui se détériore, malgré tous tes efforts pour la
							sauver. Tu as tout fait, parlé, écouté, essayé de comprendre, mais rien ne change. Face à cette réalité,
							deux choix s’offrent : lutter encore, t’épuiser à tenter de transformer ce qui semble inévitable, ou
							accueillir ce fait, si douloureux soit-il, et avancer. L’acceptation ne signifie pas l’indifférence ; elle
							signifie reconnaître qu’il est parfois inutile de se battre contre le courant, que parfois, lâcher prise
							est le seul acte qui mène à la paix. Dans ce lâcher-prise, dans cette capacité à dire "c’est ainsi", naît
							une force insoupçonnée.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Cette force, c’est la résilience. Un terme souvent galvaudé, utilisé à tort et à travers pour désigner une
							simple endurance, mais qui, en réalité, est beaucoup plus complexe, plus profond. La résilience, pour le
							sage, c’est la capacité de rebondir sans devenir amer, de se relever sans se durcir, de faire de chaque
							épreuve une occasion d’éprouver sa grandeur intérieure. Le résilient n’est pas un roc impassible, un être
							qui ne ressent rien ; au contraire, il est celui qui ose sentir pleinement la douleur, la peur, la
							tristesse, mais qui refuse de se laisser briser par elles. Il accepte ces émotions, il les traverse, mais
							il ne les laisse pas le définir.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Pour comprendre cela, il faut se rappeler cette vérité si souvent niée : les épreuves font partie
							intégrante de l’existence humaine. C’est dans l’adversité que nous sommes confrontés à nous mêmes, que
							nous sommes mis à nu. L’adversité, quand elle est accueillie avec courage, devient un miroir révélateur.
							Que faisons-nous lorsque tout semble s’écrouler ? Comment réagissons nous face à la trahison, à l’échec, à
							la perte ? Ceux qui se refusent à l’acceptation, qui s’accrochent à des illusions d’invincibilité, se
							retrouvent souvent broyés par la réalité ; mais ceux qui l’acceptent, qui la regardent en face, en
							ressortent transformés, plus lucides, plus forts.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans cette vision, la résilience n’est pas un état naturel, mais un chemin. Un chemin qui exige de nous
							une discipline mentale, un entraînement presque quotidien. Les anciens le savaient, eux qui s’adonnaient à
							des exercices de préparation aux coups du sort. Ils prenaient le temps d’imaginer les pires scénarios, non
							pas par pessimisme, mais pour s’armer d’une capacité d’acceptation inébranlable. Marc Aurèle lui-même,
							malgré son statut d’empereur, méditait chaque jour sur la fragilité de la vie, sur les pertes possibles.
							Car il savait qu’aucun pouvoir, aucune richesse, ne peut nous protéger de l’inévitable. La résilience est
							donc cette capacité à ne pas être surpris par l’adversité, à la rencontrer avec un esprit déjà préparé,
							déjà mûr pour l’accueillir.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Et que dire de l’avenir, cet horizon incertain qui nous inquiète, qui nous pousse à chercher des
							certitudes là où il n’y en a pas ? Le résilient sait que l’avenir est une illusion, que seul le moment
							présent mérite d’être accueilli, que chaque instant est un cadeau unique, à vivre pleinement. Il ne se
							laisse pas enfermer dans l’angoisse de ce qui pourrait arriver, mais se concentre sur ce qu’il peut faire
							maintenant, avec ce qu’il a. Cette acceptation de l’incertitude est la clef d’une existence sereine. La
							vie, avec son lot de hauts et de bas, devient alors non plus une succession de crises, mais une danse, un
							flux naturel que l’on accompagne avec grâce, en sachant que tout, absolument tout, est éphémère.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, accepter le réel, cultiver la résilience, ce n’est pas seulement se protéger des coups de la vie ;
							c’est apprendre à vivre pleinement, à voir dans chaque difficulté une occasion de grandir, dans chaque
							déception une chance de se renforcer. C’est comprendre que la paix véritable ne vient jamais de
							l’extérieur, mais de cet espace intérieur que rien ni personne ne peut altérer. C’est, au fond, trouver en
							soi un refuge, un lieu indestructible, d’où l’on peut observer le monde sans crainte, avec un sourire
							presque imperceptible, celui de celui qui sait.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre2;
