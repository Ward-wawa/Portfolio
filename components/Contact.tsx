"use client"
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

const Contact = () => {
    const cardRef = useRef(null);
    const setupAnimations = ()=> {
        gsap.from('.slide-left-2', {
            x: -1000,
            opacity: 0,
            scrollTrigger: {
                trigger:'.slide-left-2',
                start: "top center",
                end: "90% 90%",
                scrub: 1,
            }
        });
        gsap.fromTo('.slideRight', {
            y: 0,
        },{
            y: 550,
            x: '-50vw',
            scale:0.7,
            opacity: 1,
            scrollTrigger: {
                trigger:'.slide-left-2',
                start: "top center",
                end: "90% 90%",
                scrub: 5,
            },
        });
        gsap.fromTo('.bh', {
            x: -660,
        },{
            y: "45vh",
            x: '47vw',
            rotate:90,
            scale:1.6,
            opacity: 1,
            scrollTrigger: {
                trigger:'.slide-left-2',
                start: "top center",
                end: "bottom 90%",
                scrub: 1,
            },
        });
        gsap.to(cardRef.current, {
            y: 10,
            duration: 2,
            rotateZ:-5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });
    }

    useEffect(() => {
        setupAnimations();
        ScrollTrigger.addEventListener("refreshInit", () => {
            document.body.style.height = "auto";
        });
        return () => ScrollTrigger.killAll();
    }, []);
    return (
        <section>
            <div ref={cardRef} id="contact" className="slide-left-2 mx-auto flex flex-col justify-center items-center p-3 mt-[20vh]
             mb-[50vh] gap-5 rounded-2xl relative max-md:w-[90vw] shadow-blue-400 shadow-sm
            bg-gradient-to-tl from-[rgba(58,7,0,0.6)] to-[rgba(58,7,240,0.6)] w-[33vw] text-sm">
                <h1 className="text-blue-400 font-extrabold text-2xl"> Contact me Now!</h1>
                <p>Email: wardistitan@gmail.com</p>
                <p>Mobile phone: +963986390582 </p>
            </div>
        </section>
    );
};

export default Contact;