
import React, {Component} from 'react'
import Header from './comps/header/Header'
import Navbar from './comps/navbar/Navbar'
import About from './comps/about/About'

import Contact from './comps/contact/Contact'
import Footer from './comps/footer/Footer'
import Sb from './comps/sb/Sb'

class App extends Component
{
    render()
    {
        return(
            <>
                <Sb />
                <Navbar />
                <div className = '_header'>
                    <Header />
                    
                </div>

                

                <div className = '_body'>
                    <About />
                    
                    <Contact/>
                </div>

                <div className = '_footer'>
                    <Footer />
                </div>
            </>
        )
    }
}
export default App;