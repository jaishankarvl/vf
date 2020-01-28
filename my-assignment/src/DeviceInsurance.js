import React, { Component } from 'react';
import './DeviceInsurance.scss';
import whiteTick from './images/white-tick.svg';
import axios from "axios";

class DeviceInsurance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            insuranceData : [],
            showSelectedTick: false,
        };
    }

    componentDidMount() {
        this.serviceRequest = axios.get('./InsuranceData.json')
            .then((response)=>{
                this.setState({
                    insuranceData: response.data,
                })
            }).catch((err)=>{
                console.log(err);
            })
    }
    componentWillUnmount() {
        this.serviceRequest.abort();
    }

    render() {
        const {insuranceData, showSelectedTick} = this.state;
        return (
            <div className="device-insurance-parent">
                <div className="red-border"></div>
                <div className="protect-device-heading">
                    Protect your new device
                </div>
                <div className="protect-device-sub-heading">
                    You can choose cover for damage and breakdown, or add loss and theft too.
                </div>
                {insuranceData.map((data, index) => {
                    return (
                        <div className="insurance-section-parent" key={data.id}>
                            <div className="top-section-parent">
                            <div className="heading">
                                {data.headerText}
                            </div>
                            <div className="insurance-value-parent">
                                <span className="insurance-value">{data.insuranceValue}</span>
                                <span className="vat-inclusion">/mo (Exc. VAT)</span>
                            </div>
                            </div>
                            <div className="middle-section-parent">
                                <div className="insurance-description">
                                    {data.insuranceDescription}
                                </div>
                                <div className="insurance-cart-button">
                                    <button className="insurance-add-to-cart" >Add to cart
                                        {showSelectedTick &&
                                        <img className="white-tick" src={whiteTick} alt="white tick"/>
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className="product-details">
                                Product details
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DeviceInsurance;
