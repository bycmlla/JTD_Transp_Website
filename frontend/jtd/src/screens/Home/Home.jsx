import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import StatCard from '../../components/StatCard/StatCard'
import ServiceArea from '../../components/ServiceArea/ServiceArea'
import MeetUs from '../../components/MeetUs/MeetUs'
import QuickActions from '../../components/QuickActions/QuickActions'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <StatCard />
            <ServiceArea />
            <MeetUs/>
            <QuickActions/>
        </div>
    )
}

export default Home;
