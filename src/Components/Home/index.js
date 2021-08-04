import React , {useState} from 'react'
import MainPage from '../MainPage'
import NotFound from '../404'
import About from '../AboutUs'
import { Logo } from '../../assets'
import { 
    BrowserRouter as Router , 
    Route , 
    Switch ,
    Link
} from 'react-router-dom'
import { FaFacebook , FaTwitter , FaYoutube , FaEnvelope , FaPhone , FaMapMarkerAlt , FaCalendarDay , FaBars} from 'react-icons/fa'


import './home.scss'

function Index() {
    const [ show , setShow] = useState(false)
    return (
        <div className="main-page">
            <Router>
                <div className="navigation">
                        <Link to="/"><img src={Logo} className="header-logo" /></Link>
                        
                             

                        <button className="btn-menu"><FaBars size="20" onClick={() => setShow(!show)} /></button>

                        <Link to="/login" className="btn-login">Login</Link>

                        <ul className={"list " + (show ? 'showTab' : '') }>
                            <li className="list-item close" onClick={() => setShow(!show)}><span>X</span></li>
                            <li className="list-item" ><Link className="list-link" to="/">Home</Link></li>
                            <li className="list-item"><Link className="list-link" to="/about">About Us</Link></li>
                            <li className="list-item"><Link className="list-link" to="/roadmap">Milistone & Roadmap</Link></li>
                            <li className="list-item"><Link className="list-link" to="/investor">Investor Relation</Link></li>
                        </ul> 

                        
                </div>

                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/about" component={About} />
                    <Route path="**" component={NotFound} />
                </Switch>

                <div className="footer">
                    <div className="social-media">
                        <h3>Social Media</h3>
                        <span><FaFacebook size="26" color="white" /></span>
                        <span><FaTwitter size="26" color="white" /></span>
                        <span><FaYoutube size="26" color="white" /></span>
                    </div>

                    <div className="product">
                        <h3>Service</h3>

                        <ul>
                            <li><Link to="/" className="list-link">Home</Link></li>
                            <li><Link to="/about" className="list-link">About Us</Link></li>
                            <li><Link to="/roadmap" className="list-link">Milestone & Roadmap</Link></li>
                            <li><Link to="/investor" className="list-link">Investor Relation</Link></li>
                        </ul>
                        
                    </div>

                    <div className="connect">
                        <h3>Connect With Us</h3>

                        <ul>
                            <li><FaPhone className="icon" /> +628131991</li>
                            <li><FaEnvelope className="icon" /> bill_indonesia@gmail.com</li>
                            <li><FaMapMarkerAlt className="icon" /> PIK 2 , North Jakarta</li>
                            <li><FaCalendarDay className="icon" /> Monday - Friday </li>
                        </ul>
                    </div>
                    
                    <div className="aboutus">
                        <h3>About Us</h3>
                        
                        <p>We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
                            Our products are designed for small to medium size companies willing to optimize their performance.</p>
                    </div>

                </div>


            </Router> 
        </div>
    )
}

export default Index
