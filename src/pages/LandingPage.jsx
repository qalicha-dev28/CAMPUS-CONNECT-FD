// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import ScrollProgress from "../components/interactions/ScrollProgress";
import MagneticButton from "../components/interactions/MagneticButton";
import { useAuth } from "../context/AuthContext";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "anticipate", delay: i * 0.06 },
  }),
};

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function PopularCard({ title, subtitle, i }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      whileHover={{ rotateZ: 0.6, scale: 1.015 }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-xl"
    >
      <div className="rounded-xl p-[1.5px] bg-gradient-to-b from-gray-800 to-gray-900">
        <div
          className="rounded-[10px] bg-[#1b1b1b] border border-gray-800/80 px-7 py-6 h-[110px]
                     flex flex-col justify-center transition-all duration-300
                     group-hover:border-gray-700 group-hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.65)]
                     group-hover:-translate-y-[3px]"
        >
          <div className="text-[13.5px] text-white font-medium">{title}</div>
          <div className="text-[12.5px] text-gray-500 mt-2 leading-snug">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-[#0D0D0D] text-white">
      <ScrollProgress />

      <div className="max-w-[1536px] mx-auto min-h-[1235px]">

        {/* HERO SECTION */}
        <section className="relative px-10 pt-24 pb-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center overflow-hidden">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute right-16 top-10 h-72 w-72 rounded-full bg-neon/8 blur-[120px]"
          />

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-[36px] font-extrabold leading-[1.2] tracking-tight"
            >
              Your Campus Services,
              <br /> Just a Click Away
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-gray-300 max-w-[560px] text-[15px] leading-relaxed"
            >
              Connect with essential campus services instantly. From laundry to tutoring,
              everything you need in one convenient platform.
            </motion.p>

            <motion.div variants={fadeUp} custom={2} className="mt-6 flex items-center gap-5">
              <MagneticButton>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-neon text-black font-semibold rounded-md px-5 py-[10px] text-[13.5px]
                             shadow-[0_10px_28px_-10px_rgba(184,255,35,0.55)]
                             hover:shadow-[0_16px_36px_-12px_rgba(184,255,35,0.65)]
                             transition-all"
                >
                  Get Started <FiChevronRight className="text-black" />
                </Link>
              </MagneticButton>

              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-gray-300 hover:text-neon text-[13px] transition-colors"
              >
                Browse Services <FiChevronRight />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block"
          >
            <div
              className="w-full h-[240px] rounded-2xl bg-gradient-to-b from-[#1b1b1b] to-[#161616]
                         border border-gray-800/80 flex items-center justify-center"
            >
              <div className="flex items-center gap-8">
                <div className="w-10 h-10 rounded-full bg-gray-500/85" />
                <div className="w-14 h-3 rounded bg-neon" />
                <div className="w-10 h-10 rounded-full bg-gray-500/85" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* POPULAR SERVICES */}
        <section className="px-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="text-center mb-8"
          >
            <h2 className="text-[20px] font-semibold text-gray-100">Popular Services</h2>
            <p className="text-[13px] text-gray-500">Everything you need for campus life</p>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
          >
            <PopularCard i={0} title="Laundry" subtitle="Professional wash & fold service" />
            <PopularCard i={1} title="Printing" subtitle="24/7 print and copy services" />
            <PopularCard i={2} title="Tutoring" subtitle="Expert academic support" />
          </motion.div>
        </section>

        <div className="border-t border-gray-800" />

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="px-10 py-7 text-[12px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2025 CampusConnect. All rights reserved.</div>
            <div className="flex gap-8">
              <Link to="#" className="hover:text-neon transition-colors">About</Link>
              <Link to="/services" className="hover:text-neon transition-colors">Services</Link>
              <Link to="#" className="hover:text-neon transition-colors">Contact</Link>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
