// import { useLayoutEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// // use your own icon import if react-icons is not available
// import { GoArrowUpRight } from 'react-icons/go';

// const CardNav = ({
//   logo,
//   logoAlt = 'Logo',
//   items,
//   className = '',
//   ease = 'power3.out',
//   baseColor = '#030016',
//   menuColor,
//   buttonBgColor,
//   buttonTextColor
// }) => {
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const navRef = useRef(null);
//   const cardsRef = useRef([]);
//   const tlRef = useRef(null);

//   const calculateHeight = () => {
//     const navEl = navRef.current;
//     if (!navEl) return 260;

//     const isMobile = window.matchMedia('(max-width: 768px)').matches;
//     if (isMobile) {
//       const contentEl = navEl.querySelector('.card-nav-content');
//       if (contentEl) {
//         const wasVisible = contentEl.style.visibility;
//         const wasPointerEvents = contentEl.style.pointerEvents;
//         const wasPosition = contentEl.style.position;
//         const wasHeight = contentEl.style.height;

//         contentEl.style.visibility = 'visible';
//         contentEl.style.pointerEvents = 'auto';
//         contentEl.style.position = 'static';
//         contentEl.style.height = 'auto';

//         contentEl.offsetHeight;

//         const topBar = 60;
//         const padding = 16;
//         const contentHeight = contentEl.scrollHeight;

//         contentEl.style.visibility = wasVisible;
//         contentEl.style.pointerEvents = wasPointerEvents;
//         contentEl.style.position = wasPosition;
//         contentEl.style.height = wasHeight;

//         return topBar + contentHeight + padding;
//       }
//     }
//     return 260;
//   };

//   const createTimeline = () => {
//     const navEl = navRef.current;
//     if (!navEl) return null;

//     gsap.set(navEl, { height: 60, overflow: 'hidden' });
//     gsap.set(cardsRef.current, { y: 50, opacity: 0 });

//     const tl = gsap.timeline({ paused: true });

//     tl.to(navEl, {
//       height: calculateHeight,
//       duration: 0.4,
//       ease
//     });

//     tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

//     return tl;
//   };

//   useLayoutEffect(() => {
//     const tl = createTimeline();
//     tlRef.current = tl;

//     return () => {
//       tl?.kill();
//       tlRef.current = null;
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [ease, items]);

//   useLayoutEffect(() => {
//     const handleResize = () => {
//       if (!tlRef.current) return;

//       if (isExpanded) {
//         const newHeight = calculateHeight();
//         gsap.set(navRef.current, { height: newHeight });

//         tlRef.current.kill();
//         const newTl = createTimeline();
//         if (newTl) {
//           newTl.progress(1);
//           tlRef.current = newTl;
//         }
//       } else {
//         tlRef.current.kill();
//         const newTl = createTimeline();
//         if (newTl) {
//           tlRef.current = newTl;
//         }
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isExpanded]);

//   const toggleMenu = () => {
//     const tl = tlRef.current;
//     if (!tl) return;
//     if (!isExpanded) {
//       setIsHamburgerOpen(true);
//       setIsExpanded(true);
//       tl.play(0);
//     } else {
//       setIsHamburgerOpen(false);
//       tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
//       tl.reverse();
//     }
//   };

//   const setCardRef = i => el => {
//     if (el) cardsRef.current[i] = el;
//   };

//   return (
//     <div
//       className={`card-nav-container absolute left-1/2  bg-[#F8FAFC]/95 rounded-xl -translate-x-1/2 w-[90%] max-w-[1200px] z-[99] top-2 lg:top-[1.1em] md:top-[1em] ${className}`}
//     >
//       <nav
//         ref={navRef}
//         className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
//         style={{ backgroundColor: baseColor }}
//       >
//         <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
//           <div
//             className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
//             onClick={toggleMenu}
//             role="button"
//             aria-label={isExpanded ? 'Close menu' : 'Open menu'}
//             tabIndex={0}
//             style={{ color: menuColor || '#000' }}
//           >
//             <div
//               className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
//                 isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
//               } group-hover:opacity-75`}
//             />
//             <div
//               className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
//                 isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
//               } group-hover:opacity-75`}
//             />
//           </div>

//           <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
           
//             <h1 className='text-primary font-extrabold'>WEBTOUR</h1>
//           </div>

//           <button
//             type="button"
//             className="card-nav-cta-button hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] justify-center items-center px-4 h-full font-medium cursor-pointer transition-colors duration-300 bg-[#0b0018] text-sm outline outline-1 outline-offset-1 outline-[#7E1CFC]"
          
            
//           >
//             Get Started
//           </button>
//         </div>

//         <div
//           className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
//             isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
//           } md:flex-row md:items-end md:gap-[12px]`}
//           aria-hidden={!isExpanded}
//         >
//           {(items || []).slice(0, 3).map((item, idx) => (
//             <div
//               key={`${item.label}-${idx}`}
//               className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
//               ref={setCardRef(idx)}
//               style={{ backgroundColor: item.bgColor, color: item.textColor }}
//             >
//               <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
//                 {item.label}
//               </div>
//               <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
//                 {item.links?.map((lnk, i) => (
//                   <a
//                     key={`${lnk.label}-${i}`}
//                     className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
//                     href={lnk.href}
//                     aria-label={lnk.ariaLabel}
//                   >
//                     <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
//                     {lnk.label}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default CardNav;



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

interface NavItem {
  label: string;
  bgColor?: string;
  textColor?: string;
  links?: { label: string; href: string; ariaLabel?: string }[];
}

interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items: NavItem[];
  className?: string;
  baseColor?: string;
  menuColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  baseColor = "#030016",
  menuColor = "#000",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 bg-[#F8FAFC]/95 rounded-xl -translate-x-1/2 w-[90%] max-w-[1200px] z-[99] top-2 lg:top-[1.1em] md:top-[1em] ${className}`}
    >
      <motion.nav
        initial={{ height: 60 }}
        animate={{ height: isExpanded ? "auto" : 60 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="card-nav block p-0 rounded-xl shadow-md relative overflow-hidden"
        style={{ backgroundColor: baseColor }}
      >
        {/* Top bar */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex  items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div
            className="hamburger-menu group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none"
            onClick={toggleMenu}
            style={{ color: menuColor }}
          >
            <motion.div
              animate={{
                rotate: isExpanded ? 45 : 0,
                y: isExpanded ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="hamburger-line w-[30px] h-[2px] bg-current"
            />
            <motion.div
              animate={{
                rotate: isExpanded ? -45 : 0,
                y: isExpanded ? -4 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="hamburger-line w-[30px] h-[2px] bg-current"
            />
          </div>

          <div className="logo-container flex items-center order-1 md:order-none">
            {logo ? (
              <img src={logo} alt={logoAlt} className="h-6" />
            ) : (
              <h1 className="text-primary font-extrabold">WEBTOUR</h1>
            )}
          </div>

          <button
            type="button"
            className="card-nav-cta-button hidden md:inline-flex border-0 rounded-lg justify-center items-center px-4 py-2 font-medium cursor-pointer transition-colors duration-300 bg-primary text-sm outline outline-1 outline-offset-1 outline-[#7E1CFC]"
          >
            Get Started
          </button>
        </div>

        {/* Animated content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="nav-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="card-nav-content pt-[70px] p-2 flex flex-col items-stretch gap-2 md:flex-row md:items-end md:gap-[12px]"
            >
              {items.slice(0, 3).map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="nav-card select-none flex flex-col gap-2 p-4 rounded-lg flex-1"
                  style={{
                    backgroundColor: item.bgColor || "#FFF",
                    color: item.textColor || "#000",
                  }}
                >
                  <div className="nav-card-label text-lg md:text-xl font-semibold">
                    {item.label}
                  </div>
                  <div className="nav-card-links mt-auto flex flex-col gap-1">
                    {item.links?.map((lnk, i) => (
                      <a
                        key={i}
                        href={lnk.href}
                        className="inline-flex items-center gap-1 hover:opacity-80 text-sm md:text-base"
                        aria-label={lnk.ariaLabel}
                      >
                        <GoArrowUpRight />
                        {lnk.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default CardNav;
