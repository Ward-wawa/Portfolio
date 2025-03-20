
import Image from "next/image";
import {Dancing_Script} from "next/font/google";

const dancing = Dancing_Script({weight: "400", subsets: ["latin"]})

const Project2 = () => {
    return (
        <div className="mx-auto flex flex-col justify-center items-center p-3 rounded-2xl relative max-md:w-[90vw] shadow-purple-600 shadow-sm
            bg-gradient-to-br from-[rgba(0,0,0,0.2)] to-[rgba(58,7,100,0.6)] w-[23vw] text-sm">
            <div className={dancing.className}>
                <h1 className="text-3xl font-extrabold mb-4">Kamishop!</h1>
            </div>
            <p>A Fullstack E-commerce Perfume Ordering app!</p>
            <p className="w-[90%]">An app I made with Next js 15, with GSAP's beautiful animations.</p>
            <div className="flex flex-col mt-6 items-center">
                <div className="flex mt-3 justify-center">
                    <Image
                        quality={60}
                        className="w-[46%]"
                        src='/images/perfumeSign.webp'
                        alt="not loaded"
                        width={100}
                        height={100}
                    />
                    <Image
                        quality={60}
                        className="w-[46%]"
                        src='/images/perfumeMenu.webp'
                        alt="not loaded"
                        width={100}
                        height={100}
                    />
                </div>
                <Image
                    quality={60}
                    className="w-[70%]"
                    src='/images/perfume.webp'
                    alt="not loaded"
                    width={200}
                    height={200}
                />
            </div>
            <p className="mt-2">Implemented NextAuth for excellent JWT authentication. Accounts, orders and perfumes are safely stored in the database.</p>
            <p className="w-[90%] mt-1"><a href="https://Kamishop.vercel.app/" target="_blank"
                className="text-purple-400 font-bold hover:text-blue-400 mr-1 active:underline" >Visit Now! </a>
                 create your account and place your orders!</p>

        </div>
    );
};

export default Project2;