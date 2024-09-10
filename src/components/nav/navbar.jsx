'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Menu from './menu';
import ThemeSwitch from '../themeSwitch';

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
        <motion.div className={`${scrolled? `bg-purple-400 bg-opacity-30 backdrop-blur-lg `: `bg-transparent lg:bg-[#8B5CF680] `} flex flex-row-reverse justify-between items-center w-full h-[75px] transition-colors duration-300 z-20 fixed right-0 top-0 `}>
            <Link href={'#'}>
                <div className="w-fit h-fit text-[#F9CE69] text-[48px] font-bold pl-[25px] ">
                    TP
                </div>
            </Link>

            <div className={`${scrolled? `lg:hidden`: ``} hidden lg:flex items-center gap-[50px] w-fit text-[24px] mr-[50px] `}>
                <Link href={'#'}><p>الرئيسية</p></Link>
                <Link href={'#'}><p>خدماتنا</p></Link>
                <Link href={'#'}><p>أعمالنا</p></Link>
                <Link href={'#'}><p>أدواتنا</p></Link>
                <Link href={'#'}><p>تواصل معنا</p></Link>
            </div>
            <div className={`${scrolled? ``: `lg:hidden`} `}>
                <Menu></Menu>
            </div>
            
            
        </motion.div>
    )
}
