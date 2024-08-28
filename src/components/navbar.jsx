'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";

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
        <div className={`${scrolled? `bg-slate-100 bg-opacity-90`: ``} fixed flex flex-row-reverse justify-between items-start w-[100vw] h-[75px] py-[15px] px-[25px]`}>
            <Link href={'#'}>
                <div className="flex items-center w-fit h-[40px] text-[#F9CE69] text-[48px] font-bold">
                    TP
                </div>
            </Link>
            
            <button className="w-[64px] h-[58px]">UR menu btn</button>
        </div>
    )
}
