import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";  
import "../styles css/style.css";

function HeaderText() {
  const [activeLink, setActiveLink] = useState("homeText");
  const location = useLocation();  

  useEffect(() => {
    // Mettre à jour le lien actif en fonction de l'URL actuelle
    if (location.pathname === "/homeText") {
      setActiveLink("homeText");
    } else if (location.pathname === "/homeAudio") {
      setActiveLink("homeAudio");
    } else if (location.pathname === "/about") {
      setActiveLink("about");
    } else if (location.pathname === "/setting") {
      setActiveLink("setting");
    }
  }, [location]);  

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ignace App ! Meilleure application de développement personnel",
          text: "Découvrez ce site incroyable !",
          url: window.location.href,
        });
        console.log("Contenu partagé avec succès");
      } catch (error) {
        console.error("Erreur lors du partage :", error);
      }
    } else {
      alert("Le partage n’est pas pris en charge sur ce navigateur.");
    }
  };

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
			const header = document.getElementById("header");
			header.style.background = "linear-gradient(to right , rgb(41, 1, 41) , rgb(0, 31, 43) )";
		}
	
		function theme2() {
			window.localStorage.getItem("theme2");
			const header = document.getElementById("header");
			header.style.background = "linear-gradient(to left , rgb(32, 0, 32) , rgb(8, 49, 0))";
		}
	
		function theme3() {
			window.localStorage.getItem("theme3");
			const header = document.getElementById("header");
			header.style.background = "linear-gradient(to right , rgb(10, 10, 10) , rgb(0, 33, 33))";
		}
	
		function theme4() {
			window.localStorage.getItem("theme4");
			const header = document.getElementById("header");
			header.style.backgroundColor = "black";
		}

    const openMenu = () => {
      const menu = document.getElementById("menu");
      menu.style.visibility = "visible";
    };
  
    const closeMenu = () => {
      const menu = document.getElementById("menu");
      menu.style.visibility = "hidden";
    };

  return (
    <>
      <div id="header" className="fixed top-0 shadow-md w-full h-20 flex justify-between z-40 items-center">
        <div className="flex items-center ml-[6%] max-md:ml-[-4%]">
          <img src="./images/logo.png" alt="" className="w-[130px] h-[80px]" />
          <h2 className="-ml-6 text-[19px] text-gray-400">Ignace App</h2>
        </div>
        <div className="mr-[6%]">
          <ul className="flex gap-8 capitalize text-[16px] text-gray-400 max-md:hidden">
            <li>
              <Link
                to="/homeText"
                className={activeLink === "homeText" ? "active" : ""}
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                to="/homeAudio"
                className={activeLink === "homeAudio" ? "active" : ""}
              >
                Audios
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={activeLink === "about" ? "active" : ""}
              >
                A propos
              </Link>
            </li>
            <li onClick={() => share()}>
              <a href="#" id="link">
                Partager
              </a>
            </li>
            <li>
              <a href="mailto:ignacemasirika00@gmail.com" id="link">
                contactez-nous
              </a>
            </li>
            <li>
              <Link to="/setting" className={activeLink === "setting" ? "active" : ""}>
                paramètres
              </Link>
            </li>
            
          </ul>
          <img
            onClick={() => openMenu()}
            src="./images/icons8_Menu.ico"
            alt=""
            className="w-[35px] h-[35px] hidden max-md:block cursor-pointer"
          />
        </div>
        <div
          id="menu"
          className="absolute top-3 right-3 h-[300px] bg-black w-[70%]"
        >
          <img
            src="./images/Delete_50px.png"
            alt=""
            className="w-5 h-5 absolute top-2 right-2"
            onClick={() => closeMenu()}
          />
          <div id="headMenu" className="w-full mt-5 flex flex-col justify-center items-center">
            <img src="./images/logo.png" alt="" className="w-[100px] h-[60px]" />
            <h2 className="text-[19px] text-gray-400">Ignace App</h2>
          </div>
          <div>
            <a
              href="mailto:ignacemasirika00@gmail.com"
              className="mt-10 px-10 flex items-center gap-2"
            >
              <img
                src="./images/contact.png"
                alt=""
                className="w-8 h-8"
              />
              <p className="text-gray-400">Contactez-nous</p>
            </a>
          </div>
          <div className="mt-5 px-10 flex items-center gap-2">
            <img
              src="./images/Settings_50px.png"
              alt=""
              className="w-8 h-8"
            />
            <p className="text-gray-400">
              <Link to="/setting">Paramètres</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderText;
