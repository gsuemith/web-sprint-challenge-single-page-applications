import React from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'

const Home = () => {
	const history = useHistory()

	const pizza = () => history.push('/pizza');

	return (
		<>
			<div className="banner">
				<h1>Your favorite food, delivered while coding</h1>
				<button onClick={pizza}>Pizza?</button>
			</div>
		</>
	)
}

export default Home
