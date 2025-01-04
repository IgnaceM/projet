import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre14() {

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
		const livre14 = document.getElementById("livre14");
		livre14.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre14 = document.getElementById("livre14");
		livre14.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre14 = document.getElementById("livre14");
		livre14.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre14 = document.getElementById("livre14");
		livre14.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre14" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/The-Psychology-of-Patience.webp"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">Sérénité et Patience</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">
							La paix intérieure comme fondement d'une vie équilibrée
						</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Dans un monde où le rythme effréné de la vie moderne nous pousse souvent à la précipitation et au stress, la sérénité et la patience apparaissent comme des vertus essentielles, presque sacrées. Elles forment les piliers d’une existence équilibrée, offrant un refuge face aux tumultes extérieurs. Mais comment cultiver cette sérénité dans un monde si désordonné ? Et comment développer la patience lorsque l’instant présent est souvent envahi par des attentes et des pressions incessantes ? Ce chemin vers la tranquillité intérieure est une invitation à explorer la profondeur de notre être, à nous reconnecter avec notre essence.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						La sérénité, ce calme intérieur, est souvent perçue comme un état de grâce, quelque chose que nous devons atteindre. Pourtant, elle est déjà présente en nous, attendant d’être découverte. C’est dans les moments de silence, de contemplation, que nous pouvons accéder à cette paix. Prendre le temps de respirer profondément, de nous asseoir en méditation ou simplement de marcher en pleine nature peut nous permettre de reconnecter avec cette tranquillité. La loi de la résonance nous rappelle que ce que nous émettons dans l’univers est ce que nous recevons en retour. En cultivant un état d’esprit serein, nous attirons des expériences et des personnes qui résonnent avec cette vibration de paix.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						La patience, quant à elle, est souvent perçue comme une simple attente, un acte passif. En réalité, elle est une force active. Elle nous permet de naviguer à travers les défis de la vie avec grâce et sagesse. Lorsqu’un obstacle se présente, notre première réaction est souvent celle de l’impatience : nous voulons des résultats immédiats, des réponses rapides. Cependant, la patience nous enseigne à comprendre que chaque chose a son propre rythme. Cette leçon est cruciale dans notre quête de sérénité. Accepter que certaines situations prennent du temps à se résoudre nous libère du poids de l’urgence et nous permet d’aborder les défis avec une attitude plus sereine.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						La sérénité et la patience se nourrissent mutuellement. Lorsqu’on fait preuve de patience, on développe une compréhension plus profonde des circonstances qui nous entourent. Nous apprenons à écouter notre intuition et à agir avec discernement, plutôt que de réagir impulsivement. Cette prise de conscience est le fondement d’une vie sereine. En cultivant cette patience, nous devenons capables d’accueillir l’inattendu, de nous adapter aux changements et d’accepter que la vie soit pleine d'incertitudes. Cela nous rappelle que même dans les moments les plus difficiles, nous avons le pouvoir de choisir notre réponse.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Il est également essentiel de prendre conscience des pensées et des émotions qui perturbent notre sérénité. La loi de l’attraction nous enseigne que nos pensées créent notre réalité. Lorsque nous laissons nos pensées négatives ou anxieuses dominer, nous nous éloignons de notre paix intérieure. Prendre conscience de ces schémas de pensée est un premier pas vers la transformation. En nous entraînant à changer notre dialogue intérieur, à remplacer les pensées de doute par celles de confiance et d’acceptation, nous pouvons progressivement cultiver une atmosphère de sérénité.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						Il est également bénéfique de se rappeler que la patience n'est pas synonyme d'inaction. Elle implique une action réfléchie et alignée avec nos valeurs. Lorsqu'on avance dans notre vie avec intention, en prenant des décisions conscientes et en agissant avec intégrité, nous renforçons notre sérénité. Cela nous permet de naviguer avec confiance, même lorsque les résultats ne sont pas immédiats. Il est crucial de célébrer les petites étapes du parcours, d’apprécier le processus tout autant que la destination. En cultivant cette mentalité, nous transformons notre attente en une expérience d’apprentissage, plutôt qu’en une source de frustration.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						La pratique de la méditation et de la pleine conscience est également un outil puissant pour développer la sérénité et la patience. Ces pratiques nous enseignent à vivre pleinement l’instant présent, à observer nos pensées et nos émotions sans jugement. Cela crée un espace de calme intérieur, nous permettant de cultiver la patience face aux défis. À travers cette pratique, nous apprenons à ne pas nous laisser emporter par le tumulte des pensées anxieuses, mais plutôt à rester ancrés dans la paix de l’instant.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						La patience, dans notre société où tout va vite, devient une forme de rébellion. Elle nous permet de prendre du recul et d’examiner nos priorités, nos désirs et nos actions. Dans un monde où la gratification instantanée est la norme, choisir d’être patient est un acte de force. Cela signifie avoir confiance en le processus de la vie, même lorsque les résultats ne sont pas visibles immédiatement. Cela nécessite une confiance profonde dans notre capacité à faire face aux défis et à grandir à travers eux.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
						En fin de compte, cultiver la sérénité et la patience est un voyage profond et transformateur. Cela demande du temps, de la pratique et un engagement envers notre bien-être intérieur. En apprenant à naviguer avec calme à travers les tempêtes de la vie, nous découvrons une force insoupçonnée qui nous permet de vivre de manière authentique et épanouie. La sérénité et la patience sont des cadeaux que nous nous offrons à nous-mêmes, des clés qui ouvrent la porte à une vie plus équilibrée et harmonieuse. Dans ce voyage vers la paix intérieure, nous réalisons que chaque pas, chaque moment de calme, nous rapproche un peu plus de la plénitude.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre14;
