"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

function MagicDock ({ children, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE }, ref, ) {
  const mouseX = useMotionValue(Infinity);

  function renderChildren () {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        mouseX: mouseX,
        magnification: magnification,
        distance: distance,
      });
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md items-end`}
    >
      {renderChildren()}
    </motion.div>
  );
}

function DockIcon ({ magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE, mouseX, className, children }) {
  const ref = useRef(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
    >
      {children}
    </motion.div>
  );
};

export { MagicDock, DockIcon };
