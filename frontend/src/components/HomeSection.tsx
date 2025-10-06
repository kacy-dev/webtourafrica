import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import FaqsSection from "./FaqsSection";
import FooterSection from "./FooterSection";
import RippleGrid from "./ui/RippleGrid";

export default function HomeSection() {

   const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
  
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <RippleGrid
          enableRainbow={false}
          gridColor="#fff"
          rippleIntensity={0.01}
          gridSize={8}
          gridThickness={10}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white bg-black/50">
           <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
          <h1 className="text-5xl font-bold">Welcome to Our Hero Section</h1>
          <p className="mt-4 text-lg opacity-80">
            Ripple grid background stays within 100vh.
          </p>
        </div>
      </section>
      <div>
        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veritatis laboriosam, dolor a error nisi doloribus molestias minus neque ab natus. Eveniet eos at, culpa laboriosam alias cum temporibus perspiciatis officia delectus amet nesciunt non neque officiis hic facilis iusto.</p>
      </div>
    </>
  );
}
