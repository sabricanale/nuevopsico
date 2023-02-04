import React from "react"

const Modalidad = () => {
    return(
        <div className="container p-5 text-center"> 
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col p-2">
                    <div className="text-center" id="Modalidades">
                        <a href="https://walink.co/c80272"><img src="./Images/Presencial.png" className="card-img-top" alt="Modalidad presencial"/></a>
                        <div className="card-body">
                        <a href="https://walink.co/c80272" className="enlaces"><h4 className="card-title m-2">Atención presencial</h4></a>
                    </div>
                </div>
            </div>
            <div className="col p-2">
                <div className="text-center">
                    <a href="https://walink.co/dca20c"><img src="./Images/Virtual.png" className="card-img-top" alt="Modalidad online"/></a>
                    <div className="card-body">
                        <a href="https://walink.co/dca20c" className="enlaces"><h4 className="card-title m-2">Atención online</h4> </a> 
                    </div>
                </div>
            </div>
            <div className="col p-2">
                <div className="text-center">
                    <a href="https://walink.co/8be55c"><img src="./Images/Domiciliaria.png" className="card-img-top" alt="Modalidad domiciliaria"/></a>
                    <div className="card-body">
                        <a href="https://walink.co/8be55c" className="enlaces"><h4 className="card-title m-2">Atención domiciliaria</h4></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modalidad;