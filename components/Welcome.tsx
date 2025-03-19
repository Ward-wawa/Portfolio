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
            <div className="text-white text-center flex flex-col w-[40vw] max-md:w-full max-md:text-sm">
                <p>
                    My name is <span className="text-purple-400">Ward Abboud</span> , I am a 20 year old Syrian professional web developer .
                </p>
                <div className="flex items-center justify-center mt-6 mb-6 flex-col">
                    <p className="mr-4 mb-4">And this is a brief introduction that i made with :</p>
                    <Image className="z-10" width={100} height={100} src="/images/8.webp" alt="img not loaded!"/>
                </div>
                <p className="triggerm">
                    This website will contain information about me and my capabilities as a web developer,
                    and some exciting projects I made!
                </p>
            </div>
        </>
    );
};

export default Welcome;