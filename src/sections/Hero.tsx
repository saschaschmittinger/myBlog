import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../components/Button'
import { Hexagon } from '../components/Hexagon'
import { useRef } from 'react'

export const HeroSection = () => {
  const icosahedronRef = useRef(null)
  const cubeRef = useRef(null)
  const cuboidRef = useRef(null)
  const torusRef = useRef(null)

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ['start end', 'end start'],
  })

  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45])
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45])
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [30, -45])
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [60, -45])

  return (
    <section className="py-24  md:py-72 overflow-x-clip md:mt-28 lg:mt-32">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl text-center mt-4 md:text-6xl lg:text-7xl max-w-3xl mx-auto">
          The Future is here
        </h1>
        <p className="text-center text-xl mt-6 text-zinc-400 md:text-2xl max-w-xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, placeat natus.
        </p>
        <div className="flex justify-center mt-10">
          <Button>BERATUNGSTERMIN BUCHEN</Button>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0 mt-12 ">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon
                className="size-[1800px]"
                size={1800}
                reverse
                duration={60}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full *
               left-[200px] -top-[900px] relative "
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    ease: 'linear',
                    duration: 15,
                    repeat: Infinity,
                  }}
                  className="outline outline-[6px] inset-0 rounded-full -outline-offset-[6px] outline-fuchsia-500/10 absolute border-[6px] border-transparent  border-t-fuchsia-500/30"
                />
                <motion.img
                  src="/assets/images/cube.png"
                  alt="cube"
                  className="size-[140px]"
                  style={{
                    rotate: cubeRotate,
                  }}
                  ref={cubeRef}
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full 
                outline-fuchsia-500/10 relative left-[200px] top-[270px] mt-36 ml-28"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    ease: 'linear',
                    duration: 15,
                    repeat: Infinity,
                  }}
                  className="outline outline-[6px] inset-0 rounded-full -outline-offset-[6px] outline-fuchsia-500/10 absolute border-[6px] border-transparent  border-t-fuchsia-500/30 "
                />
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="cube"
                  className="size-[140px]"
                  style={{
                    rotate: cuboidRotate,
                  }}
                  ref={cuboidRef}
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pr-14">
              <div
                className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full
              outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute -left-[600px] -top-[80px]"
              >
                <motion.img
                  src="/assets/images/torus.png"
                  alt="cube"
                  className="size-[140px]"
                  style={{
                    rotate: torusRotate,
                  }}
                  ref={torusRef}
                />
              </div>
            </div>
            <motion.div
              className="inline-flex"
              style={{
                rotate: icosahedronRotate,
              }}
              ref={icosahedronRef}
            >
              <img
                src="/assets/images/icosahedron.png"
                alt="icosahedron"
                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="3D-Image"
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full mt-12 md:mt-0 lg:mt-0">
            <motion.div
              animate={{
                translateY: 12,
                opacity: 0.2,
              }}
              transition={{
                duration: 2,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="h-3 w-1 bg-fuchsia-500 rounded-full"
            />
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  )
}
