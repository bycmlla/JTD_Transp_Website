import React from "react";
import './Contact.css'
import CaminhaoAzulPequeno from "../../assets/caminhaoazulpequeno.png"

const Contact = () => {
    return (
        <div className="contact__container">
            <div className="contact__content">
                <div className="contact__header">
                    <p className="contact__title">Fale conosco!</p>
                    <p className="contact__subtitle">Ficou com alguma dúvida?</p>
                    <p className="contact__subtitle_handle">Nós podemos te ajudar. Clique no botão abaixo para entrar em contato com a nossa equipe. </p>
                    <div className="contact__button_open">
                        <button>Enviar uma mensagem</button>
                    </div>
                </div>
            </div>
            <div className="contact__image">
                {/* <img src={CaminhaoAzulPequeno} alt="Caminhão azul pequeno no canto direito da tela." /> */}
            </div>
        </div>
    )
}

export default Contact;