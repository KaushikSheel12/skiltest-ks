import { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/Fa";
import Image from "next/image";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1C8mdh1j6I-VWIjAiHbziOfmCAsHKHN7qk89Xr08BCiiYMeiukuyGlEsRjfMDiz3-yLY&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4H0LY21l78Tz8XICoLBFjWnDVh6VpYpiVoEi7nT7GJBmAtuGnS2xO5TQd22nSN99EoU&usqp=CAU",
  "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=",
];

function MyCrouselthree() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next border border-red-700" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App border">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Image src={img} alt={img} width={200} height={200} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MyCrouselthree;
