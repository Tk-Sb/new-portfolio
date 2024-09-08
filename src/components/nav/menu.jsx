'use client'

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./menu-button";

const navLinks = [
  { title: "الرئيسية", href: "/" },
  { title: "خدماتنا", href: "/" },
  { title: "أعمالنا", href: "/" },
  { title: "أدواتنا", href: "/" },
  { title: "تواصل معنا", href: "/" },
];

export default function Menu () {
  const [open, setOpen] = useState(false);
  
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  
  // animation props
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div>
      <nav dir="rtl" className="flex justify-start items-center">
        <div className="cursor-pointer w-fit h-fit z-10" onClick={toggleMenu} >
          <MenuButton></MenuButton>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-[100vw] h-[100vh] origin-top bg-[#8B5CF6] p-[25px] "
          >
            <div className="w-full h-full ">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col justify-start w-full h-full items-center gap-[10px] pt-[75px] "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div key={index} dir="rtl" className="flex justify-start items-center overflow-hidden w-full h-[100px] border-b-2 border-b-[#8F8F8F] hover:border-b-white active:border-b-white transition-colors duration-500 ">
                      <MobileNavLink title={link.title} href={link.href} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

function MobileNavLink ({ title, href }) {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="flex justify-start w-full h-full items-center text-4xl text-[#d4d4d4] hover:text-white transition-colors duration-500 "
    >
      <div>
        <Link href={href}>{title}</Link>
      </div>
    </motion.div>
  );
};