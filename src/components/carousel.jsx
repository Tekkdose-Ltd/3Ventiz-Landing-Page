import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplayy from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

export default function Carousel({ slides }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)", // Smooth easing
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
    },
    [
      // Autoplayy({ delay: 2000, jump: false }),
      AutoScroll({ playOnInit: true,speed:2 })
    ],
  );
  return (
    <>
     
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full !w-[342px] sm:!w-[700px]">
            {slides.map((slide, i) => (
              <div className="embla__slide w-full ">
                <img
                  key={i}
                  src={slide}
                  alt=""
                  className="w-full h-full flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
    </>
  );
}
// export default function Carousel({ slides }) {
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 800,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   cssEase: "cubic-bezier(0.87, 0, 0.13, 1)", // Smooth easing
//   pauseOnHover: false,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 500,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

//   return (
// <Slider {...settings}>
//       {slides.map((slide, i) => (
//         <div className="w-[584px] ">
//           <img
//             key={i}
//             src={slide}
//             alt=""
//             className="w-[584px] h-full flex-shrink-0"
//           />
//         </div>
//       ))}
// </Slider>
//   );
// }

// export default function Carousel({ slides }) {

//   return (
//     <Carousell
//     animation="slide"
//     className=""
//     >
//       {slides.map((slide, i) => (
//         <div className="w-[584px] ">
//           <img
//             key={i}
//             src={slide}
//             alt=""
//             className="w-[584px] h-full flex-shrink-0"
//           />
//         </div>
//       ))}
//     </Carousell>
//   );
// }

// export default function Carousel({ slides }) {
//   const extendedSlides = [
//     slides[slides.length - 1], // Clone of last slide
//     ...slides,
//     slides[0], // Clone of first slide
//   ];

//   const [emblaRef] = useEmblaCarousel(
//     {
//       loop: true,
//     dragFree:true // Faster transition might help hide the jump
//     },
//     [Autoplay({ delay: 1500, jump: false })]
//   );

//   return (
//     <div className="embla h-full" ref={emblaRef}>
//     <div className="embla__container h-full w-[584px]">
//       {extendedSlides.map((slide, i) => (
//         <div className="embla__slide w-[584px] ">
//           <img
//             key={i}
//             src={slide}
//             alt=""
//             className="w-[584px] h-full flex-shrink-0"
//           />
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// }
