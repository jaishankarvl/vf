import React, { Component } from 'react';
import './AddOns.scss';
import grayTick from './images/gray-tick.svg';
import whiteTick from './images/white-tick.svg';
import axios from "axios";

class AddOns extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addOnsData : [],
            showSelectedTick: false,
        };
    }

    //dummy code to use further to get the plans from json
    componentDidMount() {
        this.serviceRequest = axios.get('./addOnsData.json')
            .then((response)=>{
                this.setState({
                    addOnsData: response.data,
                })
            }).catch((err)=>{
                console.log(err);
            })
    }
    componentWillUnmount() {
        this.serviceRequest.abort();
    }

    handleCartButtonClick = () => {
        const {handleCartClick} =this.props;
        handleCartClick();


    };
    render() {
        const {addOnsData, showSelectedTick} = this.state;
        return (
            <div className="addOns-parent">
                <div className="red-border"></div>
                <div className="addOns-heading">
                    Choose your Add ons
                </div>
                {addOnsData.map((data, index) => {
                    return (
                        <div className="addOns-section-parent" key={data.id}>
                            <div className="top-section-parent">
                            <div className="heading">
                                {data.headerText}
                            </div>
                            <div className="addOns-value-parent">
                                <span className="addOns-value">{data.addOnsValue}</span>
                                <span className="vat-inclusion">/mo (Exc. VAT)</span>
                            </div>
                            </div>
                            <div className="addOns-middle-section-parent">
                                <div className="addOns-description">
                                    {data.addOnsDescription}
                                </div>
                                <div className="addOns-cart-button">
                                    <button className="addOns-add-to-cart">Add to cart
                                        {showSelectedTick &&
                                        <img className="white-tick" src={whiteTick} alt="white tick"/>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="proceed-button-parent">
                    <button className="proceed-button" >
                        Thanks & Proceed
                    </button>
                </div>
                <div className="add-to-cart-section">
                    <div className="phone-section">
                        Phone
                        <div><img className="gray-tick" src={grayTick} alt="white tick"/></div>
                    </div>
                    <div className="plan-section">
                        Plan
                        <div><img className="gray-tick" src={grayTick} alt="white tick"/></div>
                    </div>
                    <div className="addons-section">
                        Add ons
                    </div>
                    <div className="upfront-section">
                        <div className="monthly-text">Upfront</div>
                        <div className="monthly-value">£24.17</div>
                        <div className="vat-text">(Exc. VAT)</div>
                    </div>
                    <div className="monthly-section">
                        <div className="monthly-text">Monthly</div>
                        <div className="monthly-value">£57.50</div>
                        <div className="vat-text">(Exc. VAT)</div>
                    </div>
                    <div className="cart-section">
                        <button className="cart-button" onClick={this.handleCartButtonClick}>
                            Go to cart
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddOns;
