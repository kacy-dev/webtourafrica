// import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react"

  const testimonials = [
  {
    name: "James Okoro",
    role: "Business Owner - Lagos",
    text: "Setting up my Google Business Profile through them was effortless. Within a week, my shop started showing on Google Maps. Highly recommended!",
    rating: 5,
  },
  {
    name: "Aisha Bello",
    role: "Fashion Designer - Abuja",
    text: "Their website package helped me attract more clients online. I also love how they manage my monthly Google posts consistently.",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    role: "Tech Startup Founder - UK",
    text: "Super professional service! They handled our business listings and kept everything updated — great communication and results.",
    rating: 5,
  },
  {
    name: "Sophia Martins",
    role: "Restaurant Owner - Canada",
    text: "I love their consistent support. The Google page maintenance keeps bringing in new customers every week.",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "Real Estate Agent - USA",
    text: "They created my website and optimized my Google Business page — now my clients can easily find me online.",
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <>
        <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We’ve helped businesses around the world improve visibility and
            reach more customers through digital transformation.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 h-full"
              >
                {/* Quote icon */}
                <div className="absolute -top-0 left-0 bg-primary text-white rounded-full p-2 shadow-md">
                  <Quote size={30} />
                </div>

                {/* Content */}
                <p className="text-gray-700 text-sm mt-6 mb-4 italic leading-relaxed">
                  “{t.text}”
                </p>

                {/* Name & rating */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                  <div className="flex mt-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  )
}
