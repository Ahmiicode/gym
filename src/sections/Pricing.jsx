import { motion } from "framer-motion";
import PricingCard from "../cards/PricingCard";

const plans = [
  {
    title: "Starter",
    price: "$29",
    features: [
      "Gym Floor Access",
      "Locker Room Access",
      "Basic Equipment",
    ],
  },

  {
    title: "Performance",
    price: "$59",
    popular: true,
    features: [
      "Unlimited Gym Access",
      "Personal Training Session",
      "Fitness Assessment",
      "Group Training Classes",
    ],
  },

  {
    title: "Elite",
    price: "$99",
    features: [
      "Unlimited Gym Access",
      "Weekly Personal Training",
      "Custom Workout Plan",
      "Nutrition Guidance",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
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
            Membership
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            Choose Your Level
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-white/50">
            Pick a membership that fits your goals and start putting in the work.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
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
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}