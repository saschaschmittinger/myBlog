import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/Button";
import { Hexagon } from "../components/Hexagon";
import { useRef } from "react";

{
  /*CallToAction*/
}

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section className="py-60 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} reverse duration={50} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full *
              outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute left-0 -top-[400px]"
            >
              <motion.img
                src="/assets/images/cuboid.png"
                alt="cube"
                className="size-[140px]"
                style={{
                  rotate: rotate,
                }}
              />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full *
              outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute -left-[600px] -top-[70px]"
            >
              <motion.img
                src="/assets/images/cylinder.png"
                alt="cube"
                className="size-[140px]"
                style={{
                  rotate: rotate,
                }}
              />
            </div>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to<span className="block">get started?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, fuga.
          </p>
          <div className="flex justify-center mt-12">
            <Button>GET STARTED</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
