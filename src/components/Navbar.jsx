import React, { useState } from 'react'
import { navMenu } from '../assets/assets';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed w-full py-4 z-50 backdrop-blur-3xl bg-white/70">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="text-3xl font-bold text-zinc-800">
                        <span className="text-cyan-800 font-orbitron">
                            Manoj Kumar
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-zinc-700 font-medium">
                        <div className="flex space-x-8 border border-gray-200 rounded-full px-10 py-4">
                            {navMenu.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.id}`}
                                    className="capitalize hover:text-teal-800 transition"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={() => window.open('/Manoj_CV.pdf', '_blank')}
                            className="px-10 py-4 border border-zinc-800 rounded-full flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 hover:-translate-y-1 transition duration-300"
                        >
                            Resume
                            <FaArrowRight className="text-gray-500 text-sm" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg mt-4 py-6 px-6 space-y-6 text-center">
                    {navMenu.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.id}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg capitalize text-zinc-700 hover:text-teal-800 transition"
                        >
                            {item.title}
                        </a>
                    ))}

                    <button
                        onClick={() => {
                            setIsOpen(false);
                            window.open('/Manoj_CV.pdf', '_blank');
                        }}
                        className="mt-4 px-6 py-3 border border-zinc-800 rounded-full flex items-center justify-center gap-2 mx-auto text-slate-500 hover:text-slate-800 transition"
                    >
                        Resume
                        <FaArrowRight className="text-gray-500 text-sm" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;