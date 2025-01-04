import React , {useEffect} from "react";
import HeaderText from "../composants/HeaderText";
import TitleLivreContainer from "../composants/LivreTitle";
import Footer from "../composants/Footer";
import "../styles css/style.css";
import LivreTitle from "../composants/LivreTitle";

function Livre9() {

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
		const livre9 = document.getElementById("livre9");
		livre9.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const livre9 = document.getElementById("livre9");
		livre9.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const livre9 = document.getElementById("livre9");
		livre9.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const livre9 = document.getElementById("livre9");
		livre9.style.backgroundColor="black"
	}

	return (
		<>
			<LivreTitle />
			<HeaderText />
			<Footer/>
			<div id="livre9" className="py-40 max-md:py-0 w-[75%] ml-[25%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-20 max-md:mb-14">
				<img src="./" alt="" />
				<div className="w-[80%] m-auto max-md:w-full">
					<img
						src="./images/notesImages/relations-sociales-bon-18.jpeg"
						alt=""
						className="w-[80%] m-auto h-[400px]  max-md:top-0 max-md:w-full max-md:h-[200px]"
					/>
				</div>
				<div className="w-[80%] m-auto max-md:w-[100%]">
					<div className="w-[80%] m-auto">
						<h1 className="text-white text-2xl font-bold uppercase mt-10">
							Importance des Relations et des Connexions
						</h1>
						<h1 className="text-blue-700 mt-10 text-2xl">Tisser des liens authentiques , la clé de l'épanouissement</h1>
					</div>
					<div className="w-[80%] m-auto mt-10">
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Dans le vaste tableau de l’existence humaine, rien n’est plus précieux que les relations que nous
							établissons avec autrui. Ce sont elles qui, jour après jour, nous façonnent, nous nourrissent, et nous
							révèlent à nous-mêmes. Nos interactions sont comme les fils d’une toile délicate, qui s’entrelacent pour
							créer une structure d’amour, de soutien et d’apprentissage. Dans ce monde où l’individualisme s’accroît
							souvent, il est essentiel de se rappeler que notre véritable force réside dans notre capacité à établir
							des connexions authentiques, à créer des liens qui transcendent le simple voisinage.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Les relations humaines ne sont pas seulement des échanges de paroles ou de regards ; elles sont des
							échanges d’énergie, d’émotions et de sens. À travers elles, nous découvrons des reflets de nous-mêmes, des
							aspects que nous ne saurions percevoir seuls. C’est dans la relation avec l’autre que se dévoilent nos
							fragilités, nos forces, mais aussi notre capacité à aimer et à nous ouvrir. Chaque interaction devient
							alors une occasion d’apprentissage, une chance de grandir ensemble. Quand nous partageons nos expériences,
							nous tissons un réseau de compréhension et de compassion, une toile qui nous relie au monde et nous
							rappelle que nous ne sommes jamais vraiment seuls.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Cependant, établir de telles connexions demande un engagement sincère, une volonté de se montrer
							vulnérable. Dans un monde où l’on privilégie souvent l’apparence, où l’on filtre nos vies à travers des
							écrans, il devient facile de s’isoler derrière des façades. Mais derrière cette superficialité, il y a un
							appel profond à la vérité des relations. Être véritablement connecté signifie être prêt à écouter, à
							partager, à être présent, sans attentes ni jugements. Cela exige d’oser se dévoiler, d’offrir sa présence
							authentique, même dans les moments de difficulté. C’est cette authenticité qui crée des liens solides, car
							elle établit une confiance mutuelle, un espace sûr où chacun peut être soi-même.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							L’importance des relations va bien au-delà de la simple convivialité. Elles jouent un rôle fondamental
							dans notre bien-être mental et émotionnel. De nombreuses études montrent que les personnes qui
							entretiennent des relations saines et significatives sont plus heureuses, plus résilientes face aux défis
							de la vie, et même en meilleure santé physique. L’amour, le soutien, la camaraderie – ces éléments
							nourrissent notre âme et agissent comme des boucliers contre le stress et la solitude. Une main tendue
							dans les moments difficiles peut devenir un phare d’espoir, une source de réconfort inestimable.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Pourtant, dans cette quête de connexions profondes, il est crucial de se rappeler que la qualité prime sur
							la quantité. Avoir une multitude de connaissances ne remplace pas la profondeur d’une ou deux relations
							sincères. Choisir des personnes qui partagent des valeurs similaires, qui apportent une lumière dans nos
							vies, qui nous challengent et nous encouragent à évoluer, c’est là le véritable trésor. Chaque lien
							cultivé demande du temps et de l’attention, mais les fruits récoltés sont d’une richesse inégalée. Une
							écoute attentive, un regard bienveillant, un soutien indéfectible – ce sont là les fondements d’une
							connexion authentique.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							l est également essentiel de nourrir ces relations au quotidien. Cela ne passe pas seulement par des mots,
							mais par des actions concrètes. Un simple message, un geste attentionné, une présence lors des moments
							importants – toutes ces petites attentions renforcent les liens tissés. Dans un monde si souvent accaparé
							par les distractions, prendre le temps de se connecter véritablement à l’autre est un acte de résistance,
							une affirmation que les relations comptent plus que tout. Elles sont notre ancre, notre point d’appui dans
							les tempêtes de la vie.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Enfin, n’oublions jamais que les relations ne sont pas à sens unique. Elles exigent un engagement
							réciproque, une volonté d’apprendre et d’évoluer ensemble. Écouter l’autre, accueillir ses émotions,
							célébrer ses succès, mais aussi être là dans les moments de peine – c’est ce qui nourrit véritablement ces
							liens. C’est un cercle vertueux où chacun contribue à la croissance de l’autre, créant un espace de
							soutien mutuel où l’on se sent compris, respecté et aimé.
						</p>
						<br />
						<br />
						<p className="text-gray-400 text-[20px] max-md:text-[17px]">
							Ainsi, dans ce cheminement vers des connexions plus profondes, n’ayons pas peur d’investir notre temps et
							notre énergie. Car c’est à travers ces relations que nous découvrons la beauté de la vie, la richesse des
							expériences partagées, et la force de l’humanité. En fin de compte, ce que nous laissons derrière nous ne
							sont pas nos possessions, mais les empreintes que nous avons laissées dans le cœur des autres. Cultivons
							donc ces relations avec soin, car elles sont le véritable reflet de notre humanité et la clé de notre
							épanouissement.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}
export default Livre9;
