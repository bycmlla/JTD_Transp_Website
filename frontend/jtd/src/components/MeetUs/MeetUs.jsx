import React from 'react'
import "./MeetUs.css"
import Caminhao3D from "../../assets/caminhao-3d.png"

const MeetUs = () => {
    return (
        <div className='meetus-container'>
            <div className='meetus-image'>
                <img src={Caminhao3D} alt="Caminhão baú branco dentro de uma bola azul como logo 'JTD Transportes'" />
            </div>
            <div className='meetus-info-text'>
                <p>Conheça nossa <b>história</b></p>
                <p className='meetus-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    )
}

export default MeetUs
