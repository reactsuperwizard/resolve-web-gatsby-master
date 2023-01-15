import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import CardWithImage from "./CardWithImage";
import Container from "./Container";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function BlockProductCards({ title, items }) {

  return (
    <section className="product-cards">
      <Container>
        <h2 className="product-cards__title">{title}</h2>
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            }
          }}
        >
          {
            items.map((item, idx) =>
              <SwiperSlide key={idx} >
                <CardWithImage data={item} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </Container>
      <style jsx global>{`
        .swiper {
          z-index: 0;
        }
        .product-cards {
          margin-bottom: 80px;
        }
        .product-cards__title {
          margin-top: 0;
          margin-bottom: 48px;
          font-weight: 400;
          font-size: 48px;
          line-height: 56px;
          text-align: center;
          color: #1F325D;
        }
        .product-cards__wrapper {
          display: grid;
          grid-template-columns: auto auto auto;
          column-gap: 40px;
        }
        @media (max-width: 768px) {
          .swiper-slide {
            width: auto !important;
          }
          .product-cards__title {
            margin-bottom: 24px;
            font-size: 24px;
            line-height: 32px;
            text-align: left;
          }
        }
      `}</style>
    </section >
  );
}
