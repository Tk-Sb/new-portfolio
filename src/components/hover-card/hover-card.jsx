'use client'

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function HoverCard() {
  return (
    <>
      <div className="flex justify-center gap-3 w-fit h-fit ">
        <div>
          <TiltCard background={"Home-page-mobile.png"} m={"mt-[50px]"} />
          <TiltCard background={"mall-mobile.png"} m={"mt-[25px]"} />
        </div>
        <div>
          <TiltCard background={"About-us-page-mobile.png"} />
          <TiltCard background={"boxing-mobile.png"} m={"mt-[25px]"} />
        </div>
      </div>
    </>
  )
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ background, m }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "radial-gradient(100% 100% at 0% 0%, rgba(249, 206, 105, 0.85) 0%, rgba(139, 92, 246, 0.85) 44.59%, rgba(67, 44, 119, 0.85) 85%)",
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`relative aspect-[0.52363636] w-36 md:w-72 rounded-[8px] md:rounded-[10px] ${m} `}
    >
      <div
        style={{
          background: `url(/designs/${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-[8px] md:inset-[15px] grid place-content-center rounded-[5px] md:rounded-[10px] shadow-lg"
      >
      </div>
    </motion.div>
  );
};