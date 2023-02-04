import React from "react";

const NavBar = () => {
    return(

            <nav className="navbar navbar-expand-lg navegador fw-bold">
            <div className="container">
                <a className="navbar-brand" href="/"><img src={"./Images/LogoPrincipal.png"} className="posicion" alt={"Psicóloga - Psico te ayudo"} width={"100"}/></a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-end collapse navbar-collapse ">
                <div id="navbarNavAltMarkup">
                
                <div className="navbar-nav">
                
                    <a className="nav-link" aria-current="page" href="/">Inicio</a>
                    <a className="nav-link" href="#ComoTeAyudo">Cómo te ayudo</a>
                    <a className="nav-link " href="#Modalidades">Modalidades</a>
                    <a className="nav-link " href="#SobreMi">Sobre mí</a>
                    <a className="nav-link " href="#preguntasFrecuentes">Preguntas frecuentes</a>
                </div>
                </div>
                </div>
            </div>
            </nav>
















/*
        <div className="container">
            <nav className="fw-bold">
                <div className="d-flex navbar navbar-expand-lg"> 
                    <div className="flex-grow-1">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                                    </button>
                        <a className="navbar-brand" href="/"><img src={"./Images/LogoPrincipal.png"} className="posicion" alt={"Psicóloga - Psico te ayudo"} width={"100"}/></a> 
                    </div>
    
                    <div className="p-2 d-flex justify-content-end">
                        <div className=" collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="/">Inicio</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#ComoTeAyudo">Cómo te ayudo</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#Modalidades">Modalidades</a>
                                        </li>      
                                        <li className="nav-item">
                                            <a className="nav-link " href="#SobreMi">Sobre mí</a>
                                        </li>  
                                        <li className="nav-item">
                                        <a className="nav-link " href="#preguntasFrecuentes">Preguntas frecuentes</a>
                                    </li>        
                                    </ul>  
                                </div>        
                            </div>
                        <div className="p-2 d-flex align-items-center">
                             
                        </div>
                    </div>
            </nav>
        </div>+


*/
        )
        
}

export default NavBar;