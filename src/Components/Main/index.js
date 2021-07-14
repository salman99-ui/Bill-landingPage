import React from 'react'
import {
    LogoImg , 
    MainBackground ,
    MainLogo ,
    ContentImg ,
    Test ,
    Tips2 ,
    Tips3 ,
    FooterLogo ,
    Arrow 
} from '../../assets' 

import './index.scss'

function Index() {
    return (
        <div className="body">
            <div className="header">
                <div className="header-main">  
                    <img src={LogoImg} />

                    <div className="header-text">
                        <p>Good Morning</p>
                        <h3>Fellas</h3>
                    </div>

                </div>
            </div>


            <div className="main">
                <div 
                    style={{backgroundImage : `url(${MainBackground})`}} 
                    className="main-body"
                >
                        <h2>WEEKEND FROM HOME</h2>
                        <p>Stay active with a little workout</p>
                        <img src={MainLogo} />
                        <button>Let's Go</button>
                         

                 </div>

                 <div className="main-content">
                    
                    <img src={ContentImg} />

                    <div className="main-info">
                        <p>
                            <span>Definition </span>
                            a practice or exercise to test or improve one's fitness for athletic competition, 
                            ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or
                            achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                        </p>

                        <h3>- Weekend team</h3>
                    </div>

                    <div className="shape" />
                 </div>
                
            </div>

            <div className="description">

                <div className="feedback">
                    <h3>Testimonial</h3>
                    <div className="wrapper-feedback">
                        <div className="slider">
                            <div className="slide-item">
                                <p>Blue Kicks</p>
                                <p> Places where you can leverage tools and 
                                    software to free up
                                    time to focus on growing the business.</p>
                            </div>

                        
                            <div className="slide-item">
                                <p>Angelus</p>
                                <p>All those apps took me months to get running. 
                                    Now the site practically runs itself!</p>
                            </div>
                        

                    
                            <div className="slide-item">
                                <p>SoYoung</p>
                                <p>Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction</p>
                            </div>
                    
                        </div>
                    </div>
                </div>


                <div className="pov">
                    <h2>POV</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>


                <div className="resource">
                    <h2>Resource</h2>
                    <p>
                        These cases are perfectly simple and easy to distinguish. 
                        In a free hour, when our power of choice is untrammelled and 
                        when nothing prevents our being able to do what we like best 
                    </p>
                </div>


                <div className="tips">
                    <h2>Help & Tips</h2>
                    
                    <div className="wrapper-card">
                        <div 
                            style={{backgroundImage : `url(${Test})` }}
                            className="card-item">
                            <div className="card-info">
                                <h5>Start quickly with simple steps</h5>
                                <img src={Arrow} />
                            </div>
                        </div>


                        <div 
                            style={{backgroundImage : `url(${Tips2})` }}
                            className="card-item">
                            <div className="card-info">
                                <h5>Run smoothly at vero eos et accusamus</h5>
                                <img src={Arrow} />
                            </div>
                        </div>


                        <div 
                            style={{backgroundImage : `url(${Tips3})` }}
                            className="card-item">
                            <div className="card-info">
                                <h5>Denounce with righteous indignation</h5>
                                <img src={Arrow} />
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="main-footer"> 
                    <h2>You're all set</h2>
                    <p>the wise man therefore always holds in these matters to this principle of selection</p>
                    <img src={FooterLogo}  /> 
                </div>

            <div className="footer">
                <p><span>wknd</span>@2020</p>

                <p>alpha version 0.1</p>
            </div>

        </div>
    )
}

export default Index
