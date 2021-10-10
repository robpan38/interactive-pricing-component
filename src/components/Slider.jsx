import './Slider.css';
import { useState } from 'react';
import check from '../images/icon-check.svg';

const Slider = (props) => {
    const [sliderValue, setSliderValue] = useState(50);
    
    const onSliderChange = () => {
        setSliderValue(Number(document.querySelector(".slider").value));
    }
    
    const handleToggleClick = () => {
        const toggle = document.querySelector(".toggleBillWrapper");
        toggle.classList.toggle("toggleBillWrapperActivated");
        props.handleToggle();
    }

    let appDataIndex;
    if(sliderValue <= 20) {
        appDataIndex = 0;
    }
    else if(sliderValue > 20 && sliderValue <= 40) {
        appDataIndex = 1;
    }
    else if(sliderValue > 40 && sliderValue <= 60) {
        appDataIndex = 2;
    }
    else if(sliderValue > 60 && sliderValue <= 80) {
        appDataIndex = 3;
    }
    else {
        appDataIndex = 4;
    }

    return (
        <div className="sliderWrapper">
            <div className="sliderHeader">
                <p className="pageViews">{props.appData[appDataIndex].views} PAGEVIEWS</p>
                <p className="price">
                    <span style={{fontSize: "max(2rem, 2vw)", fontWeight: "800", color: "hsl(227, 35%, 25%)"}}>
                        {props.toggle === false ? props.appData[appDataIndex].monthly : props.appData[appDataIndex].yearly}
                    </span>
                     / month     
                </p>
            </div>
            <input onChange={onSliderChange} className="slider" type="range" min="1" max="100" step="1"></input>
            <div className="billingWrapper">
                <p className="bill">Monthly Billing</p>
                <div className="toggleBillWrapper" onClick={handleToggleClick}>
                    <div className="toggleBill"></div>
                </div>
                <p className="bill">Yearly Billing</p>
                <div className="discount">
                    <p className="discountText">
                        {props.isScreenSmall === true ? "25%" : "25% discount"}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="sliderFooter">
                <div className="checksWrapper">
                    <div className="checkWrapper">
                        <img src={check} alt="check"></img>
                        <p>Unlimited websites</p>
                    </div>
                    <div className="checkWrapper">
                        <img src={check} alt="check"></img>
                        <p>100% data ownership</p>
                    </div>
                    <div className="checkWrapper">
                        <img src={check} alt="check"></img>
                        <p>Email reports</p>
                    </div>
                </div>
                <button>Start my trial</button>
            </div>
        </div>
    );
}

export default Slider;