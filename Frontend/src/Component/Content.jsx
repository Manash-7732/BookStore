import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Card from "./Card";
function Content() {
 
  const filterData = list.filter((data) => (data.catagory === "Free"));
  console.log(filterData[0].title);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 ">
        <div>
          <h1 className="text-pink-500 text-2xl"> Free Offered Courses </h1>
          <p className="font-bold">
            Explore a variety of free courses designed to enhance your knowledge
            and skills in different fields. Our expertly curated programs cover
            topics ranging from technology and business to personal development,
            offering flexible, self-paced learning. Access high-quality content
            anytime, anywhere, and start your journey toward achieving your
            goals—all at no cost
          </p>
        </div>
        <div className="mt-10 pb-2">
          <div className="slider-container ">
            <Slider {...settings}>
               {filterData.map((item) =>(
                <Card item={item} key={item.id}/>
               ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
