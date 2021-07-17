import React from 'react'
import Topsoftwaredevelopers from '../Assets/top-software-developers.svg'
import Wishlinkedin from '../Assets/Wishlinkedin.svg'
import Wishtwitter from '../Assets/Wishtwitter.svg'
import Wishfooterlogo from '../Assets/footerlogo-light.svg'
import '../Organisms/Footer.scss'

export default function Footer() {
    return (
        <div className="Wrapper">
            <div className="Wishfooter-container">
                <div className="Wishfooter-container__content">
                    <div className="Wishfooter-container__contetn--cols">
                        <div className="Wishfooter-logo">
                            <a to='/'>
                                <img src={Wishfooterlogo} className="Wishfooter-logo-mode" alt='Wish Work logo'></img>
                            </a>
                            <a href="https://topsoftwarecompanies.co/software-development/agencies/germany" target="_blank"> 
                                <img src={Topsoftwaredevelopers} alt="software developers germany" title="Software Developers Germany" className="Wishfooter-topsoftwares" />
                            </a>
                        </div>
                        <div className="Wishfooter-container__contetn--items">
                            <ul className="Wishfooter-container__contetn--items--col1">
                                <li className="Footer-col__title">Company</li>
                                <li><a className="Footer-col__items Footer-items">About</a></li>
                                <li><a className="Footer-col__items Footer-items">Contact</a></li>
                                <li><a className="Footer-col__items Footer-items">Vetting Process</a></li>
                                <li><a className="Footer-col__items Footer-items">Case Study</a></li>

                            </ul>
                            <ul className="Wishfooter-container__contetn--items--col2">
                                <li className="Footer-col__title">Developers</li>
                                <li><a className="Footer-col__items Footer-items">Apply</a></li>
                                <li><a  className="Footer-col__items Footer-items">Stack</a></li>
                                <li><a className="Footer-col__items Footer-items">FAQ</a></li>
                
                            </ul>
                            <ul className="Wishfooter-container__contetn--items--col3">
                                <li className="Footer-col__title">Connect</li>
                                <li><a  className="Footer-col__items Footer-items">Client</a></li>
                                <li><a className="Footer-col__items Footer-items">Freelancer</a></li>
                                <li><a className="Footer-col__items Footer-items">Twitter</a></li>

                            </ul>
                            <ul className="Wishfooter-container__contetn--items--col4">
                                <li className="Footer-col__title" >More</li>
                                <li><a className="Footer-col__items Footer-items">Privacy Policy</a></li>
                                <li><a className="Footer-col__items Footer-items">Open Source Projects</a></li>
                                <li><a className="Footer-col__items Footer-items">Documents</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="Wishfooter-container__Socialmedia"> 
                        <div className="Wishfooter-container__Socialmedia--q1">
                            <p className="copy-right">© 2018 - 2021 Wish Work® Global Inc.</p>
                        </div>
                        <div className="Wishfooter-container__Socialmedia--icons">
                            {/* <div  className="Email-address">    
                                <a rel="noreferrer" target="_blank" href='mailto:info@wishwork.org' className="address" >
                                    <img  className="icon email-icon"  alt='Emailicon'/>
                                </a>
                            </div> */}
                            <div className="Twitter-address"> 
                                <a rel="noreferrer" target="_blank" to='https://twitter.com/wishworkco?s=11' className="address">
                                <img src={Wishtwitter} className="icon twitter-icon"  alt='Twittericon'/>
                                </a>
                            </div>

                            <div className="Linkedin-address">
                                <a rel="noreferrer" target="_blank" to='https://www.linkedin.com/company/wishwork/mycompany/' className="address">
                                    <img className="icon linkedin-icon" src={Wishlinkedin} alt='Linkedinicon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Footer-qoute">
                    All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
                    </div>
                    
                </div>
            </div>
        </div>

    )
}