import React from 'react'
import "./ServiceArea.css"
import MapImage from "../../assets/service-area.png"

const ServiceArea = () => {
    return (
        <div className='service-container'>
            <div className='service-info-text'>
                <p><b>Onde</b> atuamos?</p>
                <p className='service-description'>Estamos presentes em diversas regiões estratégicas do Brasil para oferecer mais agilidade e cobertura logística.</p>
                <br/>
                <ul>
                    <li>Feira de Santana - Bahia</li>
                    <li>Fortaleza - Ceará</li>
                    <li>Belo Horizonte - Minas Gerais</li>
                    <li>João Pessoa - Paraíba</li>
                    <li>Camaçari - Bahia</li>
                </ul>
            </div>
            <div className='service-map'>
                <img src={MapImage} alt="Mapa do brasil apontando com um simbolo de localização os estados indicados na descrição." />
            </div>
        </div>
    )
}

export default ServiceArea
