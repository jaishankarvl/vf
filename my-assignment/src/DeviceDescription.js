import React, { Component } from 'react';
import './DeviceDescription.scss';
import whiteTick from './images/white-tick.svg';
import iphoneFrontView from './images/iphone-front-view.jpg';
import iphoneThumbnailAllphones from './images/all-phones.png';
import iphoneThumbnailBackView from './images/iphone-back-view.png';
import iphoneThumbnailFrontView from './images/iphone-front-thumbnail.png';
import iphoneThumbnailSideView from './images/iphone-side-view.png';
import greenTick from './images/green-tick.svg';
import storeIcon from './images/store-icon.svg';

class DeviceDescription extends Component {
    constructor(props){
        super(props);
        this.state= {
            showSideView: false,
            showBackView: false,
            showFrontView: true,
            colours: {},
            storage: {},
        }
    }

    componentDidMount() {
        this.setState({
            colours: [
                {value: '#b8092c', name: ' Product (Red)'},
                {value: 'white', name: 'White'},
                {value: 'black', name: 'Black'},
                {value: 'yellow', name: 'Yellow'},
                {value: 'green', name: 'Green'},
                {value: 'purple', name: 'Purple'}
            ],
            storage: [
                {value: '64gb', name: '64GB'},
                {value: '128gb', name: '128GB'},
                {value: '256gb', name: '256GB'},
            ]
        });
    }

    handleBackImageClick = () => {
        this.setState({
            showSideView: false,
            showBackView: true,
            showFrontView: false,
        });
    };

    handleSideImageClick = () => {
        this.setState({
            showSideView: true,
            showBackView: false,
            showFrontView: false,
        });
    };

    handleFrontImageClick = () => {
        this.setState({
            showSideView: false,
            showBackView: false,
            showFrontView: true,
        });
    };

    handleColorChange = (event) => {
    if(event.currentTarget.value){
        event.target.parentElement.style.backgroundColor = event.currentTarget.value;
    }
    };

    render() {
        const {showSideView, showBackView, showFrontView, colours, storage} = this.state;
        const {onClickPlanButton, showSelectedCartButton} = this.props;
        let colourList = colours.length > 0
            && colours.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.name}</option>
                )
            }, this);
        let storageList = storage.length > 0
            && storage.map((item, i) => {
                if(item.value==='256gb'){
                    return (
                        <option key={i} disabled={true} value={item.value}>{item.name}</option>
                    )
                }else{
                    return (
                        <option key={i} value={item.value}>{item.name}</option>
                    )
                }
            }, this);
        return (
            <div className="main-section-parent">
                <div className="thumbnail-parent">
                    <div><img className="iphone-image-thumbnail" alt="iphone back view" onClick={this.handleBackImageClick} src={iphoneThumbnailAllphones}/>  </div>
                    <div> <img className="iphone-image-thumbnail" alt="iphone side view" onClick={this.handleSideImageClick} src={iphoneThumbnailSideView}/>  </div>
                    <div>  <img className="iphone-image-thumbnail" alt="iphone front view" onClick={this.handleFrontImageClick} src={iphoneThumbnailBackView}/> </div>
                        <div>  <img className="iphone-image-thumbnail" alt="iphone front view" onClick={this.handleFrontImageClick} src={iphoneThumbnailFrontView}/>
                    </div>
                </div>
                <div className="images-parent">
                {showBackView &&
                <img className="iphone-image-front-view" src={iphoneFrontView} alt="iphone back main view"/>
                }
                {showSideView &&
                <img  className="iphone-image-front-view" src={iphoneFrontView} alt="iphone side main view"/>
                }
                {showFrontView &&
                <img className="iphone-image-front-view" src={iphoneFrontView} alt="iphone front main view"/>
                }
                    <div className="dropdown-parents">
                        <div>
                            <div className="colour-text">Choose colour:</div>
                             <div className="selected-color">
                               <select className="color-dropdown" onChange={this.handleColorChange}>
                                  {colourList}
                               </select>
                             </div>
                        </div>
                        <div className="storage-parent">
                            <div className="storage-text">Choose Storage:</div>
                                 <div className="selected-storage">
                                 <select className="storage-dropdown" onChange={this.handleColorChange}>
                                     {storageList}
                                </select>
                               </div>
                        </div>
                    </div>
                </div>

                <div className="right-section-parent">
                    <div className="top-text">Apple iPhone 11</div>
                    <div className="description-text">
                        All-new powerful dual-camera system, Night mode, stunning video quality and all-day battery life - experience iPhone at 11. <span className="learn-link">Learn more</span>
                    </div>
                    <div className="gray-section">
                        <div className="price-text">
                            From <span className="bold-text">£60</span> a month with <span className="bold-text">£29</span> upfront.
                        </div>
                    </div>
                    <div className="bottom-text">
                        <div className="tick-text">Free home delivery.<br/> Order before 10:00pm today<br/> and get it on 13th January.<br/> Premium delivery slots available.<br/> Exclusions apply</div>
                        <div><img className="green-tick vertical-align" alt="green tick" src={greenTick}/></div>
                    </div>
                    <div className="bottom-text">
                        <div className="store-text">Click and Collect. Order online to<br/> collect from a Vodafone store.</div>
                        <div><img className="green-tick" alt="store" src={storeIcon}/></div>
                    </div>
                    <div className="plan-button-parent">
                        <button className="plan-button" onClick={onClickPlanButton}>Add{showSelectedCartButton && <span>ed</span>} to Cart
                            {showSelectedCartButton &&
                            <img  className="white-tick" src={whiteTick} alt="white tick"/>
                            }
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default DeviceDescription;
