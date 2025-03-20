import Image from "next/image";
import {Eater} from "next/font/google";

const eater = Eater({weight: "400", subsets: ["latin"]})
const Welcome = () => {
    return (
        <>
            <div className={eater.className}>
                <h1 className="md:text-3xl text-center max-md:text-lg mb-10">
                    Welcome To My <span className="text-purple-400">Portfolio!</span>
                </h1>
            </div>
            <div className="text-white text-center flex flex-col w-[40vw] max-md:w-full max-md:text-sm relative">
                <p className="md:hidden">
                    My name is <span className="text-purple-400">Ward Abboud</span> , I am a 20 year old Syrian
                    professional web developer .
                </p>
                <div className="flex items-center justify-center mt-6 mb-6 flex-col">
                    <p className="mr-4 mb-4 max-md:mb-10"> This is a brief introduction that i made with :</p>
                    <Image className="z-10 nextAnim" width={100} height={100} src="/images/next.webp" alt="img not loaded!"/>
                </div>
                <p className="triggerm max-md:leading-[2.5]">
                    This website will contain information about me and my capabilities as a web developer,
                    and some exciting projects I made!
                </p>
                <div
                    className="mix-blend-lighten absolute -left-[28vw] w-[25vw] -top-12 flex flex-col items-start max-md:hidden
                    shadow-purple-400 shadow-sm bg-gradient-to-bl from-[rgba(58,7,100,0.6)] to-[rgba(0,0,0,0.5)] p-3
                    ">
                    <h1 className="text-2xl w-[10vh]">
                        Turning <span className={eater.className}><span className="text-5xl text-blue-400">Dreams</span></span>
                    </h1>
                    <h1 className="text-2xl mb-[2vh]">
                        into <span className={eater.className}><span
                        className="text-5xl text-blue-400">Reality</span></span>
                    </h1>
                    <h1 className="font-extrabold text-2xl">
                        Introduction:
                    </h1>
                    <p className="w-[20vw]">
                        My name is Ward Abboud, I am a 20 years old Syrian professional Web Developer.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Welcome;