"use client"

import Image from 'next/image';


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

import { EffectCoverflow, Thumbs, Autoplay } from 'swiper/modules';


const Team = () => {

    const gradientStyle = {
        background: 'linear-gradient(180deg, rgba(0, 66, 37, 0.80) 30.1%, rgba(34, 25, 25, 0.80) 50%)',
    };

    return (
        <section className='max-w-[1540px] mx-auto mb-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-2 justify-center'>
                    <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                    <p className='text-[#B68C5A] text-[16px] font-bold'>Our Team</p>
                </div>
                <div className='mt-[25px] '>
                    <h1 className='heading text-center'>the faces of justice</h1>
                </div>
            </div>
            <div className='h-[500px]'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    // autoplay={{
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper w-full max-w-[1400px] !h-[500px]"
                >
                    <SwiperSlide className='!h-[480px] !w-[400px]'>
                        <div className='relative'>
                            <Image src='/sliderTeam.png' height={410} width={370} alt='Blog Icon' />
                            <div className='absolute inset-0 flex items-end justify-start transition-opacity duration-300 hover:opacity-100 opacity-0'>
                                <div style={gradientStyle} className='title relative w-[370px] ml-2 h-24 rounded-lg'>
                                    <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                    <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!h-[480px] !w-[400px]'>
                        <div className='relative'>
                            <Image src='/sliderTeam.png' height={410} width={370} alt='Blog Icon' />
                            <div className='absolute inset-0 flex items-end justify-start transition-opacity duration-300 hover:opacity-100 opacity-0'>
                                <div style={gradientStyle} className='title relative w-[370px] ml-2 h-24 rounded-lg'>
                                    <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                    <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!h-[480px] !w-[400px]'>
                        <div className='relative'>
                            <Image src='/sliderTeam.png' height={410} width={370} alt='Blog Icon' />
                            <div className='absolute inset-0 flex items-end justify-start transition-opacity duration-300 hover:opacity-100 opacity-0'>
                                <div style={gradientStyle} className='title relative w-[370px] ml-2 h-24 rounded-lg'>
                                    <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                    <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!h-[480px] !w-[400px]'>
                        <div className='relative'>
                            <Image src='/sliderTeam.png' height={410} width={370} alt='Blog Icon' />
                            <div className='absolute inset-0 flex items-end justify-start transition-opacity duration-300 hover:opacity-100 opacity-0'>
                                <div style={gradientStyle} className='title relative w-[370px] ml-2 h-24 rounded-lg'>
                                    <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                    <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!h-[480px] !w-[400px]'>
                        <div className='relative'>
                            <Image src='/sliderTeam.png' height={410} width={370} alt='Blog Icon' />
                            <div className='absolute inset-0 flex items-end justify-start transition-opacity duration-300 hover:opacity-100 opacity-0'>
                                <div style={gradientStyle} className='title relative w-[370px] ml-2 h-24 rounded-lg'>
                                    <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                    <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!h-[480px] !w-[400px]'>
                        <div className='relative'>
                            <Image src='/sliderTeam.png' height={410} width={370} alt='Blog Icon' />
                            <div className='absolute inset-0 flex items-end justify-start transition-opacity duration-300 hover:opacity-100 opacity-0'>
                                <div style={gradientStyle} className='title relative w-[370px] ml-2 h-24 rounded-lg'>
                                    <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                                    <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};


export default Team;


