import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplayy from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

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
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setsnaps] = useState([]);
  const snap = slides

  const generateRepeatedArray = (arr, times) => {
    return Array(times).fill(arr).flat();
   }
   

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      dragFree: true,
      // slidesToScroll:3,
      inViewThreshold: 1,
    },
    [
      // Autoplayy({ delay: 2000, jump: false }),
      AutoScroll({ playOnInit: true, speed: 1 }),
    ]
  );

  const repeated = generateRepeatedArray(slides, 10);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());

    if (emblaApi.selectedScrollSnap() === snap.length - 2 ) {
      snap.push(...repeated)
     }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // console.log(emblaApi.scrollSnapList());
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);

    
  }, [emblaApi, selectedIndex, onSelect]);

 

  //console.log(snap,snap.length);
  // console.log(repeated);
  return (
    <>
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full !w-[342px] sm:!w-[720px] md+:!w-[680px]">
          {snap.map((slide, i) => (
            <div key={i} className="embla__slide w-full ">
              <img src={slide} alt="" className="w-full h-full flex-shrink-0" />
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
