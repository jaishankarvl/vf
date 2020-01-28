import React, { Component } from 'react';
import './HeaderTabs.scss';

class HeaderTabs extends Component {

    render() {
        return (
                <div className="tabs">
                    <button className="tab-links">Personal</button>
                    <button className="tab-links">Business</button>
                </div>
        );
    }
}

export default HeaderTabs;
