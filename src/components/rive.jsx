'use client'

import { useRive } from "@rive-app/react-canvas"

export default function Rive({ animation }) {
  const { rive, RiveComponent } = useRive({
    src: `/rive-animations/${animation}`,
    autoplay: false
  })
  
  return (
    <>
      <RiveComponent onMouseEnter={() => rive && rive.play()} onMouseLeave={() => rive && rive.reset()} className="w-full h-[200px] md:h-[300px]"></RiveComponent>
    </>
  )
}