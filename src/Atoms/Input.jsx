import React from 'react'
import '../Atoms/Input.scss'

export default function Input() {
    return (
        <div className="Wrapper">
            <div className="register-form">
                <label>Select your ...</label>
                <input className="glassy-input" placeholder="select your ..."></input>
            </div>        
        </div>
    )
}