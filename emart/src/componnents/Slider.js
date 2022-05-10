import { Carousel } from 'antd'
import React from 'react'
import '../App';
import { sliderItems } from '../data';

function Slider() {
    return (
        <div className='slide-container'>
            <Carousel autoplay>
                {sliderItems.map((item) => (
                    <div className='img-slide' key={item.id}>
                        <img src={item.img} alt="logo"/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Slider