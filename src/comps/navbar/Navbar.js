import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {


  return (
    <section id="navegador" >
      <div className="container">
        <div className="row ">
          
      <div className=" col-6 col-md-2 nav-dropdown ">
          <Nav.Link href="#sesion">Iniciar sesión</Nav.Link>
         
      </div>
        </div>
      </div>
        
    </section>
  );
};

export default Navbar;
