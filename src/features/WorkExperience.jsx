import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_EXPERIENCE } from "../utils/consts";

export const WorkExperience = () => {
  const settings = {
    slidesToShow: 2.2,
    slidesToScroll: 1,
  };
  return (
    <div className=" w-[80%] mx-auto mt-[120px] ">
      <h5 className="text-white text-[60px] font-[700]">WORK EXPERIENCE</h5>

      <Slider className="work-experience-slider mt-[70px] " infinite={false} {...settings}>
        {WORK_EXPERIENCE.map((item, idx) => (
          <div
            key={item.title}
            className="px-[54px] py-[60px] bg-[#20023D] border-[#3D265A] border-2 rounded-[18px] relative"
          >
            <div className="flex flex-col gap-[20px]">
              <p className="text-[#ACABC8] text-[14px]">{item.timing}</p>
              <h5 className="font-[700] text-[white] text-[54px]">
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
              <p className="text-[#ACABC8] text-justify">{item.description}</p>
            </div>
            <img
              src="/frontend.svg"
              alt=""
              className="absolute top-[-20px] right-0 rotate-[90deg]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
