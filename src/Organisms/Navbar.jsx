import React from 'react'
import Wishlogo from '../Assets/wish-logo-white.svg'
import {Button} from '../Atoms/Button'
import $wish_blue from '../Atoms/Color.scss';
import '../Organisms/Navbar.scss'

export default function Navbar() {
    return (
      
            <nav className=" Header">
                <div className="Logo-container">
                    <a to='/'>
                      <img src={Wishlogo} className="Logo"></img>
                    </a>   
                </div>
                <div className="Header-nav">
                    <div className="Header-nav__link">
                        <a to='/'><p className="Header-items"> How it Works </p></a>
                    </div>
                    <div className="Header-nav__link">
                        <a to='/'><p className="Header-items"> Apply as a Freelancer </p></a>
                    </div>
                    <div className="Header-nav__link">
                        <Button type="button" backgroundColor="$wish_blue">
                            getting scss
                        </Button>
                    </div>
                </div>
            </nav>

       



    )
}