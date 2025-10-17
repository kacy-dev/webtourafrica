// "use client";
// import { motion } from "framer-motion";
// import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

// export default function FooterSection() {
//   return (
//     <footer className="bg-gray-900 text-gray-200 py-10 px-6">
//       <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
//         {/* Brand / About */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-2xl font-bold mb-3 text-white">WebTourAfrica</h2>
//           <p className="text-sm leading-relaxed text-gray-400">
//             Empowering African businesses with modern web, app, and Google profile solutions.
//             We help you go digital and grow globally.
//           </p>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#services" className="hover:text-primary">Services</a></li>
//             <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
//             <li><a href="#projects" className="hover:text-primary">Projects</a></li>
//             <li><a href="#faq" className="hover:text-primary">FAQs</a></li>
//           </ul>
//         </motion.div>

//         {/* Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-center gap-2">
//               <Mail size={16} className="text-primary" /> info@webtourafrica.com
//             </li>
//             <li className="flex items-center gap-2">
//               <Phone size={16} className="text-primary" /> +234 813 456 7890
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin size={16} className="text-primary" /> Lagos, Nigeria
//             </li>
//           </ul>
//         </motion.div>

//         {/* Social Media */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//         >
//           <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-primary"><Facebook /></a>
//             <a href="#" className="hover:text-primary"><Twitter /></a>
//             <a href="#" className="hover:text-primary"><Instagram /></a>
//           </div>
//         </motion.div>
//       </div>

//       <motion.div
//         className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         © {new Date().getFullYear()} WebTourAfrica. All rights reserved.
//       </motion.div>
//     </footer>
//   );
// }


import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-dark to-black text-gray-300 pt-16 pb-6 overflow-hidden">
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

      <div className="relative container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">WebtourAfrica</h3>
          <p className="text-gray-400 text-sm mb-4">
              Empowering African businesses with modern web, app, and Google profile solutions. We help you go digital and grow globally.          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition text-sm">About Us</a></li>
            <li><a href="#" className="hover:text-white transition text-sm" >Services</a></li>
            <li><a href="#" className="hover:text-white transition text-sm">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition text-sm">Contact</a></li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition text-sm">Blog</a></li>
            <li><a href="#" className="hover:text-white transition text-sm">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition text-sm">Privacy Policy</a></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex items-center bg-white/10 rounded-full p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-2 text-xs text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-primary rounded-full hover:scale-105 transition"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 z-10">
        <p>&copy; {new Date().getFullYear()} WebTourAfrica. All Rights Reserved.</p>
        <div className="mt-3 flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-white transition">Cookies</a>
          <a href="#" className="hover:text-white transition">Legal</a>
          <a href="#" className="hover:text-white transition">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

