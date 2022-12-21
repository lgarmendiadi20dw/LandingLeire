
import React, {Component} from 'react'
import './About.css'
import logo from '../../img/logos/letas_negras_sin_fondo.png'
import logo2 from '../../img/logos/Logo1.png'

class About extends Component
{
	render()
	{
		return (
			<section className = 'about py-5 my-5' id = 'about'>
				<div className = 'container'>
					<div className= "row align-items-center">
						<div className = "c col-md-6 col-12">
							<div className = 'left-side text-md-start text-center mb-lg-0 mb-5'>
								<img className = 'img-fluid img' src = {logo} alt = 'about' />
								<p className = 'about-description text-muted'>Lorem ipsum dolor sit amet</p>
								<p className = 'about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
								</div>
						</div>
						<div className = "c col-md-6 col-12">
							<div className = 'right-side text-lg-end text-center'>
								<img className = 'img-fluid w-75 shadow-lg' src = {logo2} alt = 'about' />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About