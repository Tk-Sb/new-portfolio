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
    <div className={`${scrolled? `bg-slate-400 bg-opacity-90`: ``} fixed flex justify-between items-start w-full h-[75px] pt-[15px] px-[25px]`}>
        
        <Link href={'#'}><p className="w-[64px] h-[58px] text-[#F9CE69] text-[48px] font-bold leading-[58px]">TP</p></Link>
        <div className="hidden">
            ....
        </div>
        <button className="w-[64px] h-[58px]">UR menu btn</button>
    </div>
)
}
