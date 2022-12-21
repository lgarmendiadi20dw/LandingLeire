
import React, {Component} from 'react'
import './Footer.css'
import {navbar_items, navbar_accounts, contact} from '../helpers/Data'

import logo from '../../img/logos/letas_negras_sin_fondo.png'

class Footer extends Component
{
	display_contact_items = _ =>
	{
		let items = contact.map(item =>
		{
			return (
				<div className = {item.type} key = {Math.random()}>
					<p className = 'ps-3'>
						{item.info}
						<i className={`${item.icon} ms-1`}></i>
					</p>
				</div>
			)
		})
		return items
	}

	display_navbar_items = _ =>
	{
		let items = navbar_items.map(item =>
		{
			return (
				<a className="d-block mb-1 text-muted" href={`#${item.link}`} key = {Math.random()}><i className={`${item.icon} me-2`}></i>{item.name}</a>
			)
		})
		return items
	}

	display_navbar_accounts = _ =>
	{
		let accounts = ['Facebook', 'Instagram', 'Twitter']
		let items = navbar_accounts.map((item, index) =>
		{
			return (
				<a className = "text-capitalize d-block text-muted mb-1" href={item.link} target = '_blank' rel="noreferrer" key = {Math.random()}>
        			<i className = {`${item.icon} me-2`}></i>{accounts[index]}
        		</a>
			)
		})
		return items
	}

	render()
	{
		return (
			<footer className = 'footer py-5 bg-light'>
				<div className = 'container'>
					<div className = 'row'>
						<div className = 'c col-lg-4 col-12 my-auto'>
							<div className = 's first-side text-lg-start text-center mb-lg-0 mb-5'>
								<div className = 'first-sub-side'>
									<img className = 'img-fluid brand-name mb-3 img2'  src = {logo} alt = 'about' />

									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
								</div>
								<div className = 'second-sub-side'>
									<p className="small text-muted mb-0">&copy; Copyrights. <a href="#">Sesach</a></p>
								</div>
							</div>
						</div>
						
						
						<div className = 'c col-lg-4 col-12 my-auto'>
						<div className = 'c col-md-7 col-12'>
							<div className = 'left-side mb-lg-0 mb-5'>
							<h3 className = 'brand-name mb-3' >Contactanos</h3>
									
								<div className = 'info'>
									{this.display_contact_items()}
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
