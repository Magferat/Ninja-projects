import React from 'react';
import './Header.css'

const Header = () => {
    return (<>
        <div className='head' >
            <h1>Fourth Great Ninja War</h1>
            <h4>For the first time in history 5 Great Nation  will fight together to protect the Shinobi World . Form A Team  Nowww ...!!! </h4>
            <h1>Your Budget : 10 Million</h1>

        </div>
        <nav>
            <a href="/home">Home</a><a href="/strat">Battle Stategy</a>
            <a href="/comander">Commander</a><a href="/regiment">Great Battle Regiment</a>
        </nav>
        <h2 style={{ textAlign: 'center' }}>Available Shinobi(Ninja)</h2></>
    );
};

export default Header;