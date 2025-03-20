"use client"
import React, {useEffect} from 'react';
import Project from "@/components/Project";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Project2 from "@/components/Project2";

gsap.registerPlugin(ScrollTrigger)

const ProjectsCard = () => {
    const mm = gsap.matchMedia();
    const setupAnimations = () => {
        mm.add("(max-width: 768px)",()=>{
            gsap.fromTo('.slideRight', {
                y:-500,
                opacity: 0,
                scale:1.7,
            },{
                scale:1,
                x:-60,
                opacity:2,
                y:1800,
                scrollTrigger: {
                    trigger:'.slideLeft',
                    start: "top 50%",
                    endTrigger:'.globEnd',
                    end: "bottom 10%",
                    scrub:0.7,
                }
            });
        });
        mm.add("(min-width: 768px)",()=>{
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
        })
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
    };

    useEffect(() => {
        setupAnimations();
        ScrollTrigger.addEventListener("refreshInit", () => {
            document.body.style.height = "auto";
        });
        return () => ScrollTrigger.killAll();
    }, []);
    return (
        <section className="max-md:flex max-md:justify-center">

            <div id="projects"
                     className="md:ml-[10vw] flex items-center md:justify-start gap-[14vw] mt-[45vh] max-md:w-[90vw]
                      max-md:items-center max-md:flex-col relative mb-[30vh]">
                <div className="slideLeft">
                    <Project/>
                </div>
                <div className="slideLeft max-md:mr-0 mr-20">
                    <Project2/>
                </div>
                <div
                    className="w-[40vw] absolute slideRight -right-[20vw]
                max-md:-top-10 max-md:w-[100vw] mix-blend-lighten -z-40
                ">
                    <video className="z-40 w-[100vw] object-right sticky" autoPlay loop muted>
                        <source src="/videos/glob.webm" type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default ProjectsCard;