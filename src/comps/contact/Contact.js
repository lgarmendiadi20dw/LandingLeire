
import React, {Component} from 'react'
import './Contact.css'
import Subscription from '../subscription/Subscription'


class Contact extends Component
{
	

	render()
	{
		return (
			<section className = 'sesion py-5 mb-5' id = 'sesion'>
				<div className = 'container'>
					<div className = 'title'>
						<h2 className = 'text-capitalize text-center mb-5 position-relative p-3'>Iniciar sesión</h2>
					</div>

							<div >
								<Subscription/>
							</div>
					
				</div>
			</section>
		)
	}
}

export default Contact