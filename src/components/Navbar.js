import React, { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import '../styles/Navbar.css';
function Navbar(){
  const navRef = useRef(null);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    var hidecont = document.getElementById("hide-me");
    hidecont.className +=" hide-me";
	};
  const closeNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    var hidecont = document.getElementById("hide-me");
    hidecont.classList.remove("hide-me");
	};

  return(
    <header>
      <a href="/" id="app-title"><h1>Melp App <span className="no-shadow">🍽️</span></h1></a>     
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">All Restaurantes</a>
        <a href="/#">Recomendations</a>
        <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;