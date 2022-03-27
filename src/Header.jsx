import React from "react";
import './Header.css'
import {NavLink} from 'react-router-dom'



function Header() {
	window.onload=function(){
		
	const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

{hamburger.addEventListener("click", mobileMenu);}
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
}
return(
	<header class="header">
	<nav class="navbar">
		<NavLink to="/" class="nav-logo">I N C O G</NavLink>
		<ul class="nav-menu">
		<li class="nav-item">
				<NavLink to="/Login" className="nav-link">Login/SignUp</NavLink>
			</li>
			<li class="nav-item">
				<NavLink to="/services" className="nav-link">Profile</NavLink>
			</li>
			
			<li class="nav-item">
				<NavLink to="/about" className="nav-link">Submit a complain</NavLink>
			</li>
			<li class="nav-item">
				<NavLink to="/contact" className="nav-link">Contact</NavLink>
			</li>
			
		</ul>
		
		<div class="hamburger">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
			
		</div>
		
	</nav>
	</header>
	
    
);
}
export default Header;
