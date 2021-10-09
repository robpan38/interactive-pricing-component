import './Slider.css';

const Slider = () => {
    const onSliderChange = () => {
        console.log(document.querySelector(".slider").value);
    }
    
    return (
        <div className="sliderWrapper">
            <div className="sliderHeader">
                <p className="pageviews">100K PAGEVIEWS</p>
                <p className="price"></p>
            </div>
            <input onChange={onSliderChange} className="slider" type="range" min="1" max="100" step="1"></input>
            
        </div>
    );
}

export default Slider;