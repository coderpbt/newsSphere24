"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const PressSlider = ({ releasePostSlider }) => {
  return (
    <>
      <h2 className="text-lg font-semibold text-red-600">PRESS RELEASE</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        navigation
        loop={true} 
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mt-4"
      >
        {releasePostSlider?.map((item, i) => (
          <SwiperSlide key={i}>
            <article className="border rounded p-3 bg-white shadow mb-3">            
                <Link href={`/${item.cname}/${item.slug}`}>
                    <Image
                        src={item.featuredImage}
                        alt="hero"
                        width={1000}  
                        height={50}  
                        className="w-full h-40 object-cover rounded"
                    />
                </Link>
               <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded mt-2">
                {item.cname}
               </span>  
              <Link href={`/${item.cname}/${item.slug}`} className="mt-2 font-medium line-clamp-2 hover:underline">{item.title}</Link>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2 mb-3">
                {item.excerpt}
              </p>
              <Link href={`/${item.cname}/${item.slug}`} className="mt-3 text-sm bg-red-600 text-white px-3 py-1 rounded">
                Read More
              </Link>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PressSlider;
