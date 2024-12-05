import React from 'react'
import Button from './button.jsx'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    useGSAP(() => {
        gsap.set("#hero-frame", {
            clipPath: "polygon(20% 0, 90% 0, 88% 90%, 0 80%)",
            borderRadius: "0% 0% 40% 10%",
        });

        gsap.from("#hero-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: "#hero-frame",
              start: "center center",
              end: "bottom center",
              scrub: true,
            },
        });
    });

  return (
    <div id='home' className='relative h-dvh w-screen overflow-x-hidden bg-white'>
        <div id='hero-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black'>
            <div className='mask-clip-path absolute-center absolute z-50 size-60 cursor-pointer overflow-hidden rounded-lg sm:size-12'>
                <div className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100'>
                    <img src='image/Hero.jpg' id='hero-profile' className='size-60 origin-center scale-150 object-cover object-center' />
                </div>
            </div>

            <h1 className='special-font hero-heading absolute bottom-8 right-5 z-40 text-blue-75'>
                de<b>v</b>eloper
            </h1>

            <div className='absolute left-0 top-0 z-40 size-full'>
                <div className='mt-14 px-5 sm:px-10'>
                    <h1 className='special-font hero-heading text-blue-100'>Soft<b>w</b>are</h1>
                    <p className='mb-3 max-w-64 font-robert-regular text-blue-100'>Hi! I'm Karan I love building <br/> dynamic and user-friendly experience.</p>
                    <div className='w-fit'>
                    <Button id="contact-hero" link='mailto:karanbhati1310@gmail.com' title="Contact me" leftIcon={<TiLocationArrow />} containerClass="!bg-blue-50 flex-center gap-1" />
                    </div>
                </div>
            </div>
        </div>

        <h1 className='special-font hero-heading absolute bottom-8 right-5 text-black'>
                de<b>v</b>eloper
        </h1>
    </div>
  )
}

export default Hero