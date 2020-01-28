import React, { Component } from 'react';
import './App.scss';
import HeaderTabs from "./HeaderTabs";
import MainTabs from "./MainTabs";
import DeviceDescription from "./DeviceDescription";
import Footer from "./Footer";
import Cart from "./Cart";
import PlanDescription from "./PlansDescription";
import rightArrow from './images/right-arrow.svg';
import saleImage from "./images/sale-image.png";
import { BrowserRouter } from "react-router-dom";
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlanSection: false,
      showSelectedCartButton: false,
    };
  }

  handlePlanClick = (e) => {
    e.target.style.backgroundColor = '#428600';
    this.setState({
      showPlanSection: true,
      showSelectedCartButton: true,
    });
  };
  handleCartClick = () => {
    history.push('/cart')
    window.location.reload();
  };

  render() {
    const {showPlanSection,showInsuranceAddons, showSelectedCartButton} = this.state;

    let appComponent = (<div>
      <div className="switch-section">
        <div className="all-phones-section">
          <img className="right-arrow" src={rightArrow} alt="right arrow"/>
          <span className="all-phones">All Phones</span>
        </div>
        <div className="switch-section-parent">
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
          <span className="switch-button-text">Buying as a business?</span>
        </div>
      </div>
      <div className="sale-image-parent">
        <img className="sale-image" src={saleImage} alt="sale image"/>
      </div>
      <DeviceDescription onClickPlanButton={this.handlePlanClick} showSelectedCartButton={showSelectedCartButton}/>
      <Footer/>
      {showPlanSection &&
      <PlanDescription handleCartClick={this.handleCartClick}/>
      }
    </div>)
    return (
      <div className="App">
        <HeaderTabs/>
        <MainTabs/>
        <BrowserRouter>
          <Route path="/" exact render={()=>appComponent}/>
          <Route path="/cart" exact component={Cart} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
