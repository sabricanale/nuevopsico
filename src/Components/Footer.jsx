import React from "react";

const Footer = () =>{
    return(
        <footer>
            <div className="row d-flex justify-content-center">
            
            <div className="col-md-3">
                    <h4 className=" mt-3 text-center">Comunicate conmigo</h4>
                    <div>
                        <ul className="navbar-nav mb-lg-0 m-3 text-center">
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a href="https://walink.co/966361"><img src={"./Images/Whatsapp.svg"} alt={"Whatsapp psicóloga"} width={25} /></a>
                                    <a href="https://walink.co/966361" id="datos"><p>+5493517531661</p></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a href="https://www.facebook.com/psicoteayudo"><img src={"./Images/facebook.svg"} alt={"Facebook psicóloga"} width={25} /></a>
                                    <a href="https://www.facebook.com/psicoteayudo" id="datos"><p>Psico Te Ayudo</p></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a href="https://www.instagram.com/psicoteayudo/"><img src={"./Images/Instagram.svg"} alt={"Instagram psicóloga"} width={25} /></a>
                                    <a href="https://www.instagram.com/psicoteayudo/" id="datos"><p>@psico.teayudo</p></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a href="mailto:marilyngomezluna@gmail.com"><img src={"./Images/Mail.svg"} alt={"Mail psicóloga"} width={25} /></a>
                                    <a href="mailto:marilyngomezluna@gmail.com" id="datos"><p>marilyngomezluna@gmail.com</p></a>
                                </div>
                            </li>
                        </ul>
                    </div>   
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center">
                        <a href={"/"}><img src={"./Images/Luna.png"} alt={"Logo PsicoTeAyudo"} width={250} /></a>
                    </div>
                </div>

                <div className="col-md-3 text-center">                     
                    <div> 
                        <h4 className="pt-2 mt-3">Horarios y lugares de atención</h4>
                        <div className="d-flex justify-content-center">
                            <p>Lunes, miércoles y viernes:<br/><div className="d-flex justify-content-center">
                            <a href="https://goo.gl/maps/nENwFjWwytVy72Eg6"><img src={"./Images/Ubicacion.svg"} alt={"Ubicación psicóloga"} width={25} /></a>
                            <a href="https://goo.gl/maps/nENwFjWwytVy72Eg6" id="datos"><p>Av. Gral Paz 120 3L - Córdoba</p></a>
                            </div> <br/>Martes y jueves: <br/><div className="d-flex justify-content-center">
                            <a href="https://goo.gl/maps/nENwFjWwytVy72Eg6"><img src={"./Images/Ubicacion.svg"} alt={"Ubicación psicóloga"} width={25} /></a>
                            <a href="https://goo.gl/maps/266CHmTDn2gNUFw69" id="datos"><p>En el Valle de Punilla</p></a>
                            </div>
                            </p>
                        </div>   
                    </div>  
                </div>
            </div>
        </footer>
    )
}

export default Footer;