"use client";
// import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  MessageSquareWarning,
  DoorOpen,
  RocketIcon,
  CodeIcon,
  StarIcon,
  CheckCheckIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import Navbar from "./Navbar";
// import AboutSection from "./AboutSection";
import FaqsSection from "./FaqsSection";
import FooterSection from "./FooterSection";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./ui/CTASection";
import RippleGrid from "./ui/RippleGrid";
import CardNav from "./ui/CardNav";
// import NavbarController from "../components/ui/NavbarController";
import PricingCards from "./ui/PricingCards";
import "../App.css";
import bgCover from "../assets/img/bg-cover.jpg";
import abImg from "../assets/img/ab-img.jpg";
import whyUs from "../assets/img/why-us.jpg";
// import bgCove from "../assets/img/bg-cove.jpg";

export default function HomeSection() {
  const navigate = useNavigate();


  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#about", ariaLabel: "About Company" }
        // { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#projects", ariaLabel: "Featured Projects" }

        // { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", href: "#contact", ariaLabel: "Email us" }
        // { label: "Twitter", ariaLabel: "Twitter" },
        // { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];


  const projects = [
    {
      id: 1,
      title: "TourLink – Smart Booking Platform",
      description:
        "A modern travel booking app built with React and Node.js, allowing users to explore destinations, view experiences, and book directly. Integrated with live map and payment gateway.",
      category: "Web Development / TravelTech",
      tagline: "Plan. Book. Explore — all in one place.",
      image: whyUs,
    },
    {
      id: 2,
      title: "GoAfrica Adventures",
      description:
        "A visual identity and landing page design for a tour company promoting African safaris and cultural trips. Focused on vibrant imagery and smooth navigation.",
      category: "Branding & UI Design",
      tagline: "Where culture meets adventure.",
      image: whyUs,
    },
    {
      id: 3,
      title: "StayLocal Hotels",
      description:
        "A hotel booking system that connects travelers to affordable stays across Africa. Built with Next.js, MongoDB, and Tailwind CSS.",
      category: "Full Stack Development",
      tagline: "Find comfort, anywhere you go.",
      image: whyUs,
    },
    {
      id: 4,
      title: "EcoTrips – Sustainable Tourism",
      description:
        "Designed an eco-friendly travel planner app that helps users discover low-carbon destinations and track their travel footprints",
      category: "Mobile App Design",
      tagline: "Travel better. Go greener.",
      image: whyUs,
    },
  ];



  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="ripple-bg card-bg  absolute inset-0 -z-10">
          <RippleGrid
            // enableRainbow={false}
            // gridColor="#7E1CFC"
            // rippleIntensity={0.01}
            // gridSize={8}
            // gridThickness={10}
            // mouseInteraction={true}
            // mouseInteractionRadius={1.2}
            // opacity={0.8}
          />
        </div>

        <div className="absolute inset-0 flex flex-col bg-dark justify-center md:justify-end lg:justify-end pt-[100px] lg:pt-0 lg:pb-20 z-50 text-white ">
          <div className="fixed top-0 w-full" style={{ zIndex: 999 }}>
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

          <div className="flex flex-col lg:flex-row gap-5 h-screen ">
            <div className="flex flex-col items-left lg:justify-end ">
              <div className="lg:pl-20 px-4 my-3">
                <a
                  href=""
                  className=" flex items-center gap-1 max-w-[230px] px-4 text-xs rounded-full py-1 outline outline-1 outline-offset-1 outline-[#7E1CFC] bg-gradient-to-r from-[#FD3EED] to-[#7E1CFC] bg-clip-text text-transparent"
                >
                  New Features added this month
                  <ArrowRight size={15} color={"#fff"} />
                </a>
              </div>
              <h1
                className="lg:text-5xl text-3xl  font-bold lg:max-w-[1000px] px-4 lg:pl-20 text-light"
                style={{ lineHeight: 1.2 }}
              >
                <b className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Powering Africa’s
                </b>{" "}
                Digital Growth — One Digital Solution at a Time
              </h1>
              <p className="mt-4 text-sm text-light lg:text-md opacity-90 px-4 py-3 lg:pt-0 lg:pl-20 max-w-[800px]">
                WebTour Africa helps businesses shine online with modern web
                design, app development, SEO, and Google Business setup. Your
                digital success starts here.
              </p>
              <div className=" lg:pl-20 px-4 mt-5 inline-flex gap-5">
                <a
                  href=""
                  className="text-sm outline outline-1 outline-primary outline-offset-2 bg-primary hover:bg-transparent hover:text-dark duration-500  text-light px-3 py-2 rounded-md"
                >
                  Get Started
                </a>
                <a
                  href=""
                  className="text-sm outline outline-1 outline-primary outline-offset-2 bg-primary hover:bg-transparent hover:text-dark duration-500  text-light px-3 py-2 rounded-md"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
            <div className=" -z-10 rounded-xl relative px-4 pt-5 lg:pt-0 lg:px-0">
              <img
                src={bgCover}
                alt=""
                className=" w-full h-full object-cover lg:[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] rounded-md"
              />
              <span className="absolute w-full h-full bg-gradient-to-l from-transparent to-dark/95 top-0 rounded-md lg:[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)]"></span>
              <div className="absolute bottom-5 left-0 right-0 lg:left-10 flex justify-center items-center gap-2">
                <div className="bg-primary py-2 px-2 rounded-full">
                  <MessageSquareWarning size={18} />
                </div>
                <span className=" lg:w-[120px] w-[100px] h-[1px] border border-1 border-primary border-dashed"></span>
                <div className="bg-primary py-2 px-2 rounded-full">
                  <DoorOpen size={18} />
                </div>
                <span className=" lg:w-[120px] w-[100px] h-[1px] border border-1 border-primary border-dashed"></span>
                <div className="bg-primary py-2 px-2 rounded-full">
                  <RocketIcon size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="" > */}
      <section className="relative flex flex-col gap-20 justify-center items-center py-10 lg:py-20 bg-light text-white overflow-hidden">
        <div className="text-center space-y-2">
          <span className="text-xs text-primary outline outline-1 outline-primary rounded-full py-1 px-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Features
          </span>
          <h1
            className="text-3xl md:text-4xl font-bold max-w-[550px] text-dark"
            style={{ lineHeight: 1.2 }}
          >
            {" "}
            From Idea to Launch We{" "}
            <b className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Handle Everything
            </b>
          </h1>

          <span className="text-dark opacity-70 text-sm">
            Let’s bring your digital dream to life, step by step.
          </span>
        </div>

        <svg
          className="absolute top-1/2 left-0 w-full h-[200px] -translate-y-1/2 pointer-events-none"
          viewBox="0 0 1200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C150,0 350,300 600,150 C850,0 1050,300 1200,100"
            stroke="#7E1CFC"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="animate-[dash_8s_linear_infinite]"
          />
        </svg>

        <div className="relative z-10 flex flex-wrap justify-between gap-x-16 gap-y-16 w-full px-6 max-w-6xl">
          <div className="flex flex-col items-center space-y-1 translate-y-[-30px] md:translate-y-[-50px] shadow-2xl text-dark backdrop-blur-sm px-2 py-2 rounded-full max-w-[200px] h-[200px] border border-1 border-primary/90 outline outline-1 outline-primary/90 outline-offset-2">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <MessageSquareWarning size={24} color={"#fff"} />
            </div>
            <span className="text-sm mt-2 font-extrabold">Message Us</span>
            <span className="text-xs text-center max-w-[180px]">
              Tell us what you have in mind. Whether it’s a website, Our team
              will listen and help you shape it into something real.
            </span>
          </div>

          <div className="flex flex-col items-center right-0 space-y-2 translate-y-[30px] md:translate-y-[50px]">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <DoorOpen size={24} />
            </div>
            <span className="text-sm mt-2 text-dark">We Build</span>
          </div>

          <div className="flex flex-col items-center space-y-1 shadow-2xl translate-y-[-30px] md:translate-y-[-50px] backdrop-blur-sm px-2 py-2 rounded-[100%] text-dark max-w-[200px] h-[200px] border border-1 border-primary/90 outline outline-1 outline-primary/90 outline-offset-2">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <CodeIcon size={24} color={"#fff"} />
            </div>
            <span className="text-sm mt-2 font-extrabold">Launch</span>
            <span className="text-xs text-center max-w-[180px] text-dark">
              We design, develop, and refine your project. we turn your ideas
              into functional products
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 translate-y-[30px] md:translate-y-[50px]">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <RocketIcon size={24} />
            </div>
            <span className="text-sm mt-2 text-dark">Grow</span>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center px-4 py-40 lg:px-40 md:px-20 sm:px-7 ">
          <div className="relative">
            <span className="-z-10 absolute -left-20 -top-20">
              <RocketIcon size={200} color="#cccc" />
            </span>
            <div className="relative">
              <img
                src={abImg}
                className="w-full h-full lg:w-[450px] lg:h-[350px] rounded-sm"
                alt="about section image"
              />
              <div className="absolute bottom-10 left-10">
                <div className="relative flex flex-col gap-2">
                  <div className="bg-dark ring-1 ring-accent flex gap-2 rounded-full pl-1 pr-2 py-1">
                    <span className="bg-light h-5 w-5 rounded-full flex justify-center items-center">
                      <CheckCheckIcon size={13} color="#FD3EED" />
                    </span>
                    <span className="text-light text-xs ">
                      Empowering African entrepreneurs
                    </span>
                  </div>
                  <div className="bg-dark ring-1 ring-accent flex gap-2 rounded-full pl-1 pr-2 py-1 relative left-10">
                    <span className="bg-light h-5 w-5 rounded-full flex justify-center items-center">
                      <CheckCheckIcon size={13} color="#FD3EED" />
                    </span>
                    <span className="text-light text-xs ">
                      Support You Can Trust
                    </span>
                  </div>
                  <div className="bg-dark ring-1 ring-accent flex gap-2 rounded-full pl-1 pr-2 py-1">
                    <span className="bg-light h-5 w-5 rounded-full flex justify-center items-center">
                      <CheckCheckIcon size={13} color="#FD3EED" />
                    </span>
                    <span className="text-light text-xs ">
                      We grow with your brand
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 lg:pt-0 ">
            <span className="text-xs text-right text-primary outline outline-1 outline-primary rounded-full py-1 px-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              About WebtourAfrica
            </span>
            <h2
              className="text-right lg:text-left text-3xl md:text-4xl font-bold mt-2 max-w-[350px] mb-4 text-dark"
              style={{ lineHeight: 1.3 }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                WebTour
              </span>{" "}
              Africa
            </h2>
            <div className="relative">
              <div className="absolute">
                <p className="">
                  At{" "}
                  <span className="font-semibold text-black">
                    WebTour Africa
                  </span>
                  , we help small businesses and brands grow online by building
                  modern, search-friendly websites that attract real customers.
                  Our mission is simple — to make it easy for you to launch,
                  grow, and be seen.
                </p>
                <button
                  onClick={() => navigate("/about")}
                  className="flex gap-1 items-center mt-3 text-sm bg-primary max-w-[105px] px-2 py-2 text-light rounded-sm"
                >
                  Learn more <ArrowRight size={12} />
                </button>
              </div>
              <span className="absolute -z-50 right-0 ">
                <StarIcon size={200} color={"#cccc"} />
              </span>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-20 py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
            <h2
              className="text-4xl font-extrabold mb-4 text-dark"
              style={{ lineHeight: 1.3 }}
            >
              Why Webtour For{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Business Growth
              </span>{" "}
            </h2>
            <p className="">
              At{" "}
              <span className="font-semibold text-black">WebTour Africa</span>,
              we help small businesses and brands grow online by building
              modern, search-friendly websites that attract real customers. Our
              mission is simple — to make it easy for you to launch, grow, and
              be seen.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col justify-between mt-4 gap-5">
            <div className="bg-gray-100 px-3 py-2 rounded-xl">
              <h2>More Insights</h2>
              <div className="flex justify-between items-center px-2 bg-dark py-3 rounded-sm mt-2 w-[100%] lg:w-[350px] my-5">
                <span className="text-light text-sm">Business Analysis</span>
                <span>
                  <CheckCheckIcon size={15} color="#fff" />
                </span>
              </div>
              <div className="flex justify-between items-center px-2 bg-light py-3 rounded-md shadow-sm mt-2 w-[100%] lg:w-[350px] my-5">
                <span className="text-dark text-sm">Strategy Planning</span>
                <span>
                  <CheckCheckIcon size={15} color="#030016" />
                </span>
              </div>
              <div className="flex justify-between items-center px-2 bg-light py-3 rounded-md shadow-sm mt-2 w-[100%] lg:w-[350px] my-5">
                <span className="text-dark text-sm">Business Consulting</span>
                <span>
                  <CheckCheckIcon size={15} color="#030016" />
                </span>
              </div>
              <div className="flex justify-between items-center px-2 bg-light py-3 rounded-md shadow-sm mt-2 w-[100%] lg:w-[350px] my-5">
                <span className="text-dark text-sm">Marketing Strategy</span>
                <span>
                  <CheckCheckIcon size={15} color="#030016" />
                </span>
              </div>
              <div className="flex justify-between items-center px-2 bg-light py-3 rounded-md shadow-sm mt-2 w-[100%] lg:w-[350px] my-5">
                <span className="text-dark text-sm">Experince Design</span>
                <span>
                  <CheckCheckIcon size={15} color="#030016" />
                </span>
              </div>
              <div className="flex justify-between items-center px-2 bg-light py-3 rounded-md shadow-sm mt-2 w-[100%] lg:w-[350px] my-5">
                <span className="text-dark text-sm">Audit & Evaluation</span>
                <span>
                  <CheckCheckIcon size={15} color="#030016" />
                </span>
              </div>
              <div className="flex justify-between items-center px-2 bg-light py-3 rounded-md shadow-sm mt-2 w-[100%] lg:w-[350px] my-5">
                <span className="text-dark text-sm">Leads Generation</span>
                <span>
                  <CheckCheckIcon size={15} color="#030016" />
                </span>
              </div>
            </div>
            <div>
              <img
                src={whyUs}
                className="lg:w-[750px] lg:h-[500px] w-[100%] h-[100%] rounded-sm brightness-90"
                alt="why us image"
              />
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-20 md:px-10 sm:px-4">
          <div className="flex justify-between items">
            <span className="text-xs text-right text-primary outline outline-1 outline-primary rounded-full py-1 px-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              We Provide Amazing Web Solutions
            </span>
            <a
              href="/services"
              className="text-xs outline outline-1 outline-dark flex items-center px-2 py-1 rounded-full"
            >
              Service Details <ArrowRight size={13} />
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 pb-40">
            <div className="flex gap-2 outline outline-1 outline-dark/10 px-2 py-4 rounded-md shadow-xl inset-5">
              <span>01.</span>
              <span className="text-sm">Web Development</span>
            </div>
            <StarIcon color="#cccc" />
            <div className="flex gap-2 outline outline-1 outline-dark/10 px-2 py-4 rounded-md shadow-xl">
              <span>02.</span>
              <span className="text-sm">Application Development</span>
            </div>
            <StarIcon color="#cccc" />
            <div className="flex gap-2 outline outline-1 outline-dark/10 px-2 py-4 rounded-md shadow-xl">
              <span>03.</span>
              <span className="text-sm">Design & Branding</span>
            </div>
            <StarIcon color="#cccc" />
            <div className="flex gap-2 outline outline-1 outline-dark/10 px-2 py-4 rounded-md shadow-xl">
              <span>04.</span>
              <span>Frontend Development</span>
            </div>
            <StarIcon color="#cccc" />
            <div className="flex gap-2 outline outline-1 outline-dark/10 px-2 py-4 rounded-md shadow-xl">
              <span>05.</span>
              <span className="text-sm">Backend Development</span>
            </div>
            <StarIcon color="#cccc" />
            <div className="flex gap-2 outline outline-1 outline-dark/10 px-2 py-4 rounded-md shadow-xl">
              <span>06.</span>
              <span className="text-sm">MVP Development</span>
            </div>
            <StarIcon color="#cccc" />
            <div className="flex gap-2 outline outline-1 outline-dark/10 px-2 py-4 rounded-md shadow-xl">
              <span>07.</span>
              <span className="text-sm">Search Engine Optimization</span>
            </div>
            <StarIcon color="#cccc" />
            <div className="flex gap-2 outline outline-1 outline-dark/10 px-2 py-4 rounded-md shadow-xl ">
              <span>08.</span>
              <span className="text-sm">Google Business Profile Setup</span>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-light px-4 lg:px-20 md:px-4 sm:px-4 py-20">
        <span className="absolute bottom-0 left-0 right-0 top-0">
            <RocketIcon size={200} color="#cccc" />
        </span>
        <span className="absolute top-[200px] right-0">
            <DoorOpen size={200} color="#cccc" />
        </span>
        <div className="relative text-white">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wide text-primary outline outline-1 outline-primary rounded-full py-1 px-4">
              Our Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-dark">
              See What We’ve{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Built
              </span>
            </h2>
            <p className="text-light opacity-70 mt-2 max-w-2xl mx-auto">
              From travel brands to digital service platforms, we’ve helped
              ideas grow into real experiences that connect with people.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-3 bg-gradient-to-r bg-gray-100  shadow-xl py-2 px-2 rounded-md"
            >
              <div className="relative">
                <img
                  src={project.image}
                  className="lg:w-[300px] lg:h-[200px] brightness-60 rounded-md"
                />
              </div>
              <div className="shadow-xl px-2 py-1 rounded-md bg-light relative">
                <h3 className="font-bold mb-3">{project.title}</h3>
                <p className="text-sm mb-3">{project.description}</p>
                <a href="" className="text-xs bg-primary flex items-center text-light gap-1 px-2 py-1 max-w-[100px] rounded-md">View Details <ArrowRight size={13} /></a>
                <a href="" className="absolute right-0 top-0 bg-transparent outline outline-1 outline-primary px-1 py-1 flex items-center rounded-full"><ArrowUpRightIcon size={12} color="#000" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <PricingCards />
      </section>

    <section>
      <TestimonialSection />
    </section>

    <section>
      <FaqsSection />
    </section>
      
    <section>
      <CTASection />
    </section>

    <section>
      <FooterSection />
    </section>
    </>
  );
}
