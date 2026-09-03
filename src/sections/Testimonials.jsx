import { motion } from "framer-motion";

const reviews = [
  {
    name: "Daniel Carter",
    role: "Member",
    text: "The environment keeps me motivated. Great equipment, serious trainers and a solid community.",
  },
  {
    name: "James Wilson",
    role: "Member",
    text: "I joined to get stronger and ended up completely changing my lifestyle. Best decision I made.",
  },
  {
    name: "Michael Brooks",
    role: "Member",
    text: "The trainers actually care about your progress. Every session feels productive and challenging.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-sm text-[#d4ff00]">
            Member Stories
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            Built By The Grind
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-white/50">
            Real people. Real effort. Real results.
          </p>
        </motion.div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                border
                border-white/10
                bg-[#171717]
                p-8
                transition-all
                duration-300
                hover:border-[#d4ff00]/40
              "
            >

              {/* Number */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/30">
                  0{index + 1}
                </span>

                <span className="text-[#d4ff00] text-sm">
                  ★★★★★
                </span>
              </div>

              {/* Review */}
              <p className="mt-10 text-lg text-white/70 leading-8">
                “{review.text}”
              </p>

              {/* Member */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold uppercase text-white">
                  {review.name}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[3px] text-[#d4ff00]">
                  {review.role}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}