import { motion } from "framer-motion";
import Button from "../components/Button";

export default function CTA() {
  return (
    <section className="relative py-32 bg-[#d4ff00] overflow-hidden">

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          max-w-5xl
          mx-auto
          px-6
          text-center
          text-black
        "
      >

        <p className="
          uppercase
          tracking-[6px]
          text-sm
          font-bold
        ">
          Your Next Chapter Starts Here
        </p>

        <h2 className="
          mt-6
          text-5xl
          md:text-7xl
          font-black
          uppercase
          leading-[0.95]
          tracking-tight
        ">
          Ready To
          <br />
          Get Stronger?
        </h2>

        <p className="
          mt-7
          max-w-2xl
          mx-auto
          text-black/70
          text-lg
          leading-7
        ">
          Stop waiting for motivation. Start building the discipline,
          strength and confidence you've been looking for.
        </p>

        <div className="
          mt-10
          flex
          justify-center
        ">
          <Button>
            Start Training
          </Button>
        </div>

      </motion.div>

    </section>
  );
}