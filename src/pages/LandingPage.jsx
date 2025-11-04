import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>

      <div className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] min-h-screen w-full flex justify-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-lime-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 right-20 w-40 h-40 bg-lime-400/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 border border-lime-400/20 rounded-full"
        />
      </div>

      {/* Responsive container */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-8 relative min-h-screen z-10">
        {/* Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center text-white text-sm glass border-b border-white/10 px-8 lg:px-12 py-6 rounded-b-xl"
        >
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            CampusConnect
          </span>

          <div className="flex space-x-6">
            <Link
              to="/login"
              className="hover:text-primary transition-normal font-medium relative group px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn-primary hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-16 lg:mt-28 px-4 lg:px-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white w-full lg:w-[500px] text-center lg:text-left"
          >
            <h1 className="text-3xl lg:text-[42px] font-bold leading-tight">
              Your Campus Services,<br />
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Just a Click Away
              </span>
            </h1>

            <p className="text-base lg:text-[16px] text-gray-300 mt-4 leading-relaxed">
              Connect with essential campus services instantly. From laundry to
              tutoring, everything you need in one convenient platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="btn-primary text-lg px-8 py-4 hover:scale-105"
                >
                  Get Started
                </Link>
              </motion.div>

              <Link
                to="/login"
                className="btn-secondary flex items-center gap-2 group hover:scale-105"
              >
                Browse Services
                <motion.span
                  className="text-primary"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="card-modern h-[250px] lg:h-[300px] w-full lg:w-[480px] flex items-center justify-center mt-8 lg:mt-0 relative overflow-hidden"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border border-lime-400 rounded-lg rotate-45"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border border-lime-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-lime-400 rounded-lg"></div>
            </div>

            {/* Modern illustration with icons */}
            <div className="flex items-center space-x-8 relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Laundry</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Print</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Tutor</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Popular Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-36 text-center text-white px-4"
        >
          <h2 className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Popular Services
          </h2>
          <p className="text-gray-400 text-sm lg:text-base mt-2">
            Everything you need for campus life
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:space-x-8 mt-12">
            {/* CARD */}
            {[
              {
                title: "Laundry",
                desc: "Professional wash & fold service",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Printing",
                desc: "24/7 print and copy services",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Tutoring",
                desc: "Expert academic support",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  boxShadow: "0 20px 40px rgba(184, 255, 35, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-modern w-full sm:w-[280px] h-[140px] cursor-pointer p-6 relative overflow-hidden group"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <p className="font-semibold text-white text-lg ml-3">{item.title}</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-lime-400/0 group-hover:border-lime-400/50 transition-colors duration-300"
                  initial={false}
                  animate={{ borderColor: "rgba(184, 255, 35, 0)" }}
                  whileHover={{ borderColor: "rgba(184, 255, 35, 0.5)" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-36 px-4 lg:px-10"
          id="about"
        >
          <div className="text-center text-white mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
              About CampusConnect
            </h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              Revolutionizing campus life through seamless service connections
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h3 className="text-xl lg:text-2xl font-semibold mb-6">
                Connecting Students with Essential Services
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                CampusConnect is your all-in-one platform designed to bridge the gap between students and campus service providers. We understand the challenges of university life – from managing laundry schedules to finding reliable tutoring help – and we've created a solution that makes accessing these services as simple as a few clicks.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our mission is to enhance the student experience by providing a transparent, efficient, and user-friendly marketplace where quality service providers can connect with students who need their expertise. Whether you're a busy student looking for quick laundry service or a vendor wanting to grow your campus business, CampusConnect is here to facilitate meaningful connections.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-lime-400">500+</div>
                  <div className="text-sm text-gray-400">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lime-400">50+</div>
                  <div className="text-sm text-gray-400">Service Providers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-modern p-8"
            >
              <h4 className="text-lg font-semibold text-white mb-6">Our Values</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Reliability</h5>
                    <p className="text-gray-400 text-sm">We ensure consistent, dependable service delivery across all our platforms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Innovation</h5>
                    <p className="text-gray-400 text-sm">We continuously evolve our platform to meet the changing needs of campus communities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Community</h5>
                    <p className="text-gray-400 text-sm">We foster strong relationships between students, vendors, and the broader campus ecosystem.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-36 px-4 lg:px-10"
          id="services"
        >
          <div className="text-center text-white mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              Comprehensive solutions for every aspect of campus life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Laundry Services",
                desc: "Professional wash, dry, and fold services with flexible pickup and delivery options. Available 24/7 with eco-friendly detergents and quick turnaround times.",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                ),
                features: ["24/7 Service", "Eco-friendly", "Quick Turnaround"]
              },
              {
                title: "Printing & Copying",
                desc: "High-quality printing services for documents, posters, and presentations. Color and black & white options with binding, laminating, and specialty paper choices.",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                ),
                features: ["Color Printing", "Bulk Orders", "Same-day Service"]
              },
              {
                title: "Academic Tutoring",
                desc: "Expert tutors across all subjects and grade levels. One-on-one sessions, group study help, and exam preparation with verified tutors and flexible scheduling.",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                features: ["All Subjects", "Verified Tutors", "Flexible Hours"]
              },
              {
                title: "Campus Transportation",
                desc: "Safe and reliable transportation services for getting around campus and to nearby locations. Scheduled shuttles, ride-sharing, and emergency transport options.",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                ),
                features: ["Safe Rides", "24/7 Available", "Campus Routes"]
              },
              {
                title: "Food Delivery",
                desc: "Fresh, hot meals delivered straight to your dorm or study spot. Partnered with local restaurants and campus dining services for healthy, affordable options.",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                ),
                features: ["Hot Delivery", "Healthy Options", "Quick Service"]
              },
              {
                title: "Tech Support",
                desc: "Computer repair, software troubleshooting, and device setup assistance. Certified technicians available for laptops, phones, and other electronic devices.",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h8a1 1 0 100-2H5z" clipRule="evenodd" />
                  </svg>
                ),
                features: ["Device Repair", "Software Help", "Quick Fixes"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(184, 255, 35, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                className="card-modern cursor-pointer p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="font-semibold text-white text-lg ml-3">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <span key={j} className="text-xs bg-lime-400/10 text-lime-400 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-xl border border-lime-400/0 group-hover:border-lime-400/50 transition-colors duration-300"
                  initial={false}
                  animate={{ borderColor: "rgba(184, 255, 35, 0)" }}
                  whileHover={{ borderColor: "rgba(184, 255, 35, 0.5)" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-36 px-4 lg:px-10"
          id="contact"
        >
          <div className="text-center text-white mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              Have questions? We're here to help you succeed on campus
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">support@campusconnect.edu</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">Campus Center, Building A, Room 101</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Hours</p>
                      <p className="text-gray-400">Mon-Fri: 8AM-8PM | Sat-Sun: 10AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: "Facebook", icon: "M20 10.555c0-5.556-4.444-10-10-10S0 5 0 10.555c0 5.222 3.806 9.545 8.777 10.486V13.75H6.111V10.5h2.666V8.111c0-2.666 1.555-4.111 4-4.111.889 0 1.667.066 1.889.1v2.2h-1.222c-1.111 0-1.333.556-1.333 1.333V10.5h2.666l-.444 3.25H12.11v7.291c4.972-.541 8.778-4.864 8.778-10.086z" },
                    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                    { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center hover:bg-lime-300 transition-modern"
                    >
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-xl p-8 border border-neutral-800/30"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="input-modern"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#0f0f0f] border border-neutral-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#0f0f0f] border border-neutral-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="john.doe@campus.edu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-[#0f0f0f] border border-neutral-800/50 rounded-lg text-white focus:outline-none focus:border-lime-400 transition-colors">
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Service Questions</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="input-modern resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 lg:mt-40 pb-12 w-full text-gray-500 text-sm flex justify-center items-center px-8 lg:px-12 border-t border-neutral-800/30 pt-8"
        >
          <span className="font-medium">© 2025 CampusConnect. All rights reserved.</span>
        </motion.div>
      </div>
    </div>
    </>
  );
}
