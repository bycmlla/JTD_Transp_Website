import React from 'react'
import "./StatCard.css"
import EnterpriseIcon from "../../assets/icons/enterprise.png"
import LocationIcon from "../../assets/icons/location.png"
import BoxIcon from "../../assets/icons/box.png"
import CarIcon from "../../assets/icons/ca.png"
import BoxesIcon from "../../assets/icons/boxes.png"

const cards = [
    {
        id: 1,
        card: EnterpriseIcon,
        info: "+ 100",
        description: "Anos de experiência"
    },

    {
        id: 2,
        card: LocationIcon,
        info: "+ 400",
        description: "Cidade atendidas"
    },
    {
        id: 3,
        card: BoxIcon,
        info: "+ 1M",
        description: "Entregas realizadas / ano"
    },
    {
        id: 4,
        card: CarIcon,
        info: "+ 6M",
        description: "Volumes transportados / ano"
    },
    {
        id: 5,
        card: BoxesIcon,
        info: "+ 81k",
        description: "Toneladas transportadas / ano"
    },
    {
        id: 6,
        card: BoxesIcon,
        info: "+ 81k",
        description: "Toneladas transportadas / ano"
    },

]

const StatCard = () => {
    return (
        <div className='stat-card-container'>
            {cards.map((i) => (
                <div className='stat-card' key={i.id}>
                    <img src={i.card} alt={i.description} className='stat-icon' />
                    <h3>{i.info}</h3>
                    <p>{i.description}</p>
                </div>
            )

            )}
        </div>
    )
}

export default StatCard
