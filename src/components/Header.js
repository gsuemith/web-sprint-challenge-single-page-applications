import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Header = () => {
	return (
		<header>
			<h2>Lambda Eats</h2>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/help">Help</NavLink>
			</nav>
		</header>
	)
}

export default Header
