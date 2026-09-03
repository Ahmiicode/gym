import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white pt-20">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-4
          gap-10
          pb-16
        "
      >

        {/* Brand */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="
            text-4xl
            font-black
            uppercase
            tracking-tight
            text-[#d4ff00]
          ">
            IRON<span className="text-white">LAB</span>
          </h2>

          <p className="
            mt-5
            text-white/40
            leading-7
            max-w-xs
          ">
            A training space built for people who are
            ready to work harder, move better and get stronger.
          </p>

          <div className="flex gap-4 mt-6">

            <div className="
              w-10 h-10
              border border-white/20
              flex items-center justify-center
              text-sm
              text-white/60
              hover:border-[#d4ff00]
              hover:text-[#d4ff00]
              transition
              cursor-pointer
            ">
              f
            </div>

            <div className="
              w-10 h-10
              border border-white/20
              flex items-center justify-center
              text-sm
              text-white/60
              hover:border-[#d4ff00]
              hover:text-[#d4ff00]
              transition
              cursor-pointer
            ">
              ig
            </div>

            <div className="
              w-10 h-10
              border border-white/20
              flex items-center justify-center
              text-sm
              text-white/60
              hover:border-[#d4ff00]
              hover:text-[#d4ff00]
              transition
              cursor-pointer
            ">
              in
            </div>

          </div>
        </motion.div>


        {/* Quick Links */}

        <div>
          <h3 className="
            text-sm
            uppercase
            tracking-[4px]
            text-[#d4ff00]
          ">
            Explore
          </h3>

          <ul className="
            mt-6
            space-y-4
            text-white/50
          ">
            <li className="hover:text-white transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-white transition cursor-pointer">
              About
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Programs
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Membership
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>


        {/* Training */}

        <div>
          <h3 className="
            text-sm
            uppercase
            tracking-[4px]
            text-[#d4ff00]
          ">
            Training
          </h3>

          <ul className="
            mt-6
            space-y-4
            text-white/50
          ">
            <li>Strength Training</li>
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Conditioning</li>
            <li>Mobility</li>
          </ul>
        </div>


        {/* Contact */}

        <div>
          <h3 className="
            text-sm
            uppercase
            tracking-[4px]
            text-[#d4ff00]
          ">
            Find Us
          </h3>

          <ul className="
            mt-6
            space-y-4
            text-white/50
          ">
            <li>📍 24 Fitness Avenue</li>
            <li>📞 +1 234 567 890</li>
            <li>✉ hello@ironlab.com</li>
            <li>🕒 Mon - Sat · 6AM - 10PM</li>
          </ul>
        </div>

      </div>


      {/* Bottom */}

      <div
        className="
          border-t
          border-white/10
          py-6
          text-center
          text-white/30
          text-sm
        "
      >
        © 2026 IRONLAB. Train Hard. Stay Consistent.
      </div>

    </footer>
  );
}