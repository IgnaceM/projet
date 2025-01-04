import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre8() {

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
		const livre8 = document.getElementById("livre8");
		livre8.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre8 = document.getElementById("livre8");
		livre8.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre8 = document.getElementById("livre8");
		livre8.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre8 = document.getElementById("livre8");
		livre8.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre8" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/detachement.webp"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Minimalisme et Détachement</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">L'essentiel , un chemin vers la liberté intérieur</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans un monde qui nous presse d’accumuler toujours plus, d’amasser possessions, titres, et distractions,
							le minimalisme apparaît comme une respiration, un retour au calme, à ce qui compte vraiment. Car le
							véritable trésor, ce n’est pas l’abondance matérielle, mais la légèreté, le contentement simple. Lorsque
							l’on apprend à détacher son bonheur de ce que l’on possède, alors une forme de paix profonde s’installe,
							une liberté que rien d’extérieur ne peut troubler. C’est en allégeant notre vie des excès, en se défaisant
							de ce qui nous encombre, que l’on commence à entrevoir ce qui nous nourrit vraiment.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le minimalisme, c’est bien plus qu’une esthétique épurée ou un mode de vie. C’est un état d’esprit, un
							choix de se recentrer sur l’essentiel. C’est un art qui nous invite à questionner nos habitudes, à
							examiner de près ce qui nous entoure : ai-je vraiment besoin de cet objet ? Est-ce que ce désir vient d’un
							besoin profond ou d’un simple caprice, d’une réponse à un vide temporaire ? Apprendre à se poser ces
							questions nous amène, peu à peu, à faire le tri, à sélectionner avec soin ce que l’on laisse entrer dans
							notre vie. Et en simplifiant ainsi notre existence, on gagne de l’espace, non seulement physique, mais
							surtout mental et émotionnel.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le détachement, lui, est le compagnon inséparable du minimalisme. Car ce n’est pas en renonçant seulement
							aux biens matériels que l’on trouve la paix, mais en lâchant aussi les attentes, les exigences, les
							attachements émotionnels qui nous enchaînent souvent aux autres ou à nos propres désirs. Le détachement,
							c’est ce choix de ne plus dépendre de l’extérieur pour notre bonheur. Ce n’est pas de l’indifférence, bien
							au contraire : c’est une forme de liberté qui nous permet d’aimer, d’apprécier sans posséder, de s’engager
							sans craindre la perte. En cultivant cette attitude, on découvre une richesse intérieure, une source de
							satisfaction inépuisable qui ne dépend plus des circonstances.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Peut-être est-ce difficile, car le détachement semble aller à l’encontre de nos instincts. Nous avons
							appris à chercher la sécurité dans ce que nous possédons, à mesurer notre valeur par l’accumulation.
							Pourtant, dans cette quête incessante de plus, nous passons souvent à côté de l’essentiel : être en paix
							avec soi-même, vivre sans être dominé par les peurs ou les envies. La clé, ici, est d’apprendre à
							apprécier chaque chose pour ce qu’elle est, sans chercher à en faire la source de notre bonheur. Car en
							vérité, le bonheur réside dans cette légèreté intérieure, cette capacité à être comblé sans s’attacher, à
							jouir de ce que l’on a sans craindre ce que l’on pourrait perdre.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le minimalisme et le détachement nous montrent aussi un chemin vers la gratitude. En réduisant le
							superflu, en allégeant notre quotidien, nous devenons plus attentifs à ce qui nous entoure. Chaque objet,
							chaque relation, chaque instant prend alors une nouvelle valeur. Plutôt que de désirer toujours plus, nous
							apprenons à apprécier ce qui est là, à ressentir la richesse du moment présent. Cette simplicité nous
							ramène à l’essentiel, à une joie tranquille, discrète, mais solide, qui ne dépend plus des excès, mais de
							la clarté et de la justesse de nos choix.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans cette quête, la vraie force réside dans la conscience de ce qui importe réellement. Se détacher ne
							signifie pas renoncer à tout, mais garder ce qui nous est cher, avec intention et lucidité. Il ne s’agit
							pas de s’appauvrir, mais de se libérer de ce qui pèse, de ce qui nous détourne de notre essence. Car c’est
							dans cette simplicité, dans ce dépouillement, que l’on trouve le calme, l’équilibre et, peut-être, la
							véritable abondance.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Le minimalisme et le détachement sont donc des alliés puissants dans le cheminement vers soi même. Ils
							nous rappellent que le bonheur ne se trouve pas dans ce que l’on possède, mais dans la qualité de notre
							relation avec nous-même et le monde. En cultivant cet art de la simplicité, nous retrouvons un espace
							intérieur vaste et apaisant, où règnent la liberté, la clarté, et une gratitude infinie pour les choses
							qui, en apparence, semblent si petites, mais qui, en vérité, font toute la richesse de la vie.
						</p>

						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre8;
