import React from 'react'

const Navbar1 = () => {
    return (

            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div className="navbar-start">
                <a  className="navbar-item" href="/Home">Home</a>
                <a  className="navbar-item" href="/usuarios">Usuarios</a>
                <a  className="navbar-item" href="/Roles">Rol</a>
                <a  className="navbar-item" href="/Productos">Producto</a>
                <a  className="navbar-item" href="/Categorias">Categorias</a>


                
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        )
}

export default Navbar1