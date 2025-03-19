"use client"
import React, {useEffect} from 'react';
import Project from "@/components/Project";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Project2 from "@/components/Project2";

gsap.registerPlugin(ScrollTrigger)

const ProjectsCard = () => {
    const setupAnimations = () => {
        gsap.from('.slideLeft', {
            x: -1000,
            opacity: 0,
            scrollTrigger: {
                trigger:'.slideLeft',
                start: "top center",
                end: "70% 90%",
                scrub: 1,
            }
        });
        gsap.fromTo('.bh',{
            x:0,
            },
            {
            x: -660,
            scrollTrigger: {
                trigger:'.slideLeft',
                start: "top center",
                end: "70% 90%",
                scrub: 0.7,
            }
        });
        // TODO: Mobile config
        gsap.from('.slideRight', {
            x: 300,
            opacity: 0,
            scrollTrigger: {
                trigger:'.slideRight',
                start: "top 50%",
                end: "70% 90%",
                scrub:0.5,
            }
        });
        // TODO: Mobile config
    };

    useEffect(() => {
        setupAnimations();
        ScrollTrigger.addEventListener("refreshInit", () => {
            document.body.style.height = "auto";
        });
        return () => ScrollTrigger.killAll();
    }, []);
    return (
        <section id="projects" className="ml-[10vw] flex items-center justify-start gap-[14vw] mt-[45vh] relative mb-[30vh]">
            <div className="slideLeft">
                <Project/>
            </div>
            <div className="slideLeft mr-20">
                <Project2/>
            </div>
            <div
                className="w-[40vw] absolute slideRight -right-[20vw]
            max-md:-top-10 max-md:w-[100vw] mix-blend-lighten z-40
            ">
                <video className="z-40 w-[100vw] object-right sticky" autoPlay loop muted>
                    <source src="/videos/glob.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default ProjectsCard;