import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../index.css'

import { ServiceData } from '../constants'




function HomeSlider() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        className:'slides',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id='slider-wrapper' className='w-full bg-slate-50 h-fit flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 gap-6'>
            <h1 className='text-6xl text-black font-bold text-center'>Our Teachers</h1>
            <p className='text-xl text-center'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>

            <div className='w-full h-fit p-8'>
                <Slider {...settings}>
                    {
                        ServiceData.map((item, index) => (
                            <div id='slider-boxes' key={index} className='bg-white p-10 rounded-xl flex flex-col justify-center items-center border-b-[8px] border-secondarylight drop-shadow-md'>
                                <div id='icon-box' className='border-[2px] p-2 border-secondarylight rounded-full hover:scale-105 transition-all cursor-pointer'>
                                    {item.icon && <item.icon className='w-[45px] h-[45px]' />}
                                </div>
                                <div className='flex flex-col justify-center items-center gap-6 mt-6'>
                                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                                    <p className='text-[17px] text-center'>{item.content}</p>
                                    <button className='bg-secondarylight text-white drop-shadow-md border focus:bg-slate-100 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 hover:text-black'>{item.label}</button>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>

    )
}

export default HomeSlider