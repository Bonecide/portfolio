import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_EXPERIENCE } from "../utils/consts";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { isDesktop } from "react-device-detect";

export const WorkExperience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const click = new Audio("/click1.mp3");
  const settings = {
    slidesToShow: 2.2,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1208,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = useRef(null);

  const nextSlide = useCallback(async () => {
    click.play();
    await slider.current.slickNext();
  }, []);

  const prevSlide = useCallback(async () => {
    click.play();
    await slider.current.slickPrev();
  }, []);
  return (
    <div className=" md:w-[80%] w-[95%] mx-auto mt-[120px] ">
      <h5 className="text-white md:text-[60px] text-[40px] font-[700]">
        WORK EXPERIENCE
      </h5>

      <div className="relative">
        <Slider
          className="work-experience-slider mt-[70px] relative "
          infinite={false}
          ref={slider}
          {...settings}
        >
          {WORK_EXPERIENCE.map((item, idx) => (
            <div
              key={item.title}
              className="md:p-[60px] p-[30px] bg-[#20023D] border-[#3D265A] border-2 rounded-[18px] relative "
            >
              <div className="flex flex-col gap-[20px]">
                <p className="text-[#ACABC8] text-[14px]">{item.timing}</p>
                <h5 className="font-[700] text-[white] lg:text-[34px] text-[35px]">
                  {item.title}
                </h5>
                <div className="flex gap-[10px] flex-wrap">
                  {item.tags.map((tag) => (
                    <div
                      key={tag}
                      className="px-[18px] py-[10px] text-[#6156FF] border-[3px] rounded-full  border-[#6156FF]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="text-[#ACABC8] text-justify">
                  {item.description}
                </p>
              </div>
              <img
                src="/frontend.svg"
                alt=""
                className="absolute top-[-20px] right-0 rotate-[90deg] !hidden lg:!block"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute !flex gap-[10px] top-[-60px] right-[30px]">
          <img
            onClick={prevSlide}
            src="/move.svg"
            alt=""
            className="w-[50px] h-[50px] rotate-[180deg] "
            style={{
              cursor: "pointer",
              opacity: currentSlide === 0 ? 0.5 : 1,
              pointerEvents: currentSlide === 0 ? "none" : "all",
            }}
          />
          <img
            onClick={nextSlide}
            src="/move.svg"
            alt=""
            className="w-[50px] h-[50px] "
            style={{
              cursor: "pointer",
              opacity: isDesktop
                ? Math.ceil(currentSlide) === 1
                  ? 0.5
                  : 1
                : currentSlide === 2
                ? 0.5
                : 1,
              pointerEvents: isDesktop
                ? Math.ceil(currentSlide) === 1
                  ? "none"
                  : "all"
                : currentSlide === 2
                ? "none"
                : "all",
            }}
          />
        </div>
      </div>
    </div>
  );
};
