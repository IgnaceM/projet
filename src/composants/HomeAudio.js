import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles css/style.css";
import Footer from "./Footer";
import HeaderText from "./HeaderText";
import DownloadManager from './DownloadManager';

function HomeAudio() {

	
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
		const homeAudio = document.getElementById("homeAudio");
		homeAudio.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
	}

	function theme2() {
		window.localStorage.getItem("theme2");
		const homeAudio = document.getElementById("homeAudio");
		homeAudio.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
	}

	function theme3() {
		window.localStorage.getItem("theme3");
		const homeAudio = document.getElementById("homeAudio");
		homeAudio.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
	}

	function theme4() {
		window.localStorage.getItem("theme4");
		const homeAudio = document.getElementById("homeAudio");
		homeAudio.style.background = "black";
	}
	return (
		<>
			<HeaderText />
			<Footer />

			<div
				id="homeAudio"
				className=" px-[6%] relative  flex gap-10 flex-wrap justify-center py-56 max-md:py-48 w-full h-fit max-md:flex max-md:flex-col"
			>
				<p className="text-white flex gap-3 mt-36 absolute top-0 left-0 ml-28 text-[15px] max-md:mt-28 uppercase max-md:ml-6 mb-5">
					Développement personnel : <span className="text-blue-500"> Audios</span>{" "}
				</p>
				<div className="w-[22%]  hover:bg-blue-500 hover:bg-opacity-5 max-md:w-full max-md:flex">
					<div id="container" className="max-md:flex max-md:items-center max-md:gap-3">
						<div className="flex max-md:w-[100%]">
							<img src="./images/denzel.jpg" alt="" className="h-[150px] w-[70%] max-md:h-[100px]" />
							<div className="flex justify-center  relative w-[30%] items-center">
								<img src=".\images\icons8_Music.ico" alt="" className="w-14 max-md:w-8" />
								<h3 className="bg-black text-white absolute bottom-0 w-full flex text-center justify-center p-1 font-light text-[13px]">
									05:46
								</h3>
							</div>
						</div>
						<div className="w-full flex justify-between mt-2 ">
							<div>
								<p className=" uppercase max-md:text-[10px] text-gray-400 text-[15px]">Discours d'inspiration</p>
								<p className="text-orange-200 text-opacity-100 max-md:text-[12px]">(Denzel Washington)</p>
								<Link to="/audio1">
									<button className="bg-orange-400 w-16 mt-2 text-center">Lire</button>
								</Link>
							</div>
							<div className="flex flex-col text-gray-400 justify-center items-center text-center">
								<a
									href="./Audios/Change_ta_vie_avec_ce_discours_de_Denzel_Washington___Motivation_et_développement_personnel!(256k).mp3"
									download={"Discours_dinspiration.mp3"}
								>
									<img src="./icon download.png" alt="" className="h-[20px] mb-2 w-[20px]" />
								</a>
								<p className="text-[12px] text-blue-400 max-md:text-[10px]">5.28 Mo</p>
							</div>
						</div>
					</div>
				</div>

				<div
					
					className="w-[22%]  hover:bg-blue-500 hover:bg-opacity-5 max-md:w-full max-md:flex"
				>
					<div id="container" className="max-md:flex max-md:items-center max-md:gap-3">
						<div className="flex max-md:w-[100%]">
							<img src="./images/speakers/spk (7).jpg" alt="" className="h-[150px] w-[70%] max-md:h-[100px]" />
							<div className="flex justify-center relative w-[30%] items-center">
								<img src=".\images\icons8_Music.ico" alt="" className="w-14 " />
								<h3 className="bg-black text-white absolute bottom-0 w-full flex text-center justify-center p-1 font-light text-[13px]">
									06:01
								</h3>
							</div>
						</div>
						<div className="w-full flex justify-between mt-2">
							<div>
								<p className=" uppercase max-md:text-[10px] text-gray-400 text-[15px]">Comment gagner beaucoup...</p>
								<p className="text-orange-200 text-opacity-100 max-md:text-[12px]">(Bob proctor)</p>
								<Link to="/audio2">
									<button className="bg-orange-400 w-16 mt-2 text-center">Lire</button>
								</Link>
							</div>

							<div className="flex flex-col text-gray-400 justify-center items-center text-center">
								<a
									href="./Audios/Comment_Gagner_Beaucoup_D_Argent____Bob_Proctor_-_Fr(256k).mp3"
									download={"Comment_Gagner_Beaucoup_D_Argent____Bob_Proctor_-_Fr(256k).mp3"}
								>
									<img src="./icon download.png" alt="" className="h-[20px] mb-2 w-[20px]" />
								</a>
								<p className="text-[12px] text-blue-400 max-md:text-[10px]">5.51 Mo</p>
							</div>
						</div>
					</div>
				</div>

				<div
					
					className="w-[22%]  hover:bg-blue-500 hover:bg-opacity-5 max-md:w-full max-md:flex"
				>
					<div id="container" className="max-md:flex max-md:items-center max-md:gap-3">
						<div className="flex max-md:w-[100%]">
							<img src="./images/speakers/spk (3).jpg" alt="" className="h-[150px] w-[70%] max-md:h-[100px]" />
							<div className="flex justify-center relative w-[30%] items-center">
								<img src=".\images\icons8_Music.ico" alt="" className="w-14 " />
								<h3 className="bg-black text-white absolute bottom-0 w-full flex text-center justify-center p-1 font-light text-[13px]">
									05:59
								</h3>
							</div>
						</div>
						<div className="w-full flex justify-between mt-2">
							<div>
								<p className=" uppercase max-md:text-[10px] text-gray-400 text-[15px]">Comment en finir avec...</p>
								<p className="text-orange-200 text-opacity-100 max-md:text-[12px]">(Brian Tracy)</p>
								<Link to="/audio3">
									<button className="bg-orange-400 w-16 mt-2 text-center">Lire</button>
								</Link>
							</div>

							<div className="flex flex-col text-gray-400 justify-center items-center text-center">
								<a
									href="./Audios/[MÉTHODE]_Comment_EN_FINIR_avec_la_PROCRASTINATION_!_Brian_Tracy_-_Français(256k).mp3"
									download={"Comment_EN_FINIR_avec_la_PROCRASTINATION_!_Brian_Tracy_-_Français(256k).mp3"}
								>
									<img src="./icon download.png" alt="" className="h-[20px] mb-2 w-[20px]" />
								</a>
								<p className="text-[12px] text-blue-400 max-md:text-[10px]">5.47 Mo</p>
							</div>
						</div>
					</div>
				</div>

				<div
					
					className="w-[22%]  hover:bg-blue-500 hover:bg-opacity-5 max-md:w-full max-md:flex"
				>
					<div id="container" className="max-md:flex max-md:items-center max-md:gap-3">
						<div className="flex max-md:w-[100%]">
							<img src="./images/motiv4.jpg" alt="" className="h-[150px] w-[70%] max-md:h-[100px]" />
							<div className="flex justify-center relative w-[30%] items-center">
								<img src=".\images\icons8_Music.ico" alt="" className="w-14 " />
								<h3 className="bg-black text-white absolute bottom-0 w-full flex text-center justify-center p-1 font-light text-[13px]">
									05:46
								</h3>
							</div>
						</div>
						<div className="w-full flex justify-between mt-2">
							<div>
								<p className=" uppercase max-md:text-[10px] text-gray-400 text-[15px]">Audio de motivation</p>
								<p className="text-orange-200 text-opacity-100 max-md:text-[12px]">( Instant motivation )</p>
								<Link to="/audio4">
									<button className="bg-orange-400 w-16 mt-2 text-center">Lire</button>
								</Link>
							</div>

							<div className="flex flex-col text-gray-400 justify-center items-center text-center">
								<a
									href="./Audios/N'abandonne_jamais_!_Instant_Motivation(256k).mp3"
									download={"N'abandonne_jamais_!_Instant_Motivation(256k).mp3"}
								>
									<img src="./icon download.png" alt="" className="h-[20px] mb-2 w-[20px]" />
								</a>
								<p className="text-[12px] text-blue-400 max-md:text-[10px]">10.5Mo</p>
							</div>
						</div>
					</div>
				</div>

				<div
					
					className="w-[22%]  hover:bg-blue-500 hover:bg-opacity-5 max-md:w-full max-md:flex"
				>
					<div id="container" className="max-md:flex max-md:items-center max-md:gap-3">
						<div className="flex max-md:w-[100%]">
							<img src="./images/motiv6.jpg" alt="" className="h-[150px] w-[70%] max-md:h-[100px]" />
							<div className="flex justify-center relative w-[30%] items-center">
								<img src=".\images\icons8_Music.ico" alt="" className="w-14 " />
								<h3 className="bg-black text-white absolute bottom-0 w-full flex text-center justify-center p-1 font-light text-[13px]">
									03:47
								</h3>
							</div>
						</div>
						<div className="w-full flex justify-between mt-2">
							<div>
								<p className=" uppercase max-md:text-[10px] text-gray-400 text-[15px]">Audio de motivation</p>
								<p className="text-orange-200 text-opacity-100 max-md:text-[12px]">( Instant motivation )</p>
								<Link to="/audio5">
									<button className="bg-orange-400 w-16 mt-2 text-center">Lire</button>
								</Link>
							</div>

							<div className="flex flex-col text-gray-400 justify-center items-center text-center">
								<a
									href="./Audios/Video_de_motivation_en_francais_2022___developpement_personnel,_confiance_en_soi(256k).mp3"
									download={"Audio_de_motivation_en_francais_2022___developpement_personnel,_confiance_en_soi(256k).mp3"}
								>
									<img src="./icon download.png" alt="" className="h-[20px] mb-2 w-[20px]" />
								</a>
								<p className="text-[12px] text-blue-400 max-md:text-[10px]">3.47 Mo</p>
							</div>
						</div>
					</div>
				</div>

				<div
					
					className="w-[22%]  hover:bg-blue-500 hover:bg-opacity-5 max-md:w-full max-md:flex"
				>
					<div id="container" className="max-md:flex max-md:items-center max-md:gap-3">
						<div className="flex max-md:w-[100%]">
							<img src=".\images\speakers\spk (1).jpg" alt="" className="h-[150px] w-[70%] max-md:h-[100px]" />
							<div className="flex justify-center relative w-[30%] items-center">
								<img src=".\images\icons8_Music.ico" alt="" className="w-14 " />
								<h3 className="bg-black text-white absolute bottom-0 w-full flex text-center justify-center p-1 font-light text-[13px]">
									06:29
								</h3>
							</div>
						</div>
						<div className="w-full flex justify-between mt-2">
							<div>
								<p className=" uppercase max-md:text-[10px] text-gray-400 text-[15px]">Audio de motivation</p>
								<p className="text-orange-200 text-opacity-100 max-md:text-[12px]">( Instant motivation )</p>
								<Link to="/audio6">
									<button className="bg-orange-400 w-16 mt-2 text-center">Lire</button>
								</Link>
							</div>

							<div className="flex flex-col text-gray-400 justify-center items-center text-center">
								<a
									href="./Audios/Reprends-Toi_En_Main_!__Eric_Thomas___Motivation_-_Fr(256k).mp3"
									download={"Reprends-Toi_En_Main_!__Eric_Thomas___Motivation_-_Fr(256k).mp3"}
								>
									<img src="./icon download.png" alt="" className="h-[20px] mb-2 w-[20px]" />
								</a>
								<p className="text-[12px] text-blue-400 max-md:text-[10px]">5.94 Mo</p>
							</div>
						</div>
					</div>
				</div>

				<div
					
					className="w-[22%]  hover:bg-blue-500 hover:bg-opacity-5 max-md:w-full max-md:flex"
				>
					<div id="container" className="max-md:flex max-md:items-center max-md:gap-3">
						<div className="flex max-md:w-[100%]">
							<img src="./images/motiv2.avif" alt="" className="h-[150px] w-[70%] max-md:h-[100px]" />
							<div className="flex justify-center relative w-[30%] items-center">
								<img src=".\images\icons8_Music.ico" alt="" className="w-14 " />
								<h3 className="bg-black text-white absolute bottom-0 w-full flex text-center justify-center p-1 font-light text-[13px]">
									02:54
								</h3>
							</div>
						</div>
						<div className="w-full flex justify-between mt-2">
							<div>
								<p className=" uppercase max-md:text-[10px] text-gray-400 text-[15px]">Audio de motivation</p>
								<p className="text-orange-200 text-opacity-100 max-md:text-[12px]">( Instant motivation )</p>
								<Link to="/audio7">
									<button className="bg-orange-400 w-16 mt-2 text-center">Lire</button>
								</Link>
							</div>

							<div className="flex flex-col text-gray-400 justify-center items-center text-center">
								<a
									href="./Audios/videoMotiv.mp3"
									download={"Audio___Motivation_-_Fr(256k).mp3"}
								>
									<img src="./icon download.png" alt="" className="h-[20px] mb-2 w-[20px]" />
								</a>
								<p className="text-[12px] text-blue-400 max-md:text-[10px]">2.66 Mo</p>
							</div>
						</div>
					</div>
				</div>

				<div
					
					className="w-[22%]  hover:bg-blue-500 hover:bg-opacity-5 max-md:w-full max-md:flex"
				>
					<div id="container" className="max-md:flex max-md:items-center max-md:gap-3">
						<div className="flex max-md:w-[100%]">
							<img src="./images/creed3-6.webp" alt="" className="h-[150px] w-[70%] max-md:h-[100px]" />
							<div className="flex justify-center relative w-[30%] items-center">
								<img src=".\images\icons8_Music.ico" alt="" className="w-14 " />
								<h3 className="bg-black text-white absolute bottom-0 w-full flex text-center justify-center p-1 font-light text-[13px]">
									03:19
								</h3>
							</div>
						</div>
						<div className="w-full flex justify-between mt-2">
							<div>
								<p className=" uppercase max-md:text-[10px] text-gray-400 text-[15px]">Audio de motivation</p>
								<p className="text-orange-200 text-opacity-100">( Instant motivation )</p>
								<Link to="/audio8">
									<button className="bg-orange-400 w-16 mt-2 text-center">Lire</button>
								</Link>
							</div>

							<div className="flex flex-col text-gray-400 justify-center items-center text-center">
								<a
									href="./Audios/vid.mp3"
									download={"Instant___Motivation_-_Fr(256k).mp3"}
								>
									<img src="./icon download.png" alt="" className="h-[20px] mb-2 w-[20px]" />
								</a>
								<p className="text-[12px] text-blue-400 max-md:text-[10px]">6.08 Mo</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default HomeAudio;
