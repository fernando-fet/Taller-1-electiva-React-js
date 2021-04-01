import React from 'react'

const Navbar1 = () => {
    return (

            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="">
                <img src="https://pbs.twimg.com/media/C9zoQClW0AApXHo.jpg" width="150" height="40"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div className="navbar-start">
                <a  className="navbar-item" href="/Inicio">Home</a>
                <a  className="navbar-item" href="/Contactenos">contactenos</a>
                


                
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