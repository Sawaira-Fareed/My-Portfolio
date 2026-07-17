import { useEffect, useRef } from 'react'
import { animate, onScroll } from 'animejs'
import { poseImages, type GuidePose } from './poses'

interface ScrollLinkedGuideProps {
  /** The section this guide instance lives in and scroll-tracks against */
  containerSelector: string
  fromPose: GuidePose
  toPose: GuidePose
}

// Unlike GuideCharacter (which snaps to a pose on prop change), this component
// ties her pose transition AND a subtle float/scale directly to scroll
// progress through the given section — same mechanism as the anime.js
// Scroll Observer pattern: enter/leave define the scroll range, sync gives
// the "catch up smoothly" feel instead of jumping.
export default function ScrollLinkedGuide({ containerSelector, fromPose, toPose }: ScrollLinkedGuideProps) {
  const fromRef = useRef<HTMLImageElement>(null)
  const toRef = useRef<HTMLImageElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = document.querySelector(containerSelector)
    if (!container || !fromRef.current || !toRef.current || !wrapperRef.current) return

    const scrollConfig = {
      target: container,
      enter: 'bottom-=10% top',
      leave: 'top+=10% bottom',
      sync: 0.3, // smooth catch-up rather than 1:1 jump-to-scroll
    }

    // Pose morph: "to" pose fades in as you scroll through the section,
    // "from" pose fades out in lockstep — continuous, not a discrete swap.
    animate(toRef.current, {
      opacity: [0, 1],
      autoplay: onScroll(scrollConfig),
    })
    animate(fromRef.current, {
      opacity: [1, 0],
      autoplay: onScroll(scrollConfig),
    })

    // Subtle parallax float on the whole guide — she drifts slightly as you
    // scroll rather than sitting perfectly static, which is the "anime.js
    // site" liveliness that was missing.
    animate(wrapperRef.current, {
      translateY: [0, -24],
      scale: [1, 1.04],
      autoplay: onScroll(scrollConfig),
    })
  }, [containerSelector])

  return (
    <div ref={wrapperRef} className="relative w-[220px] h-[280px]">
      <img
        ref={fromRef}
        src={poseImages[fromPose]}
        alt="Portfolio AI guide"
        className="absolute inset-0 w-full h-full object-contain"
      />
      <img
        ref={toRef}
        src={poseImages[toPose]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ opacity: 0 }}
      />
    </div>
  )
}
