import React from 'react'
import FooterHome from './footer/FooterHome'
import FormHome from './form/FormHome'
import './footer/FooterHome.css'
import './form/FormHome.css'

const Home = () => {


	return (
		<article className='box_home'>
			<FormHome/>	
			<FooterHome/>
		</article>
	)
}

export default Home
