import { motion } from "framer-motion";
import {
  CheckCircle,
  Dumbbell,
  HeartPulse,
  Trophy,
} from "lucide-react";

const features = [
  "Certified Personal Trainers",
  "Modern Fitness Equipment",
  "Personal Nutrition Plans",
  "Open 24/7 For Members",
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/images/gym1.jpg"
            alt=""
            className="h-[650px] w-full rounded-[40px] object-cover"
          />

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -right-8 bottom-10 rounded-[30px]
            border border-white/10
            bg-white/10
            p-8
            backdrop-blur-xl"
          >
            <Trophy className="mb-4 text-[#E63946]" size={34} />

            <h3 className="text-5xl font-bold">
              12+
            </h3>

            <p className="mt-2 text-gray-400">
              Years Of Excellence
            </p>
          </motion.div>

          {/* Small Card */}

          <div
            className="absolute -left-5 top-12
            rounded-3xl
            border border-white/10
            bg-black/60
            p-6
            backdrop-blur-xl"
          >
            <HeartPulse
              size={30}
              className="text-[#E63946]"
            />

            <h4 className="mt-3 text-xl font-semibold">
              Healthy Lifestyle
            </h4>
          </div>

        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-red-400">
            About Us
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
            Build Your
            <br />
            Strongest
            <span className="text-[#E63946]">
              {" "}Version
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            We believe fitness is more than lifting weights.
            It's about building confidence, discipline and a
            healthier lifestyle through expert coaching and
            premium training experiences.
          </p>

          <div className="mt-10 space-y-5">

            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle
                  className="text-[#E63946]"
                  size={22}
                />

                <span className="text-lg">
                  {item}
                </span>
              </div>
            ))}

          </div>

          <div className="mt-12 flex flex-wrap gap-5">

            <button
              className="rounded-full bg-[#E63946]
              px-8 py-4 font-semibold
              transition hover:scale-105"
            >
              Join Membership
            </button>

            <button
              className="rounded-full border border-white/10
              px-8 py-4 font-semibold
              hover:bg-white/10"
            >
              Learn More
            </button>

          </div>          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-5xl font-bold text-[#E63946]">
                20K+
              </h3>

              <p className="mt-3 text-gray-400">
                Active Members
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-5xl font-bold text-[#E63946]">
                35+
              </h3>

              <p className="mt-3 text-gray-400">
                Expert Trainers
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-5xl font-bold text-[#E63946]">
                15+
              </h3>

              <p className="mt-3 text-gray-400">
                Fitness Programs
              </p>
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Bottom Cards */}

      <div className="relative mx-auto mt-24 grid max-w-7xl gap-8 px-6 md:grid-cols-3">

        <motion.div
          whileHover={{ y: -10 }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E63946]">
            <Dumbbell className="text-white" size={28} />
          </div>

          <h3 className="mt-8 text-2xl font-bold">
            Premium Equipment
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            Train with world-class machines and performance equipment
            designed for strength, endurance and functional fitness.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E63946]">
            <HeartPulse className="text-white" size={28} />
          </div>

          <h3 className="mt-8 text-2xl font-bold">
            Healthy Lifestyle
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            Our coaches help you develop healthy habits, improve
            nutrition and maintain long-term fitness results.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E63946]">
            <Trophy className="text-white" size={28} />
          </div>

          <h3 className="mt-8 text-2xl font-bold">
            Proven Results
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            Thousands of members have transformed their bodies through
            our coaching, training plans and supportive community.
          </p>
        </motion.div>

      </div>

    </section>
  );
}