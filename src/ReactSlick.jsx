// Import React-Slick CSS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import React-Slick library
// The Slider component is a key component in React Slick library; it creates a carousel or slider component in React applications
import Slider from "react-slick";

import { list } from "./data";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa";

// custom arrow button
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiSolidLeftArrow
        style={{ ...style, color: "red", fontSize: "30px", left: "-10px" }}
      />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiSolidRightArrow
        style={{ ...style, color: "green", fontSize: "30px", right: "-10px" }}
      />
    </div>
  );
}

const ReactSlick = () => {
  // React Slick API
  const settings = {
    // 是否要顯示 dots
    // dots indicate the current page or slide
    dots: true,
    // 是否要無限循環
    infinite: true,
    // 切換動畫的持續時間
    speed: 3000,
    // defines how many slides should be visible in once
    slidesToShow: 1,
    // defines how many slides should be scrolled
    slidesToScroll: 1,
    autoplay: true,
    // 自動播放模式下，每個之間的停留時間
    autoplaySpeed: 1000,
    // fade 是 true 的情況下，slidesToShow 只能是 1
    fade: true,
    // hover 時，停止動畫
    pauseOnHover: true,
    // custom arrow button (optional, library will provide default arrow buttons)
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, name, title, quote } = person;

          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <div className="name">{name}</div>
              <div className="title">{title}</div>
              <p className="text">{quote}</p>
              <span className="icon">
                <FaQuoteRight />
              </span>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default ReactSlick;
