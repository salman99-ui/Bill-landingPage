import React from 'react'
import {CEO , CTO} from '../../assets'
import './about.scss'

function Index() {
    return (
        <div className="about">
            <h3 className="title-comp">Bill Indonesia</h3>

            <h3 className="profile-comp">A Fintech app to serve the unbanked & Underbanked society in Indonesia</h3>

            <div className="visi-misi">
                <div className="card">
                    <h3>Vision</h3>
                    <p>Our Vision is to Bridge the gap for financial inclusion to Indonesia's unbanked population</p>
                </div>

                <div className="card">
                    <h3>Mision</h3>
                    <p>Our Mission is to Provide basic financial services on a touch of an app</p>
                </div>
            </div>

            <div className="teams">
                <h3>Executive Teams</h3>
                <div className="teams-row">
                    <div className="team">
                        <div className="team-img">
                            <img src={CEO} />
                        </div>

                        <div className="team-bg">
                            <h4>Eka Gunawan R, B.Comm, Msc.BA</h4>
                            <h5>Founder & CEO</h5>
                            <p>Founder & Director of RoadRe</p>
                            <p>Former marketing Manager of China based loyalty 
                                program app, LVE Former Business Development Manager of 
                                UPConcierge online concierge platform of China’s Union Pay
                            </p>
                        </div>
                    </div>


                    <div className="team">
                        <div className="team-img">
                            <img src={CTO} />
                        </div>

                        <div className="team-bg">
                            <h4>Ricky Susanto</h4>
                            <h5>CTO</h5>
                            <p>Founder & Director of RoadRe</p>
                            <p>Former marketing Manager of China based loyalty 
                                program app, LVE Former Business Development Manager of 
                                UPConcierge online concierge platform of China’s Union Pay
                            </p>
                        </div>
                    </div>
                </div>

                <div className="teams-row">
                    <div className="team">
                        <div className="team-img">
                            <img src={CEO} />
                        </div>

                        <div className="team-bg">
                            <h4>Kris Alfin Njam</h4>
                            <h5>COO</h5>
                            <p>Founder & Director of RoadRe</p>
                            <p>Former marketing Manager of China based loyalty 
                                program app, LVE Former Business Development Manager of 
                                UPConcierge online concierge platform of China’s Union Pay
                            </p>
                        </div>
                    </div>


                    <div className="team">
                        <div className="team-img">
                            <img src={CEO} />
                        </div>

                        <div className="team-bg">
                            <h4>Olsu Babay</h4>
                            <h5>Head of Business Development</h5>
                            <p>Founder & Director of RoadRe</p>
                            <p>Former marketing Manager of China based loyalty 
                                program app, LVE Former Business Development Manager of 
                                UPConcierge online concierge platform of China’s Union Pay
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index
