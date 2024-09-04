'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Menu from './menu';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 75);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <motion.div className={`${scrolled? `bg-purple-400 bg-opacity-30 backdrop-blur-lg `: `bg-transparent`} fixed flex flex-row-reverse justify-between items-center w-[100vw] h-[75px] px-[25px] transition-colors duration-300`}>
            <Link href={'#'}>
                <div className="w-fit h-fit text-[#F9CE69] text-[48px] font-bold">
                    TP
                </div>
            </Link>
            <Menu></Menu>
        </motion.div>
    )
}
