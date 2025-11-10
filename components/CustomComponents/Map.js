'use client'
import { useState, useEffect } from 'react'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image';
import { FaLocationPin, FaLocationPinLock, FaMapLocation } from "react-icons/fa6";
import { FaMapMarkerAlt } from 'react-icons/fa';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}

export default function Map() {
  
  return (
    <>
    
    <section className="main-slider main-slider-one" id="map" dir='rtl'>
        <div className='custom_container'>
            <div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content_why_invest'>خريطة المشروع</h1>
        </div>
      </div>
      {/* <div className='resp_usd'>
        <p className="down_styling para_styling">
 Invest in Sobha Siniya Island with Shiro Estate and unlock exclusive projects, prime waterfront living, and exceptional investment opportunities. Secure your preferred residence now.
</p>

      </div> */}
        </div>
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none map_container" style={{height: "100vh"}}>                    
        <SwiperSlide className="swiper-slide">
          <div className="image-layer main_banner" 
          style={{backgroundImage: 'url(assets/img/slider/map.webp)'}}
          >
            </div>
            <div className=" map_wrapper">
                <div className="main-slider-one__single slider_wrapper">

                 <div className='map_container_c'>
                   

<div className='outer_container_map'>
     <div className='address_container'>
     <div>
        <Image
                                src="/assets/icon/sobha_icons/location_icon_white.svg"
                                alt="world_class_amenities"
                                height={40}
                                width={300}
                                className='map_icon_styling'
                              />
    </div>
    <div style={{marginLeft: 10}}>
                <p className='community_styling'>
                حديقة الأحلام المائية
            </p>
            <p className='distance'>
                يبعد 7 دقائق
            </p>
            </div>
 </div>
 <div className='address_container'>
     <div>
        <Image
                                src="/assets/icon/sobha_icons/location_icon_white.svg"
                                alt="world_class_amenities"
                                height={40}
                                width={300}
                                className='map_icon_styling'
                              />
    </div>
    <div style={{marginLeft: 10}}>
                <p className='community_styling'>
                جزيرة المرجان
            </p>
            <p className='distance'>
                تبعد 15 دقيقة
            </p>
            </div>
 </div>
 <div className='address_container'>
     <div>
        <Image
                                src="/assets/icon/sobha_icons/location_icon_white.svg"
                                alt="world_class_amenities"
                                height={40}
                                width={300}
                                className='map_icon_styling'
                              />
    </div>
    <div style={{marginLeft: 10}}>
                <p className='community_styling'>
                شاطئ رأس الخيمة
            </p>
            <p className='distance'>
                تبعد 17 دقيقة
            </p>
            </div>
 </div>
 <div className='address_container'>
     <div>
        <Image
                                src="/assets/icon/sobha_icons/location_icon_white.svg"
                                alt="world_class_amenities"
                                height={40}
                                width={300}
                                className='map_icon_styling'
                              />
    </div>
    <div style={{marginLeft: 10}}>
                <p className='community_styling'>
                مول أم القيوين
            </p>
            <p className='distance'>
                تبعد 23 دقيقة
            </p>
            </div>
 </div>
 <div className='address_container'>
     <div>
        <Image
                                src="/assets/icon/sobha_icons/location_icon_white.svg"
                                alt="world_class_amenities"
                                height={40}
                                width={300}
                                className='map_icon_styling'
                              />
    </div>
    <div style={{marginLeft: 10}}>
                <p className='community_styling'>
              شاطئ أم القيوين
            </p>
            <p className='distance'>
                تبعد 24 دقيقة
            </p>
            </div>
 </div>
 <div className='address_container'>
     <div>
        <Image
                                src="/assets/icon/sobha_icons/location_icon_white.svg"
                                alt="world_class_amenities"
                                height={40}
                                width={300}
                                className='map_icon_styling'
                              />
    </div>
    <div style={{marginLeft: 10}}>
                <p className='community_styling'>
                الشارقة
            </p>
            <p className='distance'>
               تبعد 30 دقيقة
            </p>
            </div>
 </div>
 <div className='address_container'>
     <div>
        <Image
                                src="/assets/icon/sobha_icons/location_icon_white.svg"
                                alt="world_class_amenities"
                                height={40}
                                width={300}
                                className='map_icon_styling'
                              />
    </div>
    <div style={{marginLeft: 10}}>
                <p className='community_styling'>
                دبي
            </p>
            <p className='distance'>
                تبعد 50 دقيقة
            </p>
            </div>
 </div>
</div>
                 </div>

               

                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
};