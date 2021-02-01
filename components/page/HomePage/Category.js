/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:09:50
 * @modify date 2021-02-01 18:09:50
 * @desc [description]
 */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageCard, SectionCategory } from "./Category.style";

function category({ data }) {
  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <SectionCategory>
      <Slider {...settings}>
        {data.map((item) => (
          <ImageCard src={item.imageUrl} key={item.id} />
        ))}
      </Slider>
    </SectionCategory>
  );
}

export default category;
