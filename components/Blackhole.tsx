"use client"
import React, {useEffect} from 'react';
import gsap from "gsap";

const Blackhole = () => {
    useEffect(() => {
        gsap.fromTo('.bh',{
            x:-660,
            y:-window.innerHeight,
            opacity:0
        },{
            x:0,
            y:0,
            opacity:1,
            duration:2.5,
        })
    }, []);
    return (
        <div
            className="bh fixed -top-[24%] opacity-70 left-1/2 -translate-x-1/2 w-[60vw] max-md:w-[90vw]
            max-md:-top-3 max-md:left-1/14 mix-blend-lighten z-40
            ">
            <video className="z-40 object-cover" autoPlay loop muted>
                <source src="/videos/blackhole.webm" type="video/webm"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Blackhole;