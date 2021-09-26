import React from 'react';
import './Header.css'

const Header = () => {
    return (<>
        <div className='head' >
            <i style={{ fontSize: '100px' }} className="fas fa-khanda"></i>
            <h1>Fourth Great Ninja War </h1>
            <h4>For the first time in history 5 Great Nation  will fight together to protect the Shinobi World . Form A Team  Nowww ...!!! </h4>
            <h2>Your Budget : 10 Million</h2>

        </div>
        <nav>
            <a href="/home">Home</a><a href="/strat">Battle Strategy</a>
            <a href="/comander">Commanders</a><a href="/regiment">Great Battle Regiment</a>
        </nav>
        <h2 style={{ textAlign: 'center', backgroundColor: 'whitesmoke', margin: 0, padding: '25px' }}>Available Shinobi(Ninja)</h2></>
    );
};

export default Header;