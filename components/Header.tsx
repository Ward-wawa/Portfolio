import React from 'react';

const Header = () => {
    return (
        <header className="
        fixed top-2 w-screen mx-2 z-50 bg-purple-950/80 backdrop-blur-lg border-b border-purple-900/30
        flex justify-between max-md:justify-center h-[8vh] rounded-full py-2 px-4"
             style={{boxShadow: " 0 0 15px purple", backgroundColor: "rgba(58, 7, 100, 0.2)"}}>
            <h1 className="max-md:hidden text-white text-center">
                Junior Developer: Ward Abboud
            </h1>
            <div
                style={{boxShadow: " 0 0 15px purple", backgroundColor: "rgba(0, 0, 45, 0.4)"}}
                className="flex w-[20vw] justify-around max-md:text-xs max-md:hidden rounded-full items-center">
                <a href="#skills" className="text-white">Skills</a>
                <a href="#projects" className="text-white">Projects</a>
                <a href="#contact" className="text-white">Contact</a>
            </div>
            <h1 className="md:hidden text-white text-center">
                Junior Developer: Ward Abboud
            </h1>
        </header>
    );
};

export default Header;