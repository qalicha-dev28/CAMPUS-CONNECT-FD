import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

// Motion presets
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.08 * i },
  }),
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

function PopularCard({ title, subtitle, i }) {
  return (
    <motion.button
      custom={i}
      variants={fadeUp}
      className="bg-[#1b1b1b] border border-gray-800 rounded-[8px] w-full sm:w-[300px] h-[96px] px-6 py-4 text-left
                 transition-all will-change-transform
                 hover:border-gray-700 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]
                 hover:-translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
    >
      <div className="text-[13px] text-white">{title}</div>
      <div className="text-[12px] text-gray-500 mt-2 leading-snug">{subtitle}</div>
    </motion.button>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-[#0D0D0D] text-white">
      {/* Constrain to Figma frame */}
      <div className="max-w-[1536px] mx-auto min-h-[1235px]">
        {/* HERO */}
        <section className="relative px-6 pt-16 pb-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden">
          {/* Soft neon glow in the background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute right-10 top-8 h-64 w-64 rounded-full bg-neon/10 blur-[90px]"
          />

          {/* Left: text block */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-[36px] md:text-[36px] font-extrabold leading-[1.2]"
            >
              Your Campus Services,
              <br /> Just a Click Away
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-gray-300 max-w-[520px] text-[14px] leading-relaxed"
            >
              Connect with essential campus services instantly. From laundry to
              tutoring, everything you need in one convenient platform.
            </motion.p>

            <motion.div variants={fadeUp} custom={2} className="mt-4 flex items-center gap-4">
              <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-[#B8FF23] text-black font-semibold rounded-[6px] px-4 py-[8px] text-[12.5px]
                             shadow-[0_8px_24px_-8px_rgba(184,255,35,0.45)]
                             hover:shadow-[0_12px_28px_-10px_rgba(184,255,35,0.55)]
                             focus:outline-none focus:ring-2 focus:ring-neon/70 focus:ring-offset-2 focus:ring-offset-dark transition-all"
                >
                  Get Started <FiChevronRight className="text-black" />
                </Link>
              </motion.span>

              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-gray-300 hover:text-[#B8FF23] text-[12.5px] transition-colors"
              >
                Browse Services <FiChevronRight />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: illustration card with gentle float */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-[220px] rounded-[12px] bg-[#1b1b1b] border border-gray-800 flex items-center justify-center"
            >
              <div className="flex items-center gap-7">
                <div className="w-9 h-9 rounded-full bg-gray-500" />
                <div className="w-12 h-3 rounded bg-[#B8FF23]" />
                <div className="w-9 h-9 rounded-full bg-gray-500" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Popular Services */}
        <section className="px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-6"
          >
            <h2 className="text-[18px] font-semibold text-gray-100">Popular Services</h2>
            <p className="text-[12px] text-gray-500">Everything you need for campus life</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <PopularCard i={0} title="Laundry"  subtitle="Professional wash & fold service" />
            <PopularCard i={1} title="Printing" subtitle="24/7 print and copy services" />
            <PopularCard i={2} title="Tutoring" subtitle="Expert academic support" />
          </motion.div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="px-6 py-6 text-[11px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2025 CampusConnect. All rights reserved.</div>
            <div className="flex gap-8">
              <Link to="#" className="hover:text-[#B8FF23] transition-colors">About</Link>
              <Link to="/services" className="hover:text-[#B8FF23] transition-colors">Services</Link>
              <Link to="#" className="hover:text-[#B8FF23] transition-colors">Contact</Link>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
