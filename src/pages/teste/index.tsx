import {motion} from 'framer-motion'
export default function Teste() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='-0.01 -0.01 10.02 9.02'>
      <path
        d='M 0 0 L 0 9 M 5 0 L 5 9 M 10 0 L 10 9 M 5 1 L 0 8 M 5 1 L 10 8'
        stroke='url("#pulse-1")'
        stroke-width='0.001'
        fill='none'
      />
      <defs>
        <motion.linearGradient
          animate={{
            x1: [0, 500 * 2],
            x2: [0, 500],
            y1: [479, 479 / 2],
            y2: [479 * 2, 479],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          id='pulse-1'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#8257e6' stopOpacity='0' />
          <stop stopColor='#8257e6' />
          <stop offset='1' stopColor='#f142b6' stopOpacity='0' />
        </motion.linearGradient>
      </defs>
    </svg>
  )
}
