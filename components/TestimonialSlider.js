// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "It was a pleasure working with Muhammad Bilal and hope do so again. We paid a bit more but it was well worth it for the clear communication that we received and the speed at which he worked. This is a make or break criteria.!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      " had an incredible experience working with Muhammad Bilal H on my business's website development. Not only did he showcase unmatched professionalism and attention to detail that exceeded my expectations",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Bilal is delightful to work with. He made sure to understand what i wanted first and build upon that. Quick and easy delivery. Wonderful, professional outcome. Solid communication. Great value. 10 out of 10 would book again.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[Navigation, Pagination]}
      className="w-[80%]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-[25%] px-16">
              <div className="max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto ">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font font-extralight tracking-position">
                    {person.position}
                  </div>
                </div>
              </div>
              <div className="bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-3 xl:before:h-[200px] relative xl:pl-20">
                <div className="">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
