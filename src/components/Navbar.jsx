import { useState } from "react";
import { Menu, X, Dumbbell, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "#home" },
    { name: "Programs", path: "#programs" },
    { name: "Trainers", path: "#trainers" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50
        w-[94%]
        max-w-7xl
      "
    >
      <nav
        className="
          rounded-full
          border border-white/10
          bg-black/40
          backdrop-blur-2xl
          shadow-[0_10px_60px_rgba(0,0,0,.45)]
        "
      >
        <div className="flex items-center justify-between px-6 lg:px-8 py-4">

          {/* Logo */}

          <a href="#home" className="flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#d4ff00]
                shadow-lg
              "
            >
              <Dumbbell
                className="text-black"
                size={22}
              />
            </div>

            <div>
              <h2 className="text-xl font-black tracking-wide text-white">
                IRON
              </h2>

              <p className="
                text-[10px]
                uppercase
                tracking-[5px]
                text-gray-400
              ">
                FITNESS CLUB
              </p>
            </div>
          </a>


          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="
                  relative
                  group
                  text-gray-400
                  transition
                  hover:text-white
                "
              >
                <span>
                  {link.name}
                </span>

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    bg-[#d4ff00]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>


          {/* Desktop CTA */}

          <div className="hidden md:block">
            <a
              href="#contact"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-[#d4ff00]
                px-6
                py-3
                font-bold
                text-black
                transition
                duration-300
                hover:scale-105
                hover:bg-white
              "
            >
              Join Now

              <ArrowRight
                size={18}
                className="
                  transition
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>


          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>


        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                overflow-hidden
                md:hidden
                border-t
                border-white/10
                bg-black/90
                backdrop-blur-xl
                rounded-b-3xl
              "
            >
              <div className="
                flex
                flex-col
                px-8
                py-8
                gap-6
              ">

                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="
                      text-lg
                      text-gray-300
                      transition
                      hover:text-[#d4ff00]
                    "
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="
                    mt-4
                    rounded-full
                    bg-[#d4ff00]
                    py-4
                    text-center
                    font-bold
                    text-black
                    transition
                    hover:bg-white
                  "
                >
                  Join Now
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}