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
        <motion.div className={`${scrolled? `bg-purple-400 bg-opacity-30 backdrop-blur-lg `: `bg-transparent`} bg-[#8B5CF680] fixed flex flex-row-reverse justify-between items-center w-[100vw] h-[75px] px-[25px] lg:pr-[100px] transition-colors duration-300`}>
            <Link href={'#'}>
                <div className="w-fit h-fit text-[#F9CE69] text-[48px] font-bold">
                    TP
                </div>
            </Link>

            <ThemeSwitch/>

            <div className={`${scrolled? `lg:hidden`: ``} hidden lg:flex gap-[50px] w-[463px]`}>
                <Link href={'#'}><p>الرئيسية</p></Link>
                <Link href={'#'}><p>أعمالنا</p></Link>
                <Link href={'#'}><p>أدواتنا</p></Link>
                <Link href={'#'}><p>تواصل معنا</p></Link>
            </div>
            <div className={`${scrolled? ``: `lg:hidden`}`}>
            <Menu></Menu>
            </div>
            
            
        </motion.div>
    )
}
