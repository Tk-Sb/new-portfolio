'use client'

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/imgs/nature/1.jpg",
  "/imgs/nature/2.jpg",
  "/imgs/nature/3.jpg",
  "/imgs/nature/4.jpg",
  "/imgs/nature/5.jpg",
  "/imgs/nature/6.jpg",
  "/imgs/nature/7.jpg",
];

const cards = [
  { mainText: "Responsive design", secondLine: "(Screen width adaptation)", subText: "يأخذ الموقع الشكل المناسب ليظهر بالشكل الأمثل على جميع أنواع و أحجام الشاشات.", background: "/responsive.png" },
  { mainText: "UI/UX", secondLine: "(User Interface / User Experience)", subText: "هوية بصرية خاصة بموقعك، مصممة لتعكس الجودة العالية، و مدروسة بناءاً على تجارب المستخدمين لتسهل تفاعل المستخدم مع الموقع.", background: "/ui-ux.png" },
  { mainText: "SPA", secondLine: "(Single Page Application)", subText: "سلاسة كبيرة في التنقل بين الصفحات تعطي سرعة في الأداء مما يزيد من تفاعل المستخدم مع التطبيق. (بالأخص على أجهزة الموبايل)", background: "/ssr.png" },
  { mainText: "SSR", secondLine: "(Server-Side Rendering)", subText: "يعمل موقعك بنسبة %90 على السيرفر الخاص بك، مما يرفع مستوى أمان و خصوصية البيانات ضمن التطبيق، كما يسهل عليك إدارة موقعك.", background: "/ssr.png" },
]


const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 100000;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function SwipeCarousel () {
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
    <div className="relative overflow-hidden bg-transparent py-8">
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
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

function Images ({ imgIndex }) {
  return (
    <>
      {cards.map((card, id) => {
        return (
          <motion.div
            key={id}
            style={{
              backgroundImage: `url(${card.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === id ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-square flex flex-col justify-end items-center w-screen shrink-0 text-white p-[15px] pb-[25px]"
          >
            <div className="flex flex-col gap-[15px]">
              
              <div>
                <div className="text-[26px] font-bold">
                  {card.mainText}
                </div>

                <div className="text-[18px] font-bold">
                  {card.secondLine}
                </div>
              </div>


              <div className="text-[16px] text-right">
                {card.subText}
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

function Dots ({ imgIndex, setImgIndex }) {
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
