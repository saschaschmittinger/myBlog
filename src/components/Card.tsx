import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { TextButton } from './TextButton'

export const Card = (
  props: ComponentPropsWithoutRef<'div'> & {
    color?: string
    buttonText?: string
  },
) => {
  const { color, children, className, buttonText } = props

  return (
    <div className={twMerge('relative z-0 p-8 md:p-10 group', className)}>
      <div
        className={twMerge(
          'absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-300 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300',
          color === 'lime' && 'bg-lime-500 group-hover:bg-lime-300',
          color === 'cyan' && 'bg-cyan-500 group-hover:bg-cyan-300',
          color === 'violet' && 'bg-violet-500 group-hover:bg-violet-300',
        )}
      ></div>
      <div
        className={twMerge(
          'absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10',
          color === 'lime' && 'bg-lime-500 group-hover:bg-lime-300',
          color === 'cyan' && 'bg-cyan-500 group-hover:bg-cyan-300',
          color === 'violet' && 'bg-violet-500 group-hover:bg-violet-400',
        )}
      ></div>
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      <div> {children} </div>

      <div className="flex justify-between mt-12 ">
        <TextButton color={color}> {buttonText || 'Learn More'} </TextButton>

        {/* SVG Arrow Icon */}
      </div>
    </div>
  )
}
