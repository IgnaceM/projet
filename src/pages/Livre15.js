import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre15() {
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
		const livre15 = document.getElementById("livre15");
		livre15.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre15 = document.getElementById("livre15");
		livre15.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre15 = document.getElementById("livre15");
		livre15.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre15 = document.getElementById("livre15");
		livre15.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre15" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/Empathie-e1695918004370.png"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">
							Le lien humain comme essence de la prospérité
						</h1>
						<h1 className="text-blue-700 mt-10 text-2xl"></h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px]  max-md:text-[17px]">
							Dans une époque souvent marquée par l'individualisme et la recherche du succès personnel, le service aux
							autres et l'empathie apparaissent comme des piliers fondamentaux d'une vie pleine de sens. Ces valeurs
							nous rappellent que notre existence ne se limite pas à notre propre bien être, mais que nous sommes tous
							interconnectés dans un vaste tissu humain. En explorant la profondeur de ces concepts, nous découvrons que
							servir les autres et développer notre empathie ne sont pas seulement des actes altruistes ; ils sont
							également essentiels à notre propre épanouissement.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le service aux autres commence par une prise de conscience des besoins qui nous entourent. Cela peut
							sembler simple, mais dans le tumulte de nos vies quotidiennes, nous avons souvent tendance à nous enfermer
							dans notre bulle, oubliant que d'autres luttent avec des défis bien plus grands que les nôtres. En
							choisissant de nous engager dans des actes de service, nous élargissons notre perspective et nous
							enrichissons notre propre existence. Le fait de donner de notre temps, de notre énergie ou de nos
							ressources nous permet non seulement d'apporter un changement positif dans la vie d'autrui, mais aussi de
							ressentir un profond sentiment de satisfaction. Ce phénomène peut être expliqué par la loi de la
							circulation : lorsque nous donnons, nous créons un flux d'énergie qui revient à nous, souvent de manière
							inattendue.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							L'empathie, de son côté, est la capacité de comprendre et de ressentir les émotions d'autrui. C'est cette
							faculté qui nous permet de nous connecter à un niveau profond avec ceux qui nous entourent. Dans un monde
							de plus en plus digitalisé, où les interactions humaines sont souvent superficielles, l'empathie devient
							une qualité précieuse, presque rare. Elle exige une ouverture d'esprit et une vulnérabilité, car pour
							comprendre l'autre, nous devons être prêts à écouter sans jugement, à ressentir sans crainte. Cet
							engagement peut transformer nos relations, les enrichissant de compréhension et de compassion.{" "}
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							En mettant en pratique le service aux autres et l'empathie, nous découvrons également des leçons profondes
							sur nous-mêmes. Lorsque nous aidons autrui, nous confrontons nos propres préjugés, nos peurs et nos
							insécurités. Nous réalisons que chaque individu a son histoire, ses luttes et ses victoires. Cela nous
							rappelle que nous ne sommes pas seuls dans nos combats, que chacun de nous est en quête de reconnaissance
							et d’amour. La loi de l'unité nous enseigne que nous faisons tous partie d’un même ensemble. Chaque acte
							de service est un pas vers cette reconnaissance, une affirmation que notre humanité commune est ce qui
							nous unit.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							L’acte de servir les autres ne se limite pas à des actions grandioses ou à des gestes spectaculaires ; il
							peut également se manifester dans des gestes quotidiens. Offrir une oreille attentive à un ami en
							détresse, aider un voisin dans le besoin ou participer à des activités bénévoles dans notre communauté
							sont autant de manières d’incarner ces valeurs. Ce faisant, nous créons un espace où l'amour et la
							compassion peuvent prospérer. La loi de la résonance nous rappelle que lorsque nous émettons des
							vibrations d'amour et de service, nous attirons des énergies similaires. Ainsi, chaque acte de bonté a le
							pouvoir d'engendrer d'autres actes de bonté, créant un cercle vertueux d’empathie et de soutien.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Il est important de noter que le service aux autres doit également s’accompagner d’un respect de nos
							limites personnelles. Nous ne pouvons pas servir efficacement si nous sommes épuisés ou si nous négligeons
							nos propres besoins. La loi de l’équilibre nous enseigne que prendre soin de soi est essentiel pour être
							en mesure de prendre soin des autres. En cultivant notre bien être, nous nous préparons à donner de
							manière authentique et durable. Cela signifie que nous devons apprendre à dire non lorsque cela est
							nécessaire, à établir des frontières saines et à veiller à notre propre santé mentale et émotionnelle.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le développement de l'empathie nécessite également une intention consciente. Cela commence par la pratique
							de l'écoute active : poser des questions, prêter attention aux mots et aux émotions, et répondre avec
							compréhension. C'est un engagement qui peut transformer nos interactions quotidiennes. En prenant le temps
							d’apprendre à connaître les autres, de comprendre leurs perspectives et leurs sentiments, nous élargissons
							notre horizon et nourrissons notre propre humanité. La loi de la perspective nous rappelle que chacun voit
							le monde à travers le prisme de ses expériences uniques. En étant curieux de ces expériences, nous nous
							ouvrons à une richesse de compréhension et de connexion.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							À travers le service aux autres et l'empathie, nous découvrons un sens de communauté et d’appartenance.
							Nous réalisons que notre valeur ne réside pas seulement dans nos réussites individuelles, mais dans notre
							capacité à apporter un soutien authentique aux autres. Chaque fois que nous choisissons de servir, nous
							investissons dans le bien-être collectif, nous créons un impact durable qui dépasse notre propre
							existence. Ce chemin nous conduit vers une vie plus épanouissante, où l'amour et la compassion deviennent
							des forces motrices.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, embrasser le service aux autres et développer notre empathie est un voyage qui enrichit à la fois
							notre vie et celle des autres. Cela nous permet de nous connecter à notre humanité, de célébrer les
							différences et de créer un monde où chacun se sent valorisé. En cultivant ces qualités, nous faisons le
							choix conscient d’être des agents de changement, de bâtir des ponts entre les cœurs et de contribuer à un
							avenir empreint de compréhension et de solidarité. Dans cette quête, nous découvrons que la véritable
							richesse réside dans notre capacité à aimer et à servir, à faire preuve de compassion et à nous engager
							envers les autres. C'est là que se trouve la véritable essence de notre existence.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre15;
