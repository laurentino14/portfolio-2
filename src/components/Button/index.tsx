import {Slot} from '@radix-ui/react-slot'
import {VariantProps, cva} from 'class-variance-authority'
import {HTMLAttributes} from 'react'

export function Button({variant, shadow, size, children, asChild}: Props) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component className={styles({variant, size, shadow})}>
      {children}
    </Component>
  )
}

const styles = cva('flex items-center justify-center  text-sm transition', {
  variants: {
    variant: {
      primary: {},
      secondary: 'bg-white hover:bg-neutral-100 text-dark',
    },
    size: {
      normal: ' py-2 px-3',
    },
    radius: {
      true: 'rounded-md',
    },
    weight: {
      medium: 'font-medium',
    },
    shadow: {
      special:
        'shadow-[-.1rem_0_10px_0_rgba(238,64,85,.3),.1rem_0_10px_0_rgba(151,71,255,.3)]',
    },
    full: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'normal',
    radius: true,
    weight: 'medium',
  },
})

interface Props
  extends VariantProps<typeof styles>,
    HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}
