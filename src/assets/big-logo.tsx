import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTime,
  useTransform,
} from 'framer-motion'
import {useRef} from 'react'

export function BigLogo() {
  const animation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
    },
  }

  const time = useTime()
  const value = useMotionValue([0, 4000])
  const rotate = useTransform(time, [0, 4000], [0, 150], {clamp: false})
  const ref = useRef(null)

  useAnimationFrame(t => {
    const y = 1 + Math.sin(t / 1000) * 25
    ref.current.style.transform = `translateY(${-y}px) translateX(${y}px)`
  })
  return (
    <motion.svg
      ref={ref}
      width='507'
      height='480'
      viewBox='-50 -50 657 710'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <motion.path
        variants={animation}
        initial='hidden'
        animate='show'
        transition={{
          type: 'spring',
          duration: '.1s',
        }}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M180.75 38.006L218.756 0H7.6012C3.40317 0 0 3.40317 0 7.6012V76.772H38.006V38.006H180.75ZM507 190.632L468.994 152.626V38.006H302.228V0H499.399C503.597 0 507 3.40317 507 7.6012V190.632ZM0 472.035V304.559L38.006 342.565V441.63H82.8531V479.636H7.60119C3.40316 479.636 0 476.233 0 472.035ZM507 472.035V296.147H468.994V441.63H398.053L360.047 479.636H499.399C503.597 479.636 507 476.233 507 472.035Z'
        fill='#EEEEEE'
      />
      <motion.path
        variants={animation}
        initial='hidden'
        animate='show'
        transition={{
          delay: 0.5,
          type: 'spring',
          duration: '.1s',
        }}
        d='M245.311 331.156H340.348V379.402H187.083V95.539H245.311V331.156Z'
        fill='#EEEEEE'
      />
    </motion.svg>
  )
}