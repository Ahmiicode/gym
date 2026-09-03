import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section  id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p className="
            uppercase
            tracking-[5px]
            text-sm
            text-[#d4ff00]
          ">
            Start Your Journey
          </p>

          <h2 className="
            mt-5
            text-5xl
            md:text-6xl
            font-black
            uppercase
            leading-[0.95]
            tracking-tight
            text-white
          ">
            Train With
            <br />
            Purpose.
          </h2>

          <p className="
            mt-6
            text-white/50
            leading-8
            max-w-lg
          ">
            Tell us about your goals and take the first step
            towards becoming stronger, fitter and more confident.
          </p>

          <div className="
            mt-8
            space-y-4
            text-white/70
          ">
            <p>
              <span className="text-[#d4ff00] mr-3">01</span>
              Personal Training
            </p>

            <p>
              <span className="text-[#d4ff00] mr-3">02</span>
              Custom Workout Plans
            </p>

            <p>
              <span className="text-[#d4ff00] mr-3">03</span>
              Expert Fitness Guidance
            </p>
          </div>
        </motion.div>

        {/* FORM */}

        <motion.form
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            bg-[#181818]
            border
            border-white/10
            p-8
            md:p-10
            space-y-5
          "
        >

          <div>
            <h3 className="
              text-2xl
              font-bold
              uppercase
              text-white
            ">
              Book A Free Session
            </h3>

            <p className="
              mt-2
              text-sm
              text-white/40
            ">
              Let's talk about your goals.
            </p>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              p-4
              bg-[#222222]
              border
              border-white/10
              text-white
              placeholder:text-white/30
              outline-none
              focus:border-[#d4ff00]
              transition
            "
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="
              w-full
              p-4
              bg-[#222222]
              border
              border-white/10
              text-white
              placeholder:text-white/30
              outline-none
              focus:border-[#d4ff00]
              transition
            "
          />

          <select
            className="
              w-full
              p-4
              bg-[#222222]
              border
              border-white/10
              text-white/60
              outline-none
              focus:border-[#d4ff00]
              transition
            "
          >
            <option>Select Your Goal</option>
            <option>Build Muscle</option>
            <option>Lose Weight</option>
            <option>Improve Fitness</option>
            <option>Strength Training</option>
          </select>

          <select
            className="
              w-full
              p-4
              bg-[#222222]
              border
              border-white/10
              text-white/60
              outline-none
              focus:border-[#d4ff00]
              transition
            "
          >
            <option>Preferred Training</option>
            <option>Personal Training</option>
            <option>Group Training</option>
            <option>Gym Membership</option>
          </select>

          <textarea
            placeholder="Tell us about your goal..."
            rows="4"
            className="
              w-full
              p-4
              bg-[#222222]
              border
              border-white/10
              text-white
              placeholder:text-white/30
              outline-none
              focus:border-[#d4ff00]
              transition
              resize-none
            "
          />

          <button
            type="submit"
            className="
              w-full
              py-4
              bg-[#d4ff00]
              text-black
              font-bold
              uppercase
              tracking-widest
              hover:bg-white
              transition
              duration-300
            "
          >
            Book Free Session
          </button>

        </motion.form>

      </div>
    </section>
  );
}