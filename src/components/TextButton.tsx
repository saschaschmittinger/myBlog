import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const TextButton = (
  props: ComponentPropsWithoutRef<'button'> & { color?: string },
) => {
  const { className, children, color } = props
  return (
    <button
      className={twMerge(
        'text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500 group-hover:text-fuchsia-300',
        color === 'lime' && 'text-lime-500 group-hover:text-lime-300',
        color === 'cyan' && 'text-cyan-500 group-hover:text-cyan-300',
        color === 'violet' && 'text-violet-500 group-hover:text-violet-300',
        className,
      )}
    >
      {children}
    </button>
  )
}
