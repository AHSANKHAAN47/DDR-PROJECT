import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import React, { useState } from "react";
import './Slider.css';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }
    return (
        <div className="Container2">
            <div className="ArrowLeft2" onClick={() => handleClick("left")}>
                <BsFillArrowLeftCircleFill />
            </div>
            <div className="Wrapper2" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                <div className="Slide2">
                    <div className="ImgContainer2">
                        <img src="https://w0.peakpx.com/wallpaper/1016/344/HD-wallpaper-women-with-glasses-glasses-sun-female-model-woman.jpg" alt='' className="Image2" />
                    </div>
                    <div className="InfoContainer2">
                        <h1 className="Title2">SUMMER SALE</h1>
                        <p className="Desc2">GET FLAT 30% OFF FOR NEW ARRIVALS</p>
                        <button className="Button2">SHOP NOW</button>
                    </div>
                </div>
                <div className="Slide2">
                    <div className="ImgContainer2">
                        <img src="https://static-01.daraz.pk/p/c4200a7b2b21b6d9abd3ec7849e523c7.jpg" alt='' className="Image2" />
                    </div>
                    <div className="InfoContainer2">
                        <h1 className="Title2">SPECIAL SALE</h1>
                        <p className="Desc2">GET FLAT 50% OFF ON ALL PRODUCTS</p>
                        <button className="Button2">SHOP NOW</button>
                    </div>
                </div>
                <div className="Slide2">
                    <div className="ImgContainer2">
                        <img src="https://www.bolle.com/dw/image/v2/BFJW_PRD/on/demandware.static/-/Library-Sites-BolleEUSharedLibrary/default/dwd9eeda22/homepage/2023/23-Winter/Mobile_banner_solace4_480x600.jpg" alt='' className="Image2" />
                    </div>
                    <div className="InfoContainer2">
                        <h1 className="Title2">WINTER SALE</h1>
                        <p className="Desc2">CLASSY NEW ARRIVALS</p>
                        <button className="Button2">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className="ArrowRight2" onClick={() => handleClick("right")}>
                <BsFillArrowRightCircleFill />
            </div>

        </div>
    )
}

export default Slider;