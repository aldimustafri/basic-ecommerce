/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:09:50
 * @modify date 2021-02-01 21:31:55
 * @desc [description]
 */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CategoryContent, CategoryDesc, ImageCard, SectionCategory,
} from "./Category.style";

function category({ data }) {
  const settings = {
    dots: true,
    infinite: false,
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
          <CategoryContent key={item.id}>
            <ImageCard src={item.imageUrl} key={item.id} />
            <CategoryDesc>{item.name}</CategoryDesc>
          </CategoryContent>
        ))}
      </Slider>
    </SectionCategory>
  );
}

export default category;
