// import React, { useState } from "react";

// const PricingCards = () => {
//   const [activeTab, setActiveTab] = useState("google");

//   const pricingData = {
//     google: [
//       {
//         title: "Basic Plan",
//         price: "₦15,000",
//         features: [
//           "Google business profile setup",
//           "SEO optimization",
//           "Shop location + image uploads",
//         ],
//       },
//       {
//         title: "Standard Plan",
//         price: "₦25,000",
//         features: [
//           "Everything in Basic",
//           "Video upload + stronger SEO",
//           "Starter review setup",
//         ],
//       },
//       {
//         title: "Premium Plan",
//         price: "₦35,000",
//         features: [
//           "Everything in Standard",
//           "WhatsApp integration",
//           "3-months free image updates",
//         ],
//       },

//        {
//         title: "Premium Pro",
//         price: "₦50,000",
//         features: [
//           "Everything in Premium",
//           "Full Google Maps integration",
//           "Performance monitoring + insights",
//         ],
//       },
//     ],

//     web: [
//       {
//         title: "Starter Website",
//         price: "₦50,000",
//         features: [
//           "1–3 pages website",
//           "Responsive design",
//           "SEO-ready structure",
//         ],
//       },
//       {
//         title: "Business Website",
//         price: "₦100,000",
//         features: [
//           "Up to 6 pages",
//           "Custom UI + blog section",
//           "Google Analytics integration",
//         ],
//       },
//       {
//         title: "E-Commerce Website",
//         price: "₦150,000",
//         features: [
//           "Product management system",
//           "Payment gateway setup",
//           "Admin dashboard",
//         ],
//       },
//        {
//         title: "Premium Pro Website",
//         price: "₦250,000",
//         features: [
//           "Everything in E-Commerce",
//           "Live chat + support integration",
//           "1-year maintenance & updates",
//         ],
//       },

//     ],

//     app: [
//       {
//         title: "Starter App",
//         price: "₦120,000",
//         features: [
//           "1-screen React Native app",
//           "Basic navigation",
//           "Launch-ready for Android",
//         ],
//       },
//       {
//         title: "Standard App",
//         price: "₦250,000",
//         features: [
//           "Multi-screen app",
//           "API integration",
//           "Custom UI/UX",
//         ],
//       },
//       {
//         title: "Premium App",
//         price: "₦400,000+",
//         features: [
//           "Full-featured mobile app",
//           "Authentication + database",
//           "Play Store + App Store launch",
//         ],
//       },
//       {
//         title: "Premium Pro App",
//         price: "₦600,000+",
//         features: [
//           "Advanced analytics dashboard",
//           "Cloud backend integration",
//           "Free 2-month support & updates",
//         ],
//       },
//     ],
//   };

//   return (
//     <section className="py-16 bg-dark text-white flex flex-col items-center">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           Our <span className="text-primary">Pricing Plans</span>
//         </h2>
//         <p className="text-light opacity-70">
//           Choose a category below to see our tailored pricing.
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         {[
//           { id: "google", label: "Google Business Setup" },
//           { id: "web", label: "Website" },
//           { id: "app", label: "Mobile App" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
//               activeTab === tab.id
//                 ? "bg-primary text-white shadow-lg"
//                 : "bg-transparent border border-primary text-primary hover:bg-primary/20"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div className="grid md:grid-cols-4 gap-4 max-w-7xl">
//         {pricingData[activeTab].map((plan, index) => (
//           <div
//             key={index}
//             className="bg-dark/40 border border-primary/40 p-6 rounded-2xl shadow-md hover:shadow-primary/40 transition-all"
//           >
//             <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
//             <p className="text-3xl font-bold text-primary mb-4">
//               {plan.price}
//             </p>
//             <ul className="space-y-2 text-light opacity-90 mb-6">
//               {plan.features.map((f, i) => (
//                 <li key={i}>• {f}</li>
//               ))}
//             </ul>
//             <button className="w-full py-2 bg-primary text-dark font-semibold rounded-full hover:bg-primary/90">
//               Choose Plan
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PricingCards;

// import React, { useState } from "react";
// import {
//   Globe,
//   Smartphone,
//   Building,
//   Rocket,
//   CheckCircle,
//   DollarSign,
//   PoundSterling,
//   Euro,
//   CircleDollarSign,
// } from "lucide-react";

// const PricingCards = () => {
//   const [activeTab, setActiveTab] = useState("google");
//   const [currency, setCurrency] = useState("NGN");

//   // Currency rates (example approximation)
//   const exchangeRates = {
//     NGN: 1,
//     USD: 1 / 1600,
//     GBP: 1 / 2000,
//     EUR: 1 / 1700,
//   };

//   const symbols: Record<string, string> = {
//     NGN: "₦",
//     USD: "$",
//     GBP: "£",
//     EUR: "€",
//   };

//   // Base prices in Naira
//   const pricingData = {
//     web: [
//       { title: "Basic Website", price: 15000, icon: <Globe className="w-8 h-8 text-blue-500" />, features: ["1-page website", "SEO optimization", "Contact form"] },
//       { title: "Standard Website", price: 25000, icon: <Globe className="w-8 h-8 text-green-500" />, features: ["Up to 5 pages", "Responsive design", "Gallery section"] },
//       { title: "Premium Website", price: 35000, icon: <Rocket className="w-8 h-8 text-purple-500" />, features: ["10+ pages", "Blog + Admin panel", "Domain & hosting help"] },
//       { title: "Pro Website", price: 50000, icon: <CheckCircle className="w-8 h-8 text-yellow-500" />, features: ["Custom CMS", "Full SEO", "Maintenance support"] },
//     ],
//     google: [
//       { title: "Basic Google Profile", price: 15000, icon: <Building className="w-8 h-8 text-blue-500" />, features: ["Profile creation", "Business name + location"] },
//       { title: "Standard Google Profile", price: 25000, icon: <Building className="w-8 h-8 text-green-500" />, features: ["Photos upload", "SEO tags", "Review setup"] },
//       { title: "Premium Google Profile", price: 35000, icon: <Rocket className="w-8 h-8 text-purple-500" />, features: ["Video upload", "SEO boost", "3 months image updates"] },
//       { title: "Pro Google Profile", price: 50000, icon: <CheckCircle className="w-8 h-8 text-yellow-500" />, features: ["Full optimization", "Google Ads setup", "Ongoing support"] },
//     ],
//     app: [
//       { title: "Basic App", price: 30000, icon: <Smartphone className="w-8 h-8 text-blue-500" />, features: ["App design", "1 feature module", "Basic testing"] },
//       { title: "Standard App", price: 50000, icon: <Smartphone className="w-8 h-8 text-green-500" />, features: ["2–3 features", "API integration", "Play Store support"] },
//       { title: "Premium App", price: 80000, icon: <Rocket className="w-8 h-8 text-purple-500" />, features: ["Custom UI/UX", "Backend integration", "Advanced analytics"] },
//       { title: "Pro App", price: 120000, icon: <CheckCircle className="w-8 h-8 text-yellow-500" />, features: ["Full-stack app", "Admin panel", "Long-term maintenance"] },
//     ],
//   };

//   const currentPlans = pricingData[activeTab];

//   const convertPrice = (price: number) => {
//     const rate = exchangeRates[currency];
//     return (price * rate).toFixed(2);
//   };

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold mb-2 text-gray-800">
//           Affordable <span className="text-blue-600">Pricing Plans</span>
//         </h2>
//         <p className="text-gray-500 mb-10">
//           Choose a plan that suits your business — from Google setups to websites and apps.
//         </p>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {["google", "web", "app"].map((tab) => (
//             <button
//               key={tab}
//               className={`px-5 py-2 rounded-full font-medium capitalize transition ${
//                 activeTab === tab
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab} Setup
//             </button>
//           ))}
//         </div>

//         {/* Currency Switcher */}
//         <div className="flex justify-center gap-3 mb-12">
//           {[
//             { code: "NGN", icon: <CircleDollarSign className="w-4 h-4" /> },
//             { code: "USD", icon: <DollarSign className="w-4 h-4" /> },
//             { code: "GBP", icon: <PoundSterling className="w-4 h-4" /> },
//             { code: "EUR", icon: <Euro className="w-4 h-4" /> },
//           ].map((curr) => (
//             <button
//               key={curr.code}
//               onClick={() => setCurrency(curr.code)}
//               className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full border transition ${
//                 currency === curr.code
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               {curr.icon}
//               {curr.code}
//             </button>
//           ))}
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-4 gap-6">
//           {currentPlans.map((plan, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex justify-center mb-4">{plan.icon}</div>
//               <h3 className="text-lg font-semibold text-gray-800">{plan.title}</h3>
//               <p className="text-2xl font-bold text-blue-600 my-3">
//                 {symbols[currency]}
//                 {convertPrice(plan.price)}
//               </p>
//               <ul className="text-sm text-gray-600 mb-4 text-left">
//                 {plan.features.map((f, j) => (
//                   <li key={j} className="mb-1">
//                     • {f}
//                   </li>
//                 ))}
//               </ul>
//               <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
//                 Get Started
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingCards;

// import React, { useState } from "react";
// import {
//   Globe,
//   Smartphone,
//   Building,
//   Rocket,
//   CheckCircle,
// } from "lucide-react";

// // Flag emojis for simplicity (can later replace with SVGs)
// const countries = [
//   { name: "Nigeria", flag: "🇳🇬" },
//   { name: "USA", flag: "🇺🇸" },
//   { name: "UK", flag: "🇬🇧" },
//   { name: "Canada", flag: "🇨🇦" },
//   { name: "Germany", flag: "🇩🇪" },
// ];

// const currencies = [
//   { code: "NGN", symbol: "₦" },
//   { code: "USD", symbol: "$" },
//   { code: "GBP", symbol: "£" },
//   { code: "EUR", symbol: "€" },
//   { code: "CAD", symbol: "C$" },
// ];

// const PricingCards = () => {
//   const [activeTab, setActiveTab] = useState("google");
//   const [country, setCountry] = useState("Nigeria");
//   const [currency, setCurrency] = useState("NGN");

//   // Static conversion rates relative to NGN
//   const exchangeRates = {
//     NGN: 1,
//     USD: 1 / 1600,
//     GBP: 1 / 2000,
//     EUR: 1 / 1700,
//     CAD: 1 / 1200,
//   };

//   const pricingData = {
//     web: [
//       {
//         title: "Basic Website",
//         price: 15000,
//         icon: <Globe className="w-8 h-8 text-blue-500" />,
//         features: ["1-page website", "SEO optimization", "Contact form"],
//       },
//       {
//         title: "Standard Website",
//         price: 25000,
//         icon: <Globe className="w-8 h-8 text-green-500" />,
//         features: ["Up to 5 pages", "Responsive design", "Gallery section"],
//       },
//       {
//         title: "Premium Website",
//         price: 35000,
//         icon: <Rocket className="w-8 h-8 text-purple-500" />,
//         features: ["10+ pages", "Blog + Admin panel", "Domain & hosting help"],
//       },
//       {
//         title: "Pro Website",
//         price: 50000,
//         icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
//         features: ["Custom CMS", "Full SEO", "Maintenance support"],
//       },
//     ],
//     google: [
//       {
//         title: "Basic Google Profile",
//         price: 15000,
//         icon: <Building className="w-8 h-8 text-blue-500" />,
//         features: ["Profile creation", "Business name + location"],
//       },
//       {
//         title: "Standard Google Profile",
//         price: 25000,
//         icon: <Building className="w-8 h-8 text-green-500" />,
//         features: ["Photos upload", "SEO tags", "Review setup"],
//       },
//       {
//         title: "Premium Google Profile",
//         price: 35000,
//         icon: <Rocket className="w-8 h-8 text-purple-500" />,
//         features: ["Video upload", "SEO boost", "3 months image updates"],
//       },
//       {
//         title: "Pro Google Profile",
//         price: 50000,
//         icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
//         features: ["Full optimization", "Google Ads setup", "Ongoing support"],
//       },
//     ],
//     app: [
//       {
//         title: "Basic App",
//         price: 30000,
//         icon: <Smartphone className="w-8 h-8 text-blue-500" />,
//         features: ["App design", "1 feature module", "Basic testing"],
//       },
//       {
//         title: "Standard App",
//         price: 50000,
//         icon: <Smartphone className="w-8 h-8 text-green-500" />,
//         features: ["2–3 features", "API integration", "Play Store support"],
//       },
//       {
//         title: "Premium App",
//         price: 80000,
//         icon: <Rocket className="w-8 h-8 text-purple-500" />,
//         features: ["Custom UI/UX", "Backend integration", "Advanced analytics"],
//       },
//       {
//         title: "Pro App",
//         price: 120000,
//         icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
//         features: ["Full-stack app", "Admin panel", "Long-term maintenance"],
//       },
//     ],
//   };

//   const currentPlans = pricingData[activeTab];
//   const rate = exchangeRates[currency];
//   const selectedSymbol =
//     currencies.find((c) => c.code === currency)?.symbol || "₦";

//   const convertPrice = (price: number) => (price * rate).toFixed(2);

//   return (
//     <section className="py-20 bg-gray-50 text-gray-800">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Section Title */}
//         <h2 className="text-3xl font-bold mb-2">
//           Choose Your Plan —{" "}
//           <span className="text-blue-600">Made For Everyone</span>
//         </h2>
//         <p className="text-gray-500 mb-10">
//           Transparent pricing, no surprises. Choose your country and preferred
//           currency.
//         </p>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {["google", "web", "app"].map((tab) => (
//             <button
//               key={tab}
//               className={`px-5 py-2 rounded-full font-medium capitalize transition ${
//                 activeTab === tab
//                   ? "bg-blue-600 text-white shadow-lg"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab} Setup
//             </button>
//           ))}
//         </div>

//         {/* Selectors */}
//         <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
//           {/* Country Selector */}
//           <div className="flex flex-col items-start">
//             <label className="text-sm font-semibold text-gray-700 mb-2">
//               🌍 Select Country
//             </label>
//             <select
//               className="px-5 py-2 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//             >
//               {countries.map((c) => (
//                 <option key={c.name} value={c.name}>
//                   {c.flag} {c.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Currency Selector */}
//           <div className="flex flex-col items-start">
//             <label className="text-sm font-semibold text-gray-700 mb-2">
//               💱 Currency
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {currencies.map((cur) => (
//                 <button
//                   key={cur.code}
//                   onClick={() => setCurrency(cur.code)}
//                   className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
//                     currency === cur.code
//                       ? "bg-blue-600 text-white border-blue-600 shadow"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {cur.symbol} {cur.code}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-4 gap-6">
//           {currentPlans.map((plan, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
//             >
//               <div className="flex justify-center mb-4">{plan.icon}</div>
//               <h3 className="text-lg font-semibold">{plan.title}</h3>
//               <p className="text-2xl font-bold text-blue-600 my-3">
//                 {selectedSymbol}
//                 {convertPrice(plan.price)}
//               </p>
//               <ul className="text-sm text-gray-600 mb-4 text-left">
//                 {plan.features.map((f, j) => (
//                   <li key={j} className="mb-1">
//                     • {f}
//                   </li>
//                 ))}
//               </ul>
//               <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
//                 Get Started
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingCards;

// import React, { useEffect, useState } from "react";
// import {
//   Globe,
//   Smartphone,
//   Building,
//   Rocket,
//   CheckCircle,
// } from "lucide-react";

// // Define Plan type
// type Plan = {
//   name: string;
//   description: string;
//   features: string[];
//   basePrice: number; // in base local unit (e.g. NGN) or your internal reference
// };

// // Plans for each service
// const servicePlans: Record<"google" | "web" | "app", Plan[]> = {
//   google: [
//     {
//       name: "Basic",
//       description: "Essential Google Business setup to get you started",
//       basePrice: 15000,
//       features: ["Business profile creation", "Basic SEO tags", "Map listing"],
//     },
//     {
//       name: "Standard",
//       description: "Add media & optimize for more reach",
//       basePrice: 25000,
//       features: [
//         "Everything in Basic",
//         "Photo & video upload",
//         "Category optimization",
//         "Review request setup",
//       ],
//     },
//     {
//       name: "Premium",
//       description: "Complete management + insights",
//       basePrice: 35000,
//       features: [
//         "Everything in Standard",
//         "Monthly posting",
//         "Analytics & insights",
//         "SEO improvements",
//       ],
//     },
//     {
//       name: "Pro",
//       description: "All features + marketing boost",
//       basePrice: 50000,
//       features: [
//         "Everything in Premium",
//         "Ad campaign assistance",
//         "Priority support",
//         "Competitor analysis",
//       ],
//     },
//   ],
//   web: [
//     {
//       name: "Basic",
//       description: "Simple 1–3 page responsive website",
//       basePrice: 30000,
//       features: ["Responsive layout", "Basic SEO", "Contact form"],
//     },
//     {
//       name: "Standard",
//       description: "Up to 5–7 pages with CMS",
//       basePrice: 50000,
//       features: ["Everything in Basic", "CMS integration", "Gallery, blog"],
//     },
//     {
//       name: "Premium",
//       description: "Professional site for growing brands",
//       basePrice: 80000,
//       features: [
//         "Everything in Standard",
//         "Custom UI/UX",
//         "Analytics, performance boost",
//         "Ongoing optimizations",
//       ],
//     },
//     {
//       name: "Pro",
//       description: "Full-featured site + marketing tools",
//       basePrice: 120000,
//       features: [
//         "Everything in Premium",
//         "E-commerce setup",
//         "Email marketing tools",
//         "1 year maintenance",
//       ],
//     },
//   ],
//   app: [
//     {
//       name: "Basic",
//       description: "Simple app MVP (3 screens)",
//       basePrice: 70000,
//       features: ["iOS & Android", "Basic navigation", "Push notifications"],
//     },
//     {
//       name: "Standard",
//       description: "More screens + API integration",
//       basePrice: 120000,
//       features: [
//         "Everything in Basic",
//         "5 screens",
//         "Social login",
//         "Backend endpoints",
//       ],
//     },
//     {
//       name: "Premium",
//       description: "Advanced features, analytics, etc.",
//       basePrice: 180000,
//       features: [
//         "Everything in Standard",
//         "Payment integration",
//         "Analytics & dashboard",
//         "Custom features",
//       ],
//     },
//     {
//       name: "Pro",
//       description: "Enterprise-level full app suite",
//       basePrice: 250000,
//       features: [
//         "Everything in Premium",
//         "Full backend & admin panel",
//         "Priority support",
//         "App store launch assistance",
//       ],
//     },
//   ],
// };

// const countryMultiplier: Record<string, number> = {
//   Nigeria: 1.0,
//   "United States": 1.3,
//   "United Kingdom": 1.25,
//   Germany: 1.4,
//   Canada: 1.2,
// };

// const currencySymbols: Record<string, string> = {
//   NGN: "₦",
//   USD: "$",
//   GBP: "£",
//   EUR: "€",
//   CAD: "C$",
// };

// export default function PricingCards() {
//   const [selectedService, setSelectedService] = useState<"google" | "web" | "app">("google");
//   const [country, setCountry] = useState<string>("Nigeria");
//   const [currency, setCurrency] = useState<string>("NGN");
//   const [rates, setRates] = useState<Record<string, number>>({});

//   useEffect(() => {
//     const fetchRates = async () => {
//       try {
//         const resp = await fetch("https://open.er-api.com/v6/latest/USD");
//         const data = await resp.json();
//         if (data && data.rates) {
//           setRates(data.rates);
//         } else {
//           console.warn("Exchange rate API returned no rates:", data);
//         }
//       } catch (err) {
//         console.error("Failed fetching exchange rates:", err);
//       }
//     };
//     fetchRates();
//   }, []);

//   useEffect(() => {
//   }, [country]);

//   const plans = servicePlans[selectedService];
//   const multiplier = countryMultiplier[country] ?? 1;

//   const convert = (base: number) => {
//     const localized = base * multiplier;
//     if (currency === "NGN") {
//       return localized.toFixed(2);
//     }
//     const rate = rates[currency];
//     const rateUSD = rates["USD"] ?? 1;
//     if (rate && rateUSD) {
//       const converted = (localized * (rate / rateUSD));
//       return converted.toFixed(2);
//     }
//     // Fallback
//     return localized.toFixed(2);
//   };

//   const recommendedIdx = 2;

//   return (
//     <section className="py-20 bg-gray-50 text-gray-800">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-4">Flexible Pricing You Can Trust</h2>
//         <p className="text-gray-500 mb-8 text-center">
//           Select service, country, and currency — we calculate fair pricing dynamically.
//         </p>

//         {/* Service Tabs */}
//         <div className="flex justify-center gap-4 mb-8">
//           {["google", "web", "app"].map((s) => (
//             <button
//               key={s}
//               onClick={() => setSelectedService(s as any)}
//               className={`px-5 py-2 rounded-full transition ${
//                 selectedService === s
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {s.charAt(0).toUpperCase() + s.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Country & Currency Selectors */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           <select
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             className="px-4 py-2 border rounded-lg shadow-sm"
//           >
//             {Object.keys(countryMultiplier).map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>

//           <select
//             value={currency}
//             onChange={(e) => setCurrency(e.target.value)}
//             className="px-4 py-2 border rounded-lg shadow-sm"
//           >
//             {Object.keys(currencySymbols).map((cur) => (
//               <option key={cur} value={cur}>
//                 {currencySymbols[cur]} {cur}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Plan Cards */}
//         <div className="grid md:grid-cols-4 gap-6">
//           {plans.map((plan, idx) => {
//             const isRecommended = idx === recommendedIdx;
//             return (
//               <div
//                 key={idx}
//                 className={`bg-white rounded-2xl shadow p-6 transition transform hover:-translate-y-1 ${
//                   isRecommended ? "border-2 border-blue-600 scale-105" : ""
//                 }`}
//               >
//                 <div className="flex items-center gap-2 mb-2">
//                   <CheckCircle size={20} className="text-blue-600" />
//                   <h3 className="text-xl font-semibold">{plan.name}</h3>
//                 </div>
//                 <p className="text-gray-500 mb-2 text-sm">{plan.description}</p>
//                 <p className="text-3xl font-bold text-blue-600 mb-4">
//                   {currencySymbols[currency]} {convert(plan.basePrice)}
//                 </p>
//                 <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1">
//                   {plan.features.map((feat, fidx) => (
//                     <li key={fidx} className="text-sm">{feat}</li>
//                   ))}
//                 </ul>
//                 <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
//                   Choose Plan
//                 </button>
//                 {isRecommended && (
//                   <div className="text-sm text-center mt-2 text-blue-700">
//                     Recommended
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  Monitor,
  MapPin,
  Smartphone,
  Star,
  Award,
  Rocket,
  Check,
} from "lucide-react";

interface Plan {
  name: string;
  priceUSD: number;
  priceNGN: number;
  priceGBP: number;
  priceEUR: number;
  features: string[];
  icon: React.ReactNode;
  recommended?: boolean;
}

interface CountryRate {
  name: string;
  currency: string;
  rateToUSD: number;
  symbol: string;
}

const countries: CountryRate[] = [
  { name: "Nigeria", currency: "NGN", rateToUSD: 1 / 0.0026, symbol: "₦" },
  { name: "United States", currency: "USD", rateToUSD: 1, symbol: "$" },
  { name: "United Kingdom", currency: "GBP", rateToUSD: 0.81, symbol: "£" },
  { name: "Eurozone", currency: "EUR", rateToUSD: 0.92, symbol: "€" },
];

const services = ["Web", "Google Profile", "App"];

const plansData: Record<string, Plan[]> = {
  Web: [
    {
      name: "Free",
      priceUSD: 0,
      priceNGN: 0,
      priceGBP: 0,
      priceEUR: 0,
      features: ["Basic template", "1 page", "Limited support"],
      icon: <Monitor size={32} />,
    },
    {
      name: "Basic",
      priceUSD: 100,
      priceNGN: 46000,
      priceGBP: 81,
      priceEUR: 92,
      features: ["3 pages", "Responsive design", "Email support"],
      icon: <Monitor size={32} />,
    },
    {
      name: "Pro",
      priceUSD: 250,
      priceNGN: 115000,
      priceGBP: 203,
      priceEUR: 230,
      features: ["10 pages", "Custom design", "Priority support", "SEO"],
      icon: <Star size={32} />,
      recommended: true,
    },
    {
      name: "Premium",
      priceUSD: 500,
      priceNGN: 230000,
      priceGBP: 406,
      priceEUR: 460,
      features: [
        "Unlimited pages",
        "Custom features",
        "Dedicated support",
        "SEO + Marketing",
      ],
      icon: <Award size={32} />,
    },
  ],
  "Google Profile": [
    {
      name: "Mini Setup",
      priceUSD: 6.5,
      priceNGN: 5000,
      priceGBP: 6,
      priceEUR: 7,
      features: ["Google Business Profile Setup"],
      icon: <MapPin size={32} />,
    },
    {
      name: "Maintenance Basic",
      priceUSD: 15,
      priceNGN: 10000,
      priceGBP: 12,
      priceEUR: 14,
      features: ["Monthly updates", "Business posts"],
      icon: <Rocket size={32} />,
    },
    {
      name: "Maintenance Pro",
      priceUSD: 25,
      priceNGN: 15500,
      priceGBP: 20,
      priceEUR: 23,
      features: ["Weekly updates", "Post management", "Reviews support"],
      icon: <Check size={32} />,
      recommended: true,
    },
    {
      name: "Maintenance Premium",
      priceUSD: 50,
      priceNGN: 30000,
      priceGBP: 41,
      priceEUR: 46,
      features: [
        "Daily updates",
        "Full profile management",
        "Marketing guidance",
        "Review optimization",
      ],
      icon: <Award size={32} />,
    },
  ],
  App: [
    {
      name: "Free",
      priceUSD: 0,
      priceNGN: 0,
      priceGBP: 0,
      priceEUR: 0,
      features: ["Prototype only"],
      icon: <Smartphone size={32} />,
    },
    {
      name: "Basic",
      priceUSD: 200,
      priceNGN: 92000,
      priceGBP: 162,
      priceEUR: 184,
      features: ["Basic app", "iOS & Android", "Limited support"],
      icon: <Smartphone size={32} />,
    },
    {
      name: "Pro",
      priceUSD: 400,
      priceNGN: 184000,
      priceGBP: 325,
      priceEUR: 368,
      features: ["Full app", "Custom features", "Priority support"],
      icon: <Rocket size={32} />,
      recommended: true,
    },
    {
      name: "Premium",
      priceUSD: 800,
      priceNGN: 368000,
      priceGBP: 650,
      priceEUR: 736,
      features: [
        "Enterprise app",
        "Full customization",
        "Marketing & Analytics",
        "Dedicated support",
      ],
      icon: <Award size={32} />,
    },
  ],
};

export default function PricingSection() {
  const [activeService, setActiveService] = useState("Google Profile");
  const [currency, setCurrency] = useState<"USD" | "NGN" | "GBP" | "EUR">(
    "USD"
  );
  const [country, setCountry] = useState<CountryRate>(countries[1]); 

  const handleServiceClick = (service: string) => setActiveService(service);

  const handleCurrencyChange = (cur: "USD" | "NGN" | "GBP" | "EUR") =>
    setCurrency(cur);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find((c) => c.name === e.target.value);
    if (selected) {
      setCountry(selected);
      setCurrency(selected.currency as "USD" | "NGN" | "GBP" | "EUR");
    }
  };

  const formatPrice = (plan: Plan) => {
    let price = plan[`price${currency}` as keyof Plan] as number;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="text-center flex flex-col justify-center items-center mb-8">
          <span className="text-xs text-primary outline outline-1 outline-primary rounded-full py-1 px-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Features
          </span>
          <h1
            className="text-3xl md:text-4xl font-bold my-2 max-w-2xl font-bold text-dark"
            style={{ lineHeight: 1.2 }}
          >
            {" "}
            Choose your tailored Plan & {" "}
            <b className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                We Handle Everything
            </b>
          </h1>

          <span className="text-dark opacity-70 text-sm">
            Let’s bring your digital dream to life, step by step.
          </span>
        </div>

        <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
          <select
            className="px-4 py-2 border rounded-md"
            value={country.name}
            onChange={handleCountryChange}
          >
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border rounded-md"
            value={currency}
            onChange={(e) =>
              handleCurrencyChange(
                e.target.value as "USD" | "NGN" | "GBP" | "EUR"
              )
            }
          >
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <div className="flex gap-2 lg:flex-row md:flex-row bg-white border border-1 border-dark/10 rounded-lg justify-center mb-8">
          {services.map((service) => (
            <button
              key={service}
              className={`px-4 py-3 text-[11px] lg:text-sm  font-semibold w-full rounded-lg ${
                activeService === service
                  ? "bg-primary text-white outline outline-1  outline-primary outline-offset-2"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => handleServiceClick(service)}
            >
              {service}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
          {plansData[activeService].map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-xl border shadow-md flex flex-col items-center text-center ${
                plan.recommended
                  ? "border-primary bg-primary/10"
                  : "border-gray-200"
              }`}
            >
              <div className="flex self-start">
                <div className="mb-4 text-left">{plan.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-extrabold mb-4">
                {formatPrice(plan)}
              </p>
              <ul className="text-sm mb-4 space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>

              <button className="text-xs bg-primary text-light px-3 py-2 rounded-md outline outline-1  outline-primary outline-offset-2">
                Get Started
              </button>

              {plan.recommended && (
                <span className="mt-2 px-3 py-1 bg-primary text-white rounded-full text-xs">
                  Recommended
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
