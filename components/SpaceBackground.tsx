"use client"
const SpaceBackground = ({children}:{children:any}) => {
    return (
        <div className="min-h-screen min-w-screen">
            <div className="fixed inset-0 -z-50">
                <video className="w-full h-full object-cover -z-50" playsInline autoPlay loop muted>
                    <source src="/videos/galaxy.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default SpaceBackground;