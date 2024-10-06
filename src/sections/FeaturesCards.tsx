import { twMerge } from "tailwind-merge";
import { TextButton } from "../components/TextButton";
import { useEffect, useState } from "react";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: " Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing eli nesciunt dolor eveniet quaerat aliquam Dicta",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: " Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing eli nesciunt dolor eveniet quaerat aliquam Dicta",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: " Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing eli nesciunt dolor eveniet quaerat aliquam Dicta",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: " Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing eli nesciunt dolor eveniet quaerat aliquam Dicta",
    color: "violet",
  },
];

export const FeatureCardsSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isHovered, setIsHoverd] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedCardIndex((curr) =>
        curr === cardData.length - 1 ? 0 : curr + 1
      );
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, [selectedCardIndex, isHovered]);

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          {/* Card <Div> */}
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, description, color }) => (
              <div
                className="inline-flex transition-all duration-500"
                onMouseEnter={() => setIsHoverd(true)}
                onMouseLeave={() => setIsHoverd(false)}
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
              >
                <div
                  className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group"
                  key={title}
                >
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-300 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                      color === "lime" && "bg-lime-500 group-hover:bg-lime-300",
                      color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-300",
                      color === "violet" &&
                        "bg-violet-500 group-hover:bg-violet-300"
                    )}
                  ></div>
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
                      color === "lime" && "bg-lime-500 group-hover:bg-lime-300",
                      color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-300",
                      color === "violet" &&
                        "bg-violet-500 group-hover:bg-violet-400"
                    )}
                  ></div>
                  <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img
                        src={image}
                        alt="Pill"
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">{description}</p>
                  <div className="flex justify-between mt-12 ">
                    <TextButton color={color}>Learn More</TextButton>

                    {/* SVG Arrow Icon */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* end Card <Div> */}
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {/* erstellt 4x <div></div> */}
            {cardData.map(({ title }, cardIndex) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  cardIndex === selectedCardIndex && "bg-zinc-300"
                )}
                onClick={() => setSelectedCardIndex(cardIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
