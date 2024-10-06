import { useRef } from "react";
import { Button } from "../components/Button";
import { TextButton } from "../components/TextButton";
import { motion, useScroll, useTransform } from "framer-motion";

const listItems = [
  "Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit da amet.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
];

export const FeaturesGrid = () => {
  const torusKnotRef = useRef(null);
  const hemisphereRef = useRef(null);
  const coneRef = useRef(null);
  const secondHemisphereRef = useRef(null);

  const { scrollYProgress: torusKnotScrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ["start end", "end start"],
  });
  const torusKnotTranslateY = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [100, -100]
  );
  const torusKnotRotate = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [-30, 30]
  );

  const { scrollYProgress: hemisphereScrollYProgress } = useScroll({
    target: hemisphereRef,
    offset: ["start end", "end start"],
  });
  const hemisphereTranslateY = useTransform(
    hemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );
  const hemisphereRotate = useTransform(
    hemisphereScrollYProgress,
    [0, 1],
    [30, -30]
  );

  const { scrollYProgress: secondHemispherYProgress } = useScroll({
    target: secondHemisphereRef,
    offset: ["start end", "end start"],
  });
  const secondHemisphereTranslateY = useTransform(
    secondHemispherYProgress,
    [0, 1],
    [50, -50]
  );
  const secondHemisphereRotate = useTransform(
    secondHemispherYProgress,
    [0, 1],
    [20, -15]
  );

  const { scrollYProgress: coneScrollYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });
  const coneTranslateY = useTransform(coneScrollYProgress, [0, 1], [50, -50]);
  const coneRotate = useTransform(coneScrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the Future of Blockchain
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                alias facilis eveniet blanditiis hic quasi illo ipsum
                voluptatibus.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold"> {item} </span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <Button>GET STARTED</Button>
                <TextButton>Learn More</TextButton>
              </div>
            </article>

            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <motion.img
                  src="/assets/images/torus-knot.png"
                  alt="torus-knot"
                  className="size-96 max-w-none"
                  ref={torusKnotRef}
                  style={{
                    translateY: torusKnotTranslateY,
                    rotate: torusKnotRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="hemisphere"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  ref={hemisphereRef}
                  style={{
                    translateY: hemisphereTranslateY,
                    rotate: hemisphereRotate,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0">
                <motion.img
                  src="/assets/images/cone.png"
                  alt="cone"
                  className="size-96 max-w-none rotate-12"
                  ref={coneRef}
                  style={{
                    translateY: coneTranslateY,
                    rotate: coneRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="hemisphere"
                  className="absolute top-3/4 -z-10"
                  ref={secondHemisphereRef}
                  style={{
                    translateY: secondHemisphereTranslateY,
                    rotate: secondHemisphereRotate,
                  }}
                />
              </div>
            </div>
            <article className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Wir machen den Weg frei !
              </h2>
              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis atque blanditiis dolore debitis nisi libero ipsam!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum distinctio maiores et corporis sequi labore dolorum
                  iure, sed quibusdam! Facilis laborum recusandae excepturi
                  iste, vitae, cum ducimus quis, doloribus facere sit nostrum
                  voluptatibus obcaecati tempore!
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <Button>GET STARTED</Button>
                <TextButton>Learn More</TextButton>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
