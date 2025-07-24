import React from 'react'
import "./Banner.css"
import BannerImage from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='banner-container'>
      <img className='banner-img' src={BannerImage} alt='Imagem de um caminhão azul escrito jtd transportes ao pôr do sol' />
      <div className='banner-text-container'>
        <h1>A carga é sua. <br /> A responsabilidade é nossa.</h1>
        <p>Na <strong>JTD</strong>, unimos <b>tecnologia</b> e agilidade para garantir entregas rápidas, <b>seguras e eficientes</b> por todo o Brasil.</p>
        <button>Fazer orçamento</button>
      </div>
    </div>
  )
}

export default Banner
