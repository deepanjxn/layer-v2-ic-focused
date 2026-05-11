'use client'

import { ElementType, RefObject, useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"

interface TimelineContentProps {
  children: React.ReactNode
  as?: ElementType
  animationNum?: number
  timelineRef?: RefObject<HTMLElement | null>
  customVariants?: Variants
  className?: string
}

export function TimelineContent({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
}: TimelineContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-5%" })

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants || defaultVariants}
      custom={animationNum}
    >
      {children}
    </motion.div>
  )
}
