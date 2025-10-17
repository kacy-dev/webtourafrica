import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-light overflow-hidden py-20  text-white">
      {/* subtle animated background overlay */}
      <motion.div
        className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative bg-white border mx-4 lg:mx-auto border-1 border-dark/10 py-6 rounded-xl z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl  font-bold mb-4 leading-tight text-dark">
            Ready to <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Grow Your Business</span> Online?
          </h2>
          <p className="text-sm lg:text-md text-dark/50 max-w-2xl mx-auto mb-8">
            Let’s set up your online presence — from Google Business Profiles to
            stunning websites and mobile apps that drive real customers.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <motion.a
              href="#pricing"
              className="flex items-center gap-2 bg-primary text-light font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl  transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Rocket className="w-5 h-5" />
              Get Started
            </motion.a>

            <motion.a
              href="#contact"
              className="flex items-center gap-2 border border-dark/50 text-dark font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
