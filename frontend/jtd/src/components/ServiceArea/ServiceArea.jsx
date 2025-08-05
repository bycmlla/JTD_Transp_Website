import React from 'react'
import "./ServiceArea.css"
import MapImage from "../../assets/service-area.png"

const ServiceArea = () => {
    return (
        <div className='service-container'>
            <div className='service-info-text'>
                <p><b>Onde</b> atuamos?</p>
                <p className='service-description'>Nossa base está localizada em Feira de Santana - BA, um ponto estratégico no Nordeste, que nos permite oferecer maior agilidade e ampla cobertura logística para diversas regiões do Brasil.</p>
                <p className='service-description'>BR-324, 5039 - Humildes, Feira de Santana - BA, 44097-012</p>
                <br/>
            </div>
            <div className='service-map'>
                <img src={MapImage} alt="Mapa do brasil apontando com um simbolo de localização os estados indicados na descrição." />
            </div>
        </div>
    )
}

export default ServiceArea
