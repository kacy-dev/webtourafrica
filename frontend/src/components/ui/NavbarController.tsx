import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CardNav from "./CardNav";
import TabBar from "./TabBar";

const NavbarController = ({ items }) => {
  const [showTopbar, setShowTopbar] = useState(true);
  const [showTabbar, setShowTabbar] = useState(false);
  const topbarRef = useRef(null);
  const tabbarRef = useRef(null);

  useEffect(() => {
    const tlShow = gsap.timeline({ paused: true });
    tlShow.fromTo(
      tabbarRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    );

    const tlHide = gsap.timeline({ paused: true });
    tlHide.to(topbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.4,
      ease: "power3.inOut",
    });

    const handleScroll = () => {
      if (window.scrollY > 50 && showTopbar) {
        setShowTopbar(false);
        setShowTabbar(true);
        tlHide.play();
        tlShow.play();
      } else if (window.scrollY <= 50 && !showTopbar) {
        setShowTopbar(true);
        setShowTabbar(false);
        gsap.to(topbarRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
        gsap.to(tabbarRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.4,
          ease: "power3.inOut",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showTopbar]);

  return (
    <>
      <div ref={topbarRef}>
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
      </div>

      <div
        ref={tabbarRef}
        className="fixed bottom-[-100px] opacity-0 w-full z-[95]"
      >
        <TabBar />
      </div>
    </>
  );
};

export default NavbarController;
