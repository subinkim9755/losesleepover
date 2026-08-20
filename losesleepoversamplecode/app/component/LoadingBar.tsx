"use client";

import Galaxy from './Galaxy'
import ShinyText from './ShinyText'

function LoadingBar() {
  return (
    <div className="w-full">
      <div className="relative mx-auto flex h-[100px] w-[min(560px,80vw)] items-center justify-center">
        <Galaxy
          className="galaxy-container"
          style={{ position: 'absolute', inset: 0 }}
          mouseRepulsion
          mouseInteraction={false}
          density={3}
          glowIntensity={0.3}
          saturation={0.5}
          hueShift={160}
          twinkleIntensity={0.5}
          rotationSpeed={0}
          repulsionStrength={100}
          autoCenterRepulsion={0}
          starSpeed={0.1}
          speed={0.6}
        />

        <ShinyText
          text="LOSESLEEPOVER"
          speed={2} 
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          yoyo={false}
          pauseOnHover={false}
          direction="left"
          className="pont-LogoFont loading-shiny-text pointer-events-none relative z-20 text-center text-4xl font-extrabold tracking-wide"
        />
      </div>
    </div>
  )
}

export default LoadingBar
