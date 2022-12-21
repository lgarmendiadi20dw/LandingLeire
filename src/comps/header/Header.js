
import React, {Component} from 'react'
import './Header.css'
import titulo from '../../images/pics/Logo_dos_colores_fondo_negro-removebg-preview.png'

class Header extends Component
{
	render()
	{
		return (
			<div className = 'hero-page'>
				<header className = 'header min-vh-100 position-relative'>
					<div className = 'img-overlay position-absolute w-100 h-100'></div>
					<div className = 'content position-absolute translate-middle top-50 start-50 text-center'>
					<img className = 'img-fluid w-75 shadow-lg' src = {titulo} alt = 'titulo' />
						<p className = 'brand-description mb-3 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
					</div>
				</header>
			</div>
		)
	}
}

export default Header