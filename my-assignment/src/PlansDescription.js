import React, { Component } from 'react';
import './PlansDescription.scss';
import primeImage from './images/prime.png';
import spotifyImage from './images/spotify.png';
import nowTv from './images/now-tv.png';
import skyIcon from './images/sky.png';
import whiteTick from './images/white-tick.svg';
import axios from "axios";
import DeviceInsurance from "./DeviceInsurance";
import AddOns from "./AddOns";

class PlansDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listData : [],
            showInsuranceAddons: false,
            showSelectedTick: false,
        };
    }

    //dummy code to use further to get the plans from json
    componentDidMount() {
        this.serviceRequest = axios.get('./TempData.json')
            .then((response)=>{
                this.setState({
                    listData: response.data,
                })
            }).catch((err)=>{
                console.log(err);
            })
    }
    componentWillUnmount() {
        this.serviceRequest.abort();
    }

    onClickChoosePlanButton = (index,event) => {
        event.target.style.backgroundColor = '#428600';
        event.target.textContent="Selected plan";
        this.setState({
            showSelectedTick: false,
            showInsuranceAddons: true,
        })

    };
    render() {
        const {listData, showSelectedTick, showInsuranceAddons} = this.state;
        const{handleCartClick} = this.props;
        return (
            <div className="plan-description-parent">
                <div className="red-border"></div>
                <div className="choose-plane-heading">
                    Choose your 24-month plan
                </div>
                {listData.map((data, index) => {
                    return (
                        <div className="plans-section-parent" key={data.id}>
                            <div className="heading-text">
                                   <div className="plan-header">
                                   {data.headerText}
                                  </div>
                                   <div className="plan-description">
                                   {data.planDescription}
                                  </div>
                            </div>
                            <div className="value-text-parent">
                            <div className="plan-values">
                                <div className="data">
                                    <div className="table-heading">Data</div>
                                    <div className="value-text">{data.dataValue}</div>
                                </div>
                                <div className="minutes">
                                    <div className="table-heading">Minutes & Texts</div>
                                    <div className="value-text">{data.minuteTextValue}</div>
                                </div>
                                <div className="upfront">
                                    <div className="table-heading">Upfront</div>
                                    <div className="value-text">{data.upfrontValue}</div>
                                </div>
                                <div className="monthly">
                                    <div className="table-heading">Monthly</div>
                                    <div className="value-text">{data.monthlyValue}</div>
                                </div>
                                <div className="choose-plan-button-parent">
                                    <button className="choose-plan-button" onClick={(event) => {
                                        this.onClickChoosePlanButton(index,event);
                                    }}>switch plan
                                        {showSelectedTick &&
                                        <img className="white-tick" src={whiteTick} alt="white tick"/>
                                        }
                                        </button>
                                </div>
                            </div>
                            <div className="gray-border"></div>
                            <div className="includes-text">Includes</div>
                            <div className="bottom-section-parent">
                                <div className="benefit-text-parent">
                                    <div className="three-month-text">3-month free trial of Secure Net</div>
                                    {data.includes.map(function(benefitData){
                                        if(benefitData.value.indexOf('Speed')!== -1){
                                            return(
                                                <div key={data.key} className="speed-text">{benefitData.value}</div>
                                            )
                                        }else {
                                            return (
                                                <div key={data.key} className="other-text">{benefitData.value}</div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="entertainment-parent">
                                {data.primeFlag && data.spotifyFlag && data.nowFlag && data.skyFlag &&
                                <div className="entertainment-text">
                                    <div className="top-text">Your choice of entertainment for 24 months</div>
                                    <div className="images-parent">
                                        <img className="prime-image" src={primeImage} alt="prime"/>
                                        <img className="sky-image" src={skyIcon} alt="prime"/>
                                        <img className="spotify-image" src={spotifyImage} alt="spotify"/>
                                        <img className="now-image" src={nowTv} alt="prime"/>
                                    </div>
                                </div>
                                }
                                </div>
                                <div className="see-plan-details">
                                    See plan details
                                </div>

                            </div>
                        </div>
                        </div>
                    );
                })}
                <div className="plan-last-text">Each April your plan price will increase by an amount equal to the RPI rate published in March of the year. we’ll publish this rate on our website</div>
                {showInsuranceAddons &&
                <DeviceInsurance/>
                }
                {showInsuranceAddons &&
                <AddOns handleCartClick={handleCartClick}/>
                }
            </div>
        );
    }
}

export default PlansDescription;
