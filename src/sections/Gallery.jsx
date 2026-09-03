import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Strength",
    text: "Build real strength with focused training and serious equipment.",
  },
  {
    number: "02",
    title: "Conditioning",
    text: "Improve your endurance, movement and overall performance.",
  },
  {
    number: "03",
    title: "Discipline",
    text: "Show up, put in the work and become stronger every day.",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="uppercase tracking-[5px] text-sm text-[#d4ff00]">
            Why Train With Us
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            No Excuses.
            <br />
            Just Progress.
          </h2>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 border-t border-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                py-10
                md:px-8
                border-b
                md:border-b-0
                md:border-r
                border-white/10
                first:md:pl-0
                last:md:border-r-0
              "
            >
              <span className="text-sm text-white/30">
                {feature.number}
              </span>

              <h3 className="mt-10 text-3xl font-bold uppercase text-white group-hover:text-[#d4ff00] transition-colors">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-xs text-white/50 leading-relaxed">
                {feature.text}
              </p>

              <div className="mt-8 w-10 h-[2px] bg-[#d4ff00] group-hover:w-20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}