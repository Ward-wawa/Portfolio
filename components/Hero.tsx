"use client"
import {useEffect} from 'react';
import Welcome from "@/components/Welcome";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import HeroVid from "@/components/HeroVid";

gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
    const mm = gsap.matchMedia();
    useEffect(() => {
        mm.add("(min-width: 768px)",()=>{
            gsap.fromTo('.anim2',{
                y:-250,
                x:50,
                opacity:0,
                scale:0.3
            },{
                y:0,
                x:0,
                opacity:1,
                scale:2,
                duration:2,
            })
        })
            gsap.to('.nextAnim',{
                rotate:720,
                x:-1200,
                y:450,
                scrollTrigger:{
                    trigger:'.nextAnim',
                    start:"top 25%",
                    scrub:1,
                }
            })
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
        <main className="flex relative justify-center max-md:mt-12">
            <section className="flex justify-center  items-center md:w-screen sticky">
                    <div className="h-10"></div>
            <div className="max-md:w-[80vw] w-full md:mt-12 flex pt-40 justify-around md:px-6 max-md:flex-col">
                <div className="anim1">
                    <Welcome/>
                </div>
            </div>
        </section>
            <HeroVid/>
        </main>

    );
};

export default Hero;