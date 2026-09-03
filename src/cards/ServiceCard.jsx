import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {

  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{ duration: .3 }}
      className="
      group
      rounded-[30px]
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      overflow-hidden
      relative
      "
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/0 via-[#E63946]/0 to-[#E63946]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E63946] shadow-lg">
          <Icon size={30} className="text-white" />
        </div>

        <h3 className="mt-8 text-2xl font-bold">
          {service.title}
        </h3>

        <p className="mt-5 leading-8 text-gray-400">
          {service.desc}
        </p>

        <button className="mt-10 flex items-center gap-2 font-semibold text-[#E63946]">
          Learn More

          <ArrowUpRight
            size={18}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>

      </div>

    </motion.div>
  );
}