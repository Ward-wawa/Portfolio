"use client"
import {useEffect} from 'react';
import Welcome from "@/components/Welcome";
import gsap from "gsap";
import HeroVid from "@/components/HeroVid";
const Hero = () => {
    useEffect(() => {
        gsap.fromTo('.anim1',{
            x:-window.innerWidth * 2,
            opacity:0
        },{
            x:0,
            opacity:1,
            duration:1,
        })
    }, []);
    return (
        <section className="flex justify-center  items-center md:w-screen sticky">
            <div className="max-md:w-[80vw] w-full md:mt-12 flex pt-40 justify-around md:px-6 max-md:flex-col">
                <div className="anim1">
                    <div className="h-10"></div>
                    <Welcome/>
                </div>
                <HeroVid/>
            </div>
        </section>
    );
};

export default Hero;