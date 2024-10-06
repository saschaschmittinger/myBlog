import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure distinctio vitae, earum quod ea?",
    name: "Anna Wingender",
    title: "Sozialarbeiterin",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure distinctio vitae, earum quod ea?",
    name: "Lino Schriefer",
    title: "Sozialarbeiter",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iure distinctio vitae, earum quod ea?",
    name: "Lina Ketelear",
    title: "Sozialarbeiterin",
    avatarImage: "/assets/images/avatar-molly-vaughan.jpg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, testimonialIndex) => (
            <motion.blockquote
              key={testimonialIndex}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: testimonialIndex * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              className={twMerge(
                testimonialIndex === 2 && "md:hidden lg:block"
              )}
            >
              <p className="font-heading text-3xl lg:text-4xl font-black">
                &ldquo; {testimonial.text} &rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${testimonial.avatarImage})`,
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">
                      {testimonial.name}
                    </div>
                    <div className="text-zinc-400 not-italic">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
