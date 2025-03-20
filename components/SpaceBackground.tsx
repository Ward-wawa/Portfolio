"use client"
import Header from "@/components/Header";

const SpaceBackground = ({children}:{children:any}) => {
    return (
        <div className="min-h-screen min-w-screen relative overflow-hidden">
            <div className="fixed inset-0 -z-50">
                <video className="w-full h-full object-cover -z-50" playsInline autoPlay loop muted>
                    <source src="/videos/galaxy.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default SpaceBackground;