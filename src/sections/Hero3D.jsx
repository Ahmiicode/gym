import { motion } from "framer-motion";
import { ArrowRight, Play, Dumbbell } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#080808] to-[#111111]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-24 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">

        {/* LEFT */}
        <div className="flex-1">

          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-5 inline-flex rounded-full border border-white/20 px-5 py-2 text-sm text-gray-300"
          >
            Premium Fitness Experience
          </motion.span>

          <motion.h1
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-6xl font-bold leading-none md:text-8xl"
          >
            Forge Your
            <br />
            <span className="text-white">
              Strength
            </span>
          </motion.h1>

          <motion.p
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-lg text-lg leading-8 text-gray-400"
          >
            Build strength, improve endurance and unlock your full
            potential with world-class trainers and premium fitness
            programs.
          </motion.p>

          <motion.div
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-5"
          >
            <button className="group flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105">
              Join Now
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button className="flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 hover:bg-white/10">
              <Play size={18} />
              Watch Video
            </button>
          </motion.div>

        </div>

        {/* CENTER IMAGE */}
        <div className="relative hidden flex-1 lg:flex justify-center">

          <motion.img
            src="/images/gym1.jpg"
            alt=""
            initial={{ opacity: 0, scale: .85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-20 h-[88vh] object-contain"
          />

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-12 left-1/2 z-30 w-[340px] -translate-x-1/2 rounded-[30px] border border-white/10 bg-white/10 p-7 backdrop-blur-xl"
          >
            <p className="text-center text-2xl font-semibold">
              Where Strength Meets
              Determination
            </p>

            <button className="mt-6 w-full rounded-full bg-white py-3 font-semibold text-black">
              Schedule Trial
            </button>
          </motion.div>

        </div> 
                {/* RIGHT CONTENT */}
        <div className="hidden flex-1 lg:flex justify-end">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-sm"
          >
            <span className="text-xs uppercase tracking-[5px] text-gray-500">
              Main Services
            </span>

            <h2 className="mt-4 text-5xl font-bold leading-tight">
              Train
              <br />
              Smarter.
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Personalized coaching, strength training, nutrition plans,
              recovery sessions and premium fitness experiences designed to
              help you become your strongest version.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-white p-3 text-black">
                    <Dumbbell size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Personal Training
                    </h3>

                    <p className="text-sm text-gray-400">
                      Elite Coaches
                    </p>
                  </div>

                </div>

                <ArrowRight size={18} />

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">

                <div>
                  <h3 className="font-semibold">
                    Nutrition Plans
                  </h3>

                  <p className="text-sm text-gray-400">
                    Custom Diet Programs
                  </p>
                </div>

                <ArrowRight size={18} />

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* LEFT FLOATING CIRCLE */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute left-10 bottom-28 hidden lg:block"
      >

        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">

          <span className="text-4xl font-light">
            +
          </span>

        </div>

        <p className="mt-4 text-center text-sm text-gray-400">
          Strength
        </p>

      </motion.div>

      {/* STATS */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex gap-10 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

        <div>
          <h3 className="text-2xl font-bold">
            12K+
          </h3>

          <p className="text-sm text-gray-400">
            Members
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            35+
          </h3>

          <p className="text-sm text-gray-400">
            Trainers
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            15
          </h3>

          <p className="text-sm text-gray-400">
            Programs
          </p>
        </div>

      </div>

      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center"
      >

        <span className="text-xs tracking-[3px] text-gray-500">
          SCROLL
        </span>

        <div className="mt-3 h-14 w-[2px] bg-white/20 overflow-hidden">

          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="h-8 bg-white"
          />

        </div>

      </motion.div>

    </section>
  );
}