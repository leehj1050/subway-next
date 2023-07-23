"use client";
import Image from "next/image";
import slider_shrimp from "../../public/img/slider_shrimp.jpg";
import slide_2 from "../../public/img/slide_2.jpg";
import slide_3 from "../../public/img/slide_3.jpg";
import slide_4 from "../../public/img/slide_4.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//최신버전
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const SlidePage = () => {
  return (
    <main className="slidePage">
      <Swiper
        className="swiperWrap"
        modules={[Navigation, Scrollbar, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView="auto"
        observeParents={true}
        observer={true}
      >
        <SwiperSlide>
          <Image src={slider_shrimp} className="slide_item" alt="slide_1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_2} className="slide_item" alt="slide_2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_3} className="slide_item" alt="slide_3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_4} className="slide_item" alt="slide_4" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default SlidePage;
