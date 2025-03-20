
import Image from "next/image";

const Project = () => {
    return (
        <div className="mx-auto flex flex-col justify-center items-center p-3 rounded-2xl relative max-md:w-[90vw] shadow-purple-600 shadow-sm
            bg-gradient-to-br from-[rgba(0,0,0,0.2)] to-[rgba(58,7,100,0.6)] w-[23vw] text-sm">
            <h1 className="text-2xl font-extrabold mb-4">CaroChat!</h1>
            <p>A Real time fullstack chatting app!</p>
            <p className="w-[90%]">An app with a beautiful user interface. I made this app using the MERN stack,
                with Zustand store managing, JSON Web token authentication, real time chatting using Socket.io and more... </p>
            <p className="w-[90%] mt-4">
                <a href="https://carochat-project-production.up.railway.app" target="_blank"
                    className="text-purple-400 font-bold hover:text-blue-400 active:underline mr-1">Visit Now!</a>
                create your account and start chatting!</p>
            <div className="flex flex-col mt-6 items-center">
                <div className="flex mt-3 justify-center">
                    <Image
                        quality={60}
                        className="w-[40%]"
                        src='/images/chatProf.webp'
                        alt="not loaded"
                        width={100}
                        height={100}
                    />
                    <Image
                        quality={60}
                        className="w-[40%]"
                        src='/images/chatAcc.webp'
                        alt="not loaded"
                        width={100}
                        height={100}
                    />
                </div>
                <Image
                    quality={60}
                    className="w-[70%]"
                    src='/images/chat.webp'
                    alt="not loaded"
                    width={200}
                    height={200}
                />
            </div>

        </div>
    );
};

export default Project;