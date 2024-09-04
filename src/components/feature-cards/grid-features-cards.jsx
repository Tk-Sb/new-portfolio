'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Rive from "../rive";


export default function GridFeaturesCards ({ cards, autoplay }) {
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  return (
    <div className="flex justify-center w-screen h-fit p-[25px] ">
      <CustomCursor isVisible={cursorVisible} />
      <div className="p-0">
        <FeatureCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cards={cards} />
      </div>
    </div>
  );
};

function CustomCursor ({ isVisible }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', mouseMove);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const cursorVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50"
          style={{
            left: position.x,
            top: position.y,
          }}
          variants={cursorVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="36px"
              height="36px"
              viewBox="0 0 24 24"
              style={{ enableBackground: 'new 0 0 512 512' }}
              xmlSpace="preserve"
              className="text-slate-900"
            >
              <defs>
                <linearGradient id="a" x1="11.992" x2="11.992" y1="22.192" y2="1.803" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="1" stopColor="#2bdada" offset="0"></stop>
                  <stop stopOpacity="1" stopColor="#008080" offset="1"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  fill="url(#a)"
                  d="m21.606 10.789-7.437 3.38-3.38 7.437a1 1 0 0 1-1.844-.055L1.875 3.166a1.007 1.007 0 0 1 1.292-1.291l18.385 7.07a1.006 1.006 0 0 1 .054 1.844z"
                  opacity="1"
                ></path>
              </g>
            </svg>
            <div
              className="pointer-events-none absolute rounded-full"
              style={{
                width: '100px',
                height: '100px',
                background: 'rgba(64, 224, 208, 0.5)',
                filter: 'blur(50px)',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FeatureCard = ({ onMouseEnter, onMouseLeave, cards, autoplay }) => {
  
  return (
    <div className="flex flex-wrap max-w-[1100px] h-fit gap-[25px] ">
      {cards.map((card, i) => {
        return (
          <motion.div 
            key={i} 
            className="flex flex-col w-fit h-fit rounded-[20px] "
            whileHover={{ scale: 1.05, rotate: 1, boxShadow: "5px 5px 0px 0px rgba(109, 40, 217, 1)" }}  // shadow-[5px_5px_0px_0px_rgba(109,40,217)]
            transition={{ duration: 0.3 }} 
            >
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{background: "radial-gradient(100% 100% at 0% 0%, rgba(249, 206, 105, 0.85) 0%, rgba(139, 92, 246, 0.85) 44.59%, rgba(67, 44, 119, 0.85) 85%)"}} className="w-[350px] h-[300px] rounded-t-[15px] cursor-none">
              <Rive animation={card.animation} autoplay={autoplay}></Rive>
            </div>
            <div dir="rtl" className="flex flex-col gap-[20px] text-white w-[350px] h-[250px] p-[25px] bg-[#2B2836] rounded-b-[15px] ">
              <div>
                <p className="text-[28px] font-bold text-center w-full">
                  {card.mainText}
                </p>
                <p dir="ltr" className="text-[18px] text-center text-[#8F8F8F] font-medium w-full">
                  {card.secondLine}
                </p>
              </div>
              <p className="text-[18px] text-[#C6C6C6] w-full">
                {card.subText}
              </p>
            </div>
          </motion.div>
        )})}
    </div>
  );
};
