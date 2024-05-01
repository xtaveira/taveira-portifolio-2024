"use client";

import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Technologies = () => {
  const items = [{ imageUrl: "/insta.svg" }, { imageUrl: "/github.svg" }];

  return (
    <section className=" w-full flex flex-col justify-center items-center py-10 gap-5 bg-[--primary]">
      <div className="w-[90%] border-b-2 border-white text-white text-5xl py-3">
        Tecnologias
      </div>
      <div className="w-[90%]  rounded-lg flex flex-col justify-between items-center mb-5">
        <AliceCarousel autoPlay autoPlayInterval={3000}>
          {items.map((item, index) => (
            <img key={index} src={item.imageUrl} alt={`Slide ${index}`} />
          ))}
        </AliceCarousel>
      </div>
    </section>
  );
};

export default Technologies;
