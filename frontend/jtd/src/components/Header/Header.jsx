import React from 'react'
import "./Header.css"
import JTDLogo from "../../assets/icons/jtd_logo_azul.png"

const Header = () => {
    return (
        <div className="header-container">
            <div className='jtd_logo_container'>
                <img src={JTDLogo} alt="Logo da JTD na cor azul, escrito jtd transportes." />
            </div>
            <ul className='header-list'>
                <li className='header-list-item'>
                    <a href="/">Home</a>
                </li>
                <li className='header-list-item'>
                    <a href="/">Nossa história</a>
                </li>
                <li className='header-list-item'>
                    <a href="/">Serviços</a>
                </li>
                <li className='header-list-item'>
                    <a href="/">Contato</a>
                </li>
                <li className='header-list-item'>
                    <a href="/">Localização</a>
                </li>
                <li className='header-list-item'>
                    <a href="/">Colaborador</a>
                </li>
                <li>
                    <button className='header-button-location'>
                        <a href="/">
                            Políticas
                        </a>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Header
