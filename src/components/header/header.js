import React from 'react';
import './header.css'

const Header = () => {
    return (
	
    <header 
    onClick={()=>window.scroll(0,0)} 
    className="header"
    >
        🎥 Binge Search 🎥
    </header>
            
    )
}

export default Header
