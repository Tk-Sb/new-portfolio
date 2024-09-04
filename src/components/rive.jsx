'use client'

import { useRive } from "@rive-app/react-canvas"

export default function Rive({ animation, autoplay }) {
  const { rive, RiveComponent } = useRive({
    src: `/rive-animations/${animation}`,
    autoplay: autoplay
  })
  
  return (
    <>
      {!autoplay &&
        <RiveComponent onMouseEnter={() => rive && rive.play()} onMouseLeave={() => rive && rive.reset()} className="w-full h-full"></RiveComponent>
      }
      {autoplay &&
        <RiveComponent className="w-full h-full"></RiveComponent>
      }
    </>
  )
}