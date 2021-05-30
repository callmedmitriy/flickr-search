import React from 'react';
import Search from '../Search'
import Logo from '../Logo'

import './style.scss';

const Header:React.VFC = () => {
    return (
        <div className="header">
            <div className="wrapper header__wrapper">
                <Search />
                <Logo />
            </div>
        </div>
    )
}

export default Header;