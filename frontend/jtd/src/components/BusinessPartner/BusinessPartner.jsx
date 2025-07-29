import React from 'react'
import "./BusinessPartner.css"
import Honda from "../../assets/empresas/honda.png"
import Nestle from "../../assets/empresas/nestle.png"
import Mondial from "../../assets/empresas/mondial.png"
import Dell from "../../assets/empresas/dell.png"
import Seara from "../../assets/empresas/seara.png"
import Italac from "../../assets/empresas/italac.png"
import Apple from "../../assets/empresas/apple.png"
import Samsung from "../../assets/empresas/samsung.png"
import Rem from "../../assets/empresas/reem.png"
import Yoki from "../../assets/empresas/yoki.png"
import Stanley from "../../assets/empresas/stanley.png"
import Frieren from "../../assets/empresas/friere.png"

const img = [
    { id: 1, image: Honda, alt: "Logo" },
    { id: 2, image: Nestle, alt: "Logo" },
    { id: 3, image: Mondial, alt: "Logo" },
    { id: 4, image: Dell, alt: "Logo" },
]

const img2 = [
    { id: 5, image: Seara, alt: "Logo" },
    { id: 6, image: Italac, alt: "Logo" },
    { id: 7, image: Apple, alt: "Logo" },
    { id: 8, image: Samsung, alt: "Logo" },
]

const img3 = [
    { id: 9, image: Rem, alt: "Logo" },
    { id: 10, image: Yoki, alt: "Logo" },
    { id: 11, image: Stanley, alt: "Logo" },
    { id: 12, image: Frieren, alt: "Logo" },
]


const BusinessPartner = () => {
    return (
        <div className="business-partner">
            <div className="business-partner__header">
                <p className="business-partner__title">Empresas parceiras</p>
                <p className="business-partner__subtitle">
                    Temos orgulho de trabalhar com nossos parceiros para ajudá-los a ir além.
                </p>
            </div>
            <div className="business-partner__table-container">
                <table className="business-partner__table">
                    <tbody>
                        <tr className="business-partner__row">
                            {img.map((index) => (
                                <td key={index.id} className="business-partner__cell">
                                    <img src={index.image} alt={index.alt} className="business-partner__logo" />
                                </td>
                            ))}
                        </tr>
                        <tr className="business-partner__row">
                            {img2.map((index) => (
                                <td key={index.id} className="business-partner__cell">
                                    <img src={index.image} alt={index.alt} className="business-partner__logo" />
                                </td>
                            ))}
                        </tr>
                        <tr className="business-partner__row">
                            {img3.map((index) => (
                                <td key={index.id} className="business-partner__cell">
                                    <img src={index.image} alt={index.alt} className="business-partner__logo" />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default BusinessPartner
