'use client'; 

import React from 'react';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// We will use the banner images for the best "cover" effect.
const banners = [
  { imageSrc: '/images/myntra.png', href: '/deals/myntra', alt: 'Myntra Deals' },
  { imageSrc: '/images/indusind.png', href: '/offers/indusind-bank', alt: 'IndusInd Bank Offers' },
  { imageSrc: '/images/ajio.png', href: '/deals/ajio', alt: 'AJIO Deals' },
  // Adding a few placeholders to demonstrate the carousel effect better
  { imageSrc: 'https://placehold.co/600x300/34d399/ffffff?text=Electronics+Sale', href: '/deals/electronics', alt: 'Electronics Sale' },
  { imageSrc: 'https://placehold.co/600x300/f87171/ffffff?text=Holiday+Packages', href: '/deals/travel', alt: 'Travel Deals' },
];

export default function HeroBanners() {
  return (
    <section className="p-4 bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1} // Start with 1 slide on mobile
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // Responsive breakpoints
        breakpoints={{
          // On small screens (sm) and up, show 2 slides
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // On large screens (lg) and up, show 3 slides
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="mySwiper" 
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <a href={banner.href} aria-label={banner.alt}>
              <img
                src={banner.imageSrc}
                alt={banner.alt}
                className="w-full h-52 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}