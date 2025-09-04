import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import StatCard from '../../components/StatCard/StatCard'
import ServiceArea from '../../components/ServiceArea/ServiceArea'
import MeetUs from '../../components/MeetUs/MeetUs'
import QuickActions from '../../components/QuickActions/QuickActions'
import BusinessPartner from '../../components/BusinessPartner/BusinessPartner'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <StatCard />
            <MeetUs />
            <QuickActions />
            <BusinessPartner />
            <ServiceArea />
            <Contact />
        </div>
    )
}

export default Home;
