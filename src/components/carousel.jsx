import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Import Swiper React components

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
  const snap = slides;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      // slidesToScroll:3,
      inViewThreshold: 1,
      skipSnaps: false,
      dragFree: false,
      containScroll: "keepSnaps",
      align: 'start',
      speed: 10,
      startIndex: 0,
      // Prevent dragging beyond edges
      watchDrag: (emblaApi) => {
        const engine = emblaApi.internalEngine();
        const location = engine.location;
        const target = engine.target;
        
        // If at the start, prevent dragging left
        if (location.get() === 0 && target.get() < 0) {
          return false;
        }
        
        // If at the end, prevent dragging right
        const maxScroll = emblaApi.scrollSnapList().length - 1;
        if (location.get() === maxScroll && target.get() > maxScroll) {
          return false;
        }
        
        return true;
      }
    },
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const generateRepeatedArray = (arr, times) => {
    return Array(times).fill(arr).flat();
  };

  const repeated = generateRepeatedArray(slides, 10);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());

    // if (emblaApi.selectedScrollSnap() === snap.length - 2 ) {
    //   snap.push(...repeated)
    //  }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // console.log(emblaApi.scrollSnapList());
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, selectedIndex, onSelect, setScrollSnaps]);

  //console.log(snap,snap.length);
  // console.log(repeated);
  return (
    <>
      <div className="embla h-full relative" ref={emblaRef}>
        <div className="embla__container h-full  ">
          {slides.map((slide, i) => (
            <div key={i} className="embla__slide w-full relative">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full flex-shrink-0"
              />
              <div
                className={`
                  absolute bottom-8 left-8 right-0 
                   p-4
                  transform transition-all duration-1000 delay-500 ease-out
                  ${
                    selectedIndex === i
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }
                `}
              >
                <p className="text-white text-[2.8rem] leading-[3.2rem] strong ">
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
            key={index}
              className={`embla__dot ${
                index === selectedIndex ? "is-selected" : ""
              }`}
              type="button"
              onClick={() => scrollTo(index)}
            />
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
