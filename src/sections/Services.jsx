import {
  Dumbbell,
  Flame,
  HeartPulse,
  Apple,
  Trophy,
  Activity,
} from "lucide-react";

import ServiceCard from "../cards/ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    title: "Strength Training",
    desc: "Build muscle, increase power and unlock your full potential with elite coaching.",
    icon: Dumbbell,
  },
  {
    title: "Fat Loss",
    desc: "Science-backed workout plans designed to burn fat efficiently.",
    icon: Flame,
  },
  {
    title: "Personal Coaching",
    desc: "1-on-1 guidance from certified fitness professionals.",
    icon: Trophy,
  },
  {
    title: "Nutrition Plans",
    desc: "Customized meal plans that support your training goals.",
    icon: Apple,
  },
  {
    title: "Cardio Training",
    desc: "Improve endurance and cardiovascular health with expert programs.",
    icon: HeartPulse,
  },
  {
    title: "Functional Fitness",
    desc: "Enhance mobility, flexibility and real-world strength.",
    icon: Activity,
  },
];

export default function Services() {
  return (
    <section className="relative bg-black py-32 text-white overflow-hidden">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-20 text-center"
        >

          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-red-400">
            OUR SERVICES
          </span>

          <h2 className="mt-8 text-6xl font-bold">
            Train Like
            <span className="text-[#E63946]"> Champions</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Premium fitness programs designed to build strength,
            improve endurance and transform your lifestyle.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
            />
          ))}

        </div>

      </div>

    </section>
  );
}