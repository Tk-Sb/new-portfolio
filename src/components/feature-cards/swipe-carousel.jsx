'use client'

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Rive from "../rive";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function SwipeCarousel ({ cards, autoplay }) {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === cards.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < cards.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} cards={cards} autoplay={autoplay} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} cards={cards} />
    </div>
  );
};

function Images ({ imgIndex, cards, autoplay }) {
  return (
    <>
      {cards.map((card, id) => {
        return (
          <motion.div
            key={id}
            animate={{
              scale: imgIndex === id ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="flex flex-col w-fit h-fit"
          >
            <div className="w-[100vw] h-[300px] rounded-t-[15px] " style={{background: "radial-gradient(100% 100% at 0% 0%, rgba(249, 206, 105, 0.85) 0%, rgba(139, 92, 246, 0.85) 44.59%, rgba(67, 44, 119, 0.85) 85%)"}}>
              <Rive animation={card.animation} autoplay={autoplay}></Rive>
            </div>
            <div dir="rtl" className="flex flex-col gap-[20px] text-white w-[100vw] h-[250px] p-[25px] bg-[#2B2836] rounded-b-[15px] ">
              <div>
                <p className="text-[28px] font-bold text-center w-full">
                  {card.mainText}
                </p>
                <p dir="ltr" className="text-[18px] text-center text-[#8F8F8F] font-bold w-full">
                  {card.secondLine}
                </p>
              </div>
              <p className="text-[18px] text-[#C6C6C6] w-full">
                {card.subText}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

function Dots ({ imgIndex, setImgIndex, cards }) {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {cards.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-[#F9CE69]" : "bg-[#D2DCE5]"
            }`}
          />
        );
      })}
    </div>
  );
};
