import React from "react";

const SobreMi = () => {
    return(
        <div className="container">
          <h1 className="text-center m-2 p-3" id="SobreMi">Un poco sobre mí</h1>
            <div className="row d-flex justify-content-around pb-5">
                
                <div className="col-md-7 p-4 textoPresentacion">
                    <p>Mi nombre es María Lidia Gómez pero me dicen Marilyn, así me siento identificada. <br/><b>PsicoTeAyudo</b> es el nombre que le doy al servicio profesional que presto desde mi profesión de Psicóloga, matriculada en el Colegio de Psicólogos de la Provincia de Córdoba MP 12788.
<br/>Vivo en la zona del Valle de Punilla. Por lo tanto recibo consultas de pacientes de las localidades aledañas a Villa Carlos Paz.
Prefiero la modalidad presencial para trabajar, pero atendiendo a las nuevas maneras de trabajar que nos dejó la pandemia, he flexibilizado esta preferencia empleando también las modalidades online y domiciliaria. Ésta última surgió por el hecho de mudarme a una zona serrana en la cual las calles son de tierra y por las lluvias se deterioran demasiado y dificulta la llegada al consultorio.
 </p>
                </div>
                <div className="col-md-5">
                    <a><img  src="./Images/Marilyn.jpg" className="card-img-top" alt="Psicóloga Marilyn Gómex" id="imagenMarilyn"/></a>
                </div>
                
            </div>
        </div>

        )
}

export default SobreMi;