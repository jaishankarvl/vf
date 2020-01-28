import React, { Component } from 'react';
import './MainTabs.scss';
import logoImage from './images/logo.svg';
import searchImage from './images/search-icon.svg';
import cartIcon from './images/cart.svg';
import userIcon from './images/admin.svg';

class MainTabs extends Component {

    render() {
        return (
            <div className="header">
                <img className="voda-logo" src={logoImage} alt="logo"/>
                <div className="tabs-parent">
                    <button className="tabs">Mobile</button>
                    <button className="tabs">Broadband</button>
                    <button className="tabs">My Vodafone</button>
                    <button className="tabs">Help & information</button>
                    <button className="tabs">5G</button>
                </div>
                <div className="right-icons">
                <div className="icons-parent">
                    <button className="search-button"><img className="search-image" src={searchImage} alt="search button"/></button>
                </div>
                    <div className="icons-parent">
                        <button className="search-button"><img className="search-image" src={cartIcon} alt="cart button"/></button>
                    </div>
                <div className="user-parent">
                <button className="user-button"><img className="user-image" src={userIcon} alt="user button"/></button>
                </div>
                </div>
            </div>
        );
    }
}

export default MainTabs;
