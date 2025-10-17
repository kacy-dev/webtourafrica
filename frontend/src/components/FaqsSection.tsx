import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle  } from "lucide-react";

type Category = "google" | "web" | "app";

const faqData: Record<Category, { question: string; answer: string }[]> = {
  google: [
    {
      question: "What’s included in your Google Business Profile setup?",
      answer:
        "We create, verify, and optimize your Google Business Profile with location pin, category setup, SEO keywords, and review strategy to help customers find you easily.",
    },
    {
      question: "Is setup free?",
      answer:
        "Yes, setup is free. You only pay a small monthly maintenance fee for SEO monitoring, post updates, and managing reviews.",
    },
    {
      question: "How long until my business appears on Google Maps?",
      answer:
        "It usually takes 3–5 business days depending on Google's verification process.",
    },
  ],
  web: [
    {
      question: "Do you build responsive websites?",
      answer:
        "Yes, all our websites are 100% responsive and optimized for all devices — desktop, tablet, and mobile.",
    },
    {
      question: "Can I request content updates later?",
      answer:
        "Absolutely. We offer flexible maintenance plans that let you request updates or content changes anytime.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use React, Next.js, Tailwind CSS, and Node.js for fast, secure, and scalable web apps.",
    },
  ],
  app: [
    {
      question: "Do you build for both Android and iOS?",
      answer:
        "Yes, we build cross-platform mobile apps using React Native — one codebase for both Android and iOS.",
    },
    {
      question: "Can you integrate payments or notifications?",
      answer:
        "Of course. We integrate payment systems (Paystack, Flutterwave, Stripe) and real-time notifications using Firebase.",
    },
    {
      question: "Do you help publish the app to stores?",
      answer:
        "Yes, we handle publishing and guide you through Play Store and App Store approval.",
    },
  ],
};

export default function FaqsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("google");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = faqData[activeCategory];

  return (
    <section className="grid lg:grid-cols-2 py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-0 relative">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked <span className="text-purple-600">Questions</span>
        </motion.h2>
        <p className="text-gray-500 mt-3">
          Switch between categories to find answers tailored to your service.
        </p>

        <HelpCircle size={250} color={"#ddd"} className="absolute top-20 right-0 left-20  self-center mt-5 hidden lg:flex" />
      </div>

      <div>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {(["google", "web", "app"] as Category[]).map((cat) => (
          <motion.button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setActiveIndex(null);
            }}
            className={`px-6 py-2 rounded-full md:text-sm font-medium border transition-all ${
              activeCategory === cat
                ? "bg-primary text-white border-purple-600 shadow-md"
                : "bg-white hover:text-light border-gray-300 hover:bg-primary"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {cat === "google"
              ? "Google Profile"
              : cat === "web"
              ? "Website"
              : "Mobile App"}
          </motion.button>
        ))}
      </div>

      {/* FAQ Cards */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto space-y-4"
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-light"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left p-5 focus:outline-none"
            >
              <span className="text-sm font-medium text-gray-800">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-gray-600 text-base leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
      </div>

      {/* Category Tabs */}
    </section>
  );
}
