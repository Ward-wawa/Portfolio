"use client"
const HeroVid = () => {
    return (
        <div className="h-[60vh] w-[25vw] z-30 pr-10 mix-blend-lighten scale-200 absolute right-0 bottom-0 max-md:left-1/2 max-md:-translate-x-1/2
                max-md:h-[40vh] max-md:w-[90%] max-md:mt-12 flex justify-center max-md:pl-10 anim2
                ">
            <video className="object-contain -z-30" width={350} autoPlay loop muted>
                <source src="/videos/hero.webm" type="video/webm"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default HeroVid;