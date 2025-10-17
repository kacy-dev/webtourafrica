"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CardNav from "./ui/CardNav";

const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Company", href: "#about", ariaLabel: "About Company" },
      // { label: "Careers", ariaLabel: "About Careers" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Featured", href: "#projects", ariaLabel: "Featured Projects" },

      // { label: "Case Studies", ariaLabel: "Project Case Studies" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", href: "#contact", ariaLabel: "Email us" },
      // { label: "Twitter", ariaLabel: "Twitter" },
      // { label: "LinkedIn", ariaLabel: "LinkedIn" },
    ],
  },
];

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="fixed top-0 w-full text-light" style={{ zIndex: 999 }}>
        <CardNav
          logo={""}
          logoAlt="Company Logo"
          items={items}
          baseColor=""
          menuColor="#030016"
          // buttonBgColor="#111"
          // buttonTextColor="#fff"
          // ease="power3.out"
        />
        {/* <NavbarController items={navItems} /> */}
      </div>
      <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-dark/80 via-dark to-dark/80 text-white overflow-hidden px-4 pt-20 md:pt-0 md:px-12">
        {/* Background Accent Circles */}
        <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-light/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          >
            Who We Are & What Drives Us
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-gray-300 max-w-2xl mx-auto mb-8"
          >
            At{" "}
            <span className="text-primary font-semibold">WebTour Africa</span>,
            we blend creativity, innovation, and strategy to build digital
            experiences that empower brands across the globe. Our story is one
            of growth, vision, and relentless pursuit of excellence.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className=""
          >
            <div className="  bg-dark flex flex-col lg:flex-row md:flex-row sm:flex-row justify-between items-center my-10 py-8 rounded-xl">
              <div className=" w-full flex flex-col lg:flex-row mt-7 lg:mt-0  gap-3 justify-center items-center">
                <Handshake className="w-10 h-10 text-primary bg-primary/10 px-2 py-2 rounded-full " />
                <div className=" text-center md:text-center sm:text-center lg:text-left">
                  <p className="text-2xl md:text-4xl font-extrabold">250+</p>
                  <p className="text-sm">Partner With Us</p>
                  
                </div>
              </div>
              <span className="w-0 h-0 lg:w-0.5 lg:h-20 mx-5 bg-neutral-700 invisible lg:visible "></span>
              <div className=" w-full flex flex-col lg:flex-row mt-7 lg:mt-0 gap-3 justify-center items-center">
                <TrendingUp className="w-10 h-10 text-primary bg-primary/10 px-2 py-2 rounded-full " />
                <div className=" text-center md:text-center sm:text-center lg:text-left">
                   <p className="text-2xl md:text-4xl font-extrabold">$250+</p>
                  <p className="text-sm">Cumulative Branding Volume</p>
                </div>
              </div>
              <span className="w-0 h-0 lg:w-0.5 lg:h-20 mx-5 bg-neutral-700 invisible lg:visible "></span>
              <div className=" w-full flex flex-col lg:flex-row mt-7 lg:mt-0  gap-3 justify-center items-center">
                <CheckCircle className="w-10 h-10 text-primary bg-primary/10 px-2 py-2 rounded-full " />
                <div className=" text-center md:text-center sm:text-center lg:text-left">
                   <p className="text-2xl md:text-4xl font-extrabold">50+</p>
                  <p className="text-sm">Successful Projects</p>
                </div>
              </div>{" "}
            </div>
          </motion.div>
        </div>

        {/* Floating Shape Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <svg
            className="absolute w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0L0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>
      </section>
      <button className="bg-accent" onClick={() => navigate("/service")}>
        Go to service
      </button>
    </div>
  );
}
