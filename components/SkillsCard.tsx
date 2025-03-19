"use client"
import {Eater} from "next/font/google";
import Image from "next/image";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const eater = Eater({weight: "400", subsets: ["latin"]})
const SkillsCard = () => {
    const cardRef = useRef(null);
    const setupAnimations = () => {
        gsap.from(cardRef.current, {
            x: -1000,
            opacity: 0,
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top center",
                end: "bottom 90%",
                scrub: 1,
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
        <section id="skills" className="flex justify-center w-full md:mt-[30vh] max-md:pt-24 z-10 ">
            <div ref={cardRef} className="mx-auto flex flex-col p-8 rounded-2xl relative max-md:w-[90vw] shadow-purple-600 shadow-sm
            bg-gradient-to-br from-[rgba(0,0,0,0.2)] to-[rgba(58,7,100,0.6)]">
                <div className={eater.className}>
                    <h1 className="text-center text-2xl text-purple-400">What Can I do?</h1>
                </div>
                <div className="mt-10 max-md:text-xs">
                    <ul className="flex flex-col gap-3 max-md:gap-1 list-disc">
                        <li>Efficiency in HTML, CSS and Javascipt. </li>
                        <li>Abilities to make beautiful and responsive designs using Tailwind CSS. </li>
                        <li>Experience in JS frontend frameworks, such as React .. </li>
                        <li>Ensure type Safety with TypeScript.</li>
                        <li>Experience in Backend development and building API. </li>
                        <li>Abilities in NodeJs's Express and MongoDB.</li>
                        <li>Build fullstack Websites using the MERN stack. </li>
                        <li>Experience in NEXT.Js and building fullstack web applications </li>
                        <li>Ready to learn anything!!!..</li>
                    </ul>
                </div>
                <Image
                    className="absolute md:top-0 md:-right-[35vw]
                    max-md:-bottom-[22vh] scale-150 max-md:scale-90 rotate-[10deg] max-md:-right-20"
                    width={500}
                    height={500}
                    src="/images/rid.webp" alt="image couldn't load" />
                <Image
                    className="absolute md:-bottom-10 md:-left-[25vw]
                    max-md:-bottom-[28vh] rotate-[-10deg] max-md:scale-50 max-md:-left-20"
                    width={300}
                    height={300}
                    src="/images/rid2.webp" alt="image couldn't load" />
            </div>
        </section>
    );
};

export default SkillsCard;