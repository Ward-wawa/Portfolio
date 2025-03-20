"use client"
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

const Contact = () => {
    const cardRef = useRef(null);
    const setupAnimations = ()=> {
        const mm = gsap.matchMedia();

        //DESKTOP
        mm.add("(min-width: 768px)",()=>{
            const t1 = gsap.timeline({paused:true});
            gsap.fromTo('.slideRight', {
                y: 0,
            },{
                y: 620,
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

            ScrollTrigger.create({
                trigger:'.slide-left-2',
                start: "top center",
                onEnter: ()=> t1.play()
            })
            t1.from(".nextAnim2",{
                x:-200,
                y:-100,
                scale:1.6,
                rotate: 360,
                duration:2,
            })
                .to(".nextAnim2",{
                y:315,
                scale:0.8,
                x: 300,
                rotate:1080,
                duration:6,
            }).to(".nextAnim2",{
                x:1600,
                y:260,
                rotate:1300,
                scale:0.45,
                duration:18,
            })
            gsap.fromTo('.bh', {
                x: -690,
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
        })//end desktop

        //MOBILE
        mm.add("(max-width: 768px)",()=>{
            gsap.fromTo('.bh', {
                x: -660,
            },{
                y: "80vh",
                x: 0,
                rotate: 180,
                scale:1.75,
                opacity: 1,
                scrollTrigger: {
                    trigger:'.slide-left-2',
                    start: "top center",
                    end: "bottom 90%",
                    scrub: 1,
                },
            });
        })
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
        <section className="relative">
            <div ref={cardRef} id="contact" className="slide-left-2 mx-auto flex flex-col justify-center items-center p-3 mt-[20vh]
             mb-[55vh] gap-5 rounded-2xl relative max-md:w-[90vw] shadow-blue-400 shadow-sm
            bg-gradient-to-tl from-[rgba(58,7,0,0.6)] to-[rgba(58,7,240,0.6)] w-[33vw] text-sm">
                <h1 className="text-blue-400 font-extrabold text-2xl"> Contact me Now!</h1>
                <p>Email: wardistitan@gmail.com</p>
                <p>Mobile phone: +963986390582 </p>
            </div>
            <Image quality={60} src="/images/next.webp" alt="not loaded"
            width={100} height={100}
                   className="nextAnim2 absolute top-0 max-md:hidden"
            />
        </section>
    );
};

export default Contact;