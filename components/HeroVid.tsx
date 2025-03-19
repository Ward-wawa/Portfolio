"use client"
const HeroVid = () => {
    return (
        <div className="h-[60vh] w-[25vw] z-30  pr-10 opacity-50 mix-blend-lighten scale-200
                max-md:h-[40vh] max-md:w-[90%] max-md:mt-12 flex justify-center max-md:pl-10
                ">
            <video className="object-contain z-30" width={350} autoPlay loop muted>
                <source src="/videos/hero.webm" type="video/webm"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default HeroVid;