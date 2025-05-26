import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Hi, I'm Victor — a lifelong lover of stories and the proud curator at The Book Nook. For me, books are more than just pages and print; they’re windows into new worlds, ideas, and emotions. I created this space to help readers find books that speak to their soul. Whether you’re a casual reader or a literary explorer, I’m here to help you discover your next unforgettable read",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Satya Narayan",
    text: "Books have always been my escape and inspiration, and here at The Book Nook, I’m dedicated to helping you find that same magic. Every reader’s journey is unique, and I take pride in guiding you to stories that ignite your passion and expand your horizons. Let’s explore the world of books together!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Krishna Sahay",
    text: "For me, books are gateways to new ideas and endless adventures. At The Book Nook, I’m passionate about helping every reader find stories that inspire, challenge, and delight. Whether you’re diving into a classic or exploring something new, I’m here to make your reading journey unforgettable.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              At The Book Nook, we value the voices of our community. This page features authentic testimonials from our customers who trust us to guide them to their next great read. Read on to see how we’ve helped bring stories to life and connect readers with books they love.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;