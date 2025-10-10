import {
  ArrowRight,
  MessageSquareWarning,
  DoorOpen,
  RocketIcon,
  CodeIcon,
  StarIcon,
  CheckCircleIcon,
  CheckCheckIcon,
} from "lucide-react";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import FaqsSection from "./FaqsSection";
import FooterSection from "./FooterSection";
import RippleGrid from "./ui/RippleGrid";
import CardNav from "./ui/CardNav";
import NavbarController from "../components/ui/NavbarController";
import "../App.css";
import bgCover from "../assets/img/bg-cover.jpg";
import abImg from "../assets/img/ab-img.jpg";
// import bgCove from "../assets/img/bg-cove.jpg";

export default function HomeSection() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  const list = [
    "i am a good boy",
    "i am a good boy",
    "i am a good boy",
    "i am a good boy",
    "i am a good boy",
  ];

  const devList = [
    {
      id: 1,
      name: "Victor",
      role: "Full-stack Developer",
    },
    {
      id: 2,
      name: "Chukwuma",
      role: "Front-end Developer",
    },
    {
      id: 3,
      name: "Paschal",
      role: "Developer",
    },
    {
      id: 4,
      name: "Jasper",
      role: "Full-stack Developer",
    },
  ];

  const filteredList = devList.filter(
    (dl) => dl.role === "Full-stack Developer"
  );

  const devL = filteredList.map((dev) => (
    <li key={dev.id}>
      <p>{dev.name}</p>
      <p>{dev.role}</p>
    </li>
  ));

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="ripple-bg absolute inset-0 -z-10">
          <RippleGrid
            enableRainbow={false}
            gridColor="#7E1CFC"
            rippleIntensity={0.03}
            gridSize={4}
            gridThickness={10}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.8}
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center md:justify-end lg:justify-end lg:pb-20 z-50 text-white bg-[#030016]/95">
          <div className="fixed top-0 w-full" style={{ zIndex: 999 }}>
            <CardNav
              logo={""}
              logoAlt="Company Logo"
              items={items}
              baseColor=""
              menuColor="#fff"
              buttonBgColor="#111"
              buttonTextColor="#fff"
              ease="power3.out"
            />
            {/* <NavbarController items={navItems} /> */}
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
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
                className="lg:text-5xl text-3xl font-bold lg:max-w-[1000px] px-4 lg:pl-20"
                style={{ lineHeight: 1.2 }}
              >
                <b className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Powering Africa’s
                </b>{" "}
                Digital Growth — One Digital Solution at a Time
              </h1>
              <p className="mt-4 text-md opacity-90 px-4 lg:pl-20 max-w-[800px]">
                WebTour Africa helps businesses shine online with modern web
                design, app development, SEO, and Google Business setup. Your
                digital success starts here.
              </p>
              <div className=" lg:pl-20 px-4 mt-5 inline-flex gap-5">
                <a
                  href=""
                  className="text-s text-light text-sm outline outline-1 outline-primary hover:bg-primary duration-500 outline-offset-2 px-3 py-2 rounded-md"
                >
                  Get Started
                </a>
                <a
                  href=""
                  className="text-sm outline outline-1 outline-primary outline-offset-2 bg-primary hover:bg-transparent duration-500  text-light px-3 py-2 rounded-md"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
            <div className=" -z-10 rounded-xl relative px-4 lg:px-0">
              <img
                src={bgCover}
                alt=""
                className=" w-full h-full object-cover [clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)]"
              />
              <span className="absolute w-full h-full bg-gradient-to-l from-transparent to-[#030016]/95 top-0 [clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)]"></span>
              <div className="absolute bottom-5 left-10 flex justify-center items-center gap-2">
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
      <section className="relative -z-10 flex flex-col gap-20 justify-center items-center py-10 lg:py-20 bg-dark text-white overflow-hidden">
        <div className="text-center space-y-2">
          <span className="text-xs text-primary outline outline-1 outline-primary rounded-full py-1 px-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Features
          </span>
          <h1
            className="lg:text-5xl text-3xl font-bold max-w-[550px]"
            style={{ lineHeight: 1.2 }}
          >
            {" "}
            From Idea to Launch We{" "}
            <b className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Handle Everything
            </b>
          </h1>

          <span className="text-light opacity-50 text-sm">
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
          <div className="flex flex-col items-center space-y-1 translate-y-[-30px] md:translate-y-[-50px]  bg-dark/50 backdrop-blur-sm px-2 py-2 rounded-[100%] max-w-[200px] h-[200px] border border-1 border-primary/90 outline outline-1 outline-primary/90 outline-offset-2">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <MessageSquareWarning size={24} color={"#030016"} />
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
            <span className="text-sm mt-2">We Build</span>
          </div>

          <div className="flex flex-col items-center space-y-1 translate-y-[-30px] md:translate-y-[-50px] bg-dark /50 backdrop-blur-sm px-2 py-2 rounded-[100%] max-w-[200px] h-[200px] border border-1 border-primary/90 outline outline-1 outline-primary/90 outline-offset-2">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <CodeIcon size={24} color={"#030016"} />
            </div>
            <span className="text-sm mt-2 font-extrabold">Launch</span>
            <span className="text-xs text-center max-w-[180px] text-light">
              We design, develop, and refine your project. we turn your ideas
              into functional products
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 translate-y-[30px] md:translate-y-[50px]">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <RocketIcon size={24} />
            </div>
            <span className="text-sm mt-2">Grow</span>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center px-4 py-20 lg:px-40 md:px-20 sm:px-7 ">
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
                      <CheckCheckIcon size={13}  color="#FD3EED" />
                    </span>
                    <span className="text-light text-xs ">Quick Responses to Request</span>
                  </div>
                  <div className="bg-dark ring-1 ring-accent flex gap-2 rounded-full pl-1 pr-2 py-1 relative left-10">
                    <span className="bg-light h-5 w-5 rounded-full flex justify-center items-center">
                      <CheckCheckIcon size={13}  color="#FD3EED" />
                    </span>
                    <span className="text-light text-xs ">Quick Responses to Request</span>
                  </div>
                  <div className="bg-dark ring-1 ring-accent flex gap-2 rounded-full pl-1 pr-2 py-1">
                    <span className="bg-light h-5 w-5 rounded-full flex justify-center items-center">
                      <CheckCheckIcon size={13}  color="#FD3EED" />
                    </span>
                    <span className="text-light text-xs ">Quick Responses to Request</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs text-right text-primary outline outline-1 outline-primary rounded-full py-1 px-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Features
            </span>
            <h2 className="text-5xl font-extrabold max-w-[400px] mb-4 text-dark" style={{lineHeight: 1.3}}>
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
                <a
                  href=""
                  className="flex gap-1 items-center mt-3 text-sm bg-primary max-w-[105px] px-2 py-2 text-light rounded-sm"
                >
                  Learn more <ArrowRight size={12} />
                </a>
              </div>
              <span className="absolute -z-50 right-0 ">
                <StarIcon size={200} color={"#cccc"} />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
      {/* <section className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            About WebTour Africa
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold text-black">WebTour Africa</span>,
            we help small businesses and brands grow online by building modern,
            search-friendly websites that attract real customers. Our mission is
            simple — to make it easy for you to launch, grow, and be seen.
          </p>

          

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-lg text-primary mb-2">
                🌍 Africa-Focused
              </h4>
              <p className="text-sm text-gray-600">
                Empowering African entrepreneurs and local businesses to go
                global.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-lg text-primary mb-2">
                ⚡ Fast Launch
              </h4>
              <p className="text-sm text-gray-600">
                We deliver fully functional websites within days, not weeks.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-lg text-primary mb-2">
                💬 Support You Can Trust
              </h4>
              <p className="text-sm text-gray-600">
                Ongoing updates and guidance — we grow with your brand.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
