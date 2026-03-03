import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
    return (
        <div id="home" className="min-h-screen flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10">
                            <span className="text-zinc-700">FullStack Developer</span>
                            <br />
                            <span className="text-cyan-700">Node.js</span>
                        </h1>
                        <p className="text-zinc-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                            I build modern, scalable, and high-performance web applications
                            using React, Tailwind, and Node.js technologies.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-6">
                            <a
                                href="#work"
                                className="px-8 py-3 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 transition"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white transition"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='relative w-72 h-72 sm:w-80 sm:h-80 floating'>
                            <div className='absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30'>
                                <img className='w-full h-full object-cover'
                                    src={assets.profileImage} alt="Profile" />
                            </div>
                    <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-slate-600/20 overflow-hidden p-3'>
                        <div className='w-full h-full flex items-center justify-center'>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-white'>3.5+</div>
                                <div className='text-sm text-white'>years Exp</div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;