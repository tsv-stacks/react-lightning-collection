import logo from '/PR-Lightning-Collection_Logo.png'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='navbar' >
            <img src={logo} className='logo' />
            <h1 className='navbar--title'>My Lightning Collection</h1>
        </nav>
    )
}
