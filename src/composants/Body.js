import React, { useEffect } from "react";
import "../styles css/style.css";
import { Link } from "react-router-dom";

function Body() {
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
		const body = document.getElementById("body");
		body.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const body = document.getElementById("body");
		body.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const body = document.getElementById("body");
		body.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const body = document.getElementById("body");
		body.style.backgroundColor = "black";
	}

	return (
		<>
			<div
				id="body"
				className=" px-[6%] relative  flex gap-10 flex-wrap justify-center py-52  w-full h-fit max-md:flex max-md:flex-col"
			>
				<h1 className=" text-white absolute flex gap-3 z-10 left-[7%] uppercase text-[15px] top-32 text-2xl">
					Développement personnel <p className="text-blue-600">: Livres</p>
				</h1>
				<div id="container" className="w-[22%]   max-md:flex  max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\stoicisme.jpeg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Dans une époque où l’imprévisibilité règne et...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre1">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px]  text-white font-bold">
									Philosophie du stoïcisme
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="./images/notesImages/resilience.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">S’il existe un art oublié dans notre époque pressée...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre2">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Acceptation et Résilience
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\38.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Dans le silence et la simplicité de l’instant...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre3">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Méditation et Pleine Conscience
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\emotions.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">La vie est faite d’émotions, d’une...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre4">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">Gestion des émotions</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\germination.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Penses-tu vraiment que tu as atteint ton potentiel ?...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre5">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Mentalité de Croissance
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\Effective-tips-for-building-discipline.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Dans cette vie, que tu le veuilles ou non...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre6">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Développement de la Discipline
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\decission.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Il est dit que chaque décision que l’on prend...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre7">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Prise de Décision et Sagesse
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\detachement.webp"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Dans un monde qui nous presse... </p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre8">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Minimalisme et Détachement
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\relations-sociales-bon-18.jpeg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Dans le vaste tableau de l’existence humaine... </p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre9">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Importance des Relations et des Connexions
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\Work-related-stress-uk.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Le stress et l’anxiété sont des compagnons familiers...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre10">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Gestion du Stress et de l’Anxiété
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\istock-00007027-b61e8152037-original-940x624.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Dans le tumulte du quotidien, il est facile...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre11">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Compréhension et Connaissance de Soi
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\objectif-a-long-terme.jpg"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">
							Dans le tumulte incessant de notre vie quotidienne, il est...
						</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre12">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Vision Long Terme et Objectifs
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\prosperite.avif"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Adopter une mentalité de prospérité...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre13">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Mentalité de la Prospérité
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\The-Psychology-of-Patience.webp"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Dans un monde où le rythme effréné de la vie...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre14">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">Sérénité et Patience</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>

				<div id="container" className="w-[22%] max-md:flex max-md:w-[100%] max-md:gap-3">
					<img
						src="..\images\notesImages\Empathie-e1695918004370.png"
						alt=""
						className="h-[150px] w-[100%] max-md:w-[40%] mb-3 max-md:h-[100px]"
					/>

					<div className="max-md:w-[70%]">
						<p className="max-md:text-[13px] text-gray-400">Dans une époque souvent marquée par...</p>
						<div className="w-[100%] mt-2 mb-2">
							<Link to="/livre15">
								<p className="bg-orange-400 w-20 text-center">lire</p>
							</Link>
							<div className="w-full flex justify-between mt-2">
								<pv className=" uppercase max-md:text-[12px] text-[15px] text-white font-bold">
									Service aux Autres et Empathie
								</pv>
								<img src="./images/Heart_50px.png" alt="" className="h-[20px] w-[20px]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Body;
