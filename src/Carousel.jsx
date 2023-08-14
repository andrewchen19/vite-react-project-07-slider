// carousel = 輪播效果

import { useState, useEffect } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  // state
  const [people, setPeople] = useState(list);
  const [currentIndex, setCurrentIndex] = useState(0);

  // event handling
  const nextHandler = () => {
    // functional update approach (always refers to the latest state )
    setCurrentIndex((currentState) => {
      let newState = (currentState + 1) % people.length;
      return newState;
    });
  };
  const prevHandler = () => {
    // functional update approach (always refers to the latest state )
    setCurrentIndex((currentState) => {
      let newState = (currentState - 1 + people.length) % people.length;
      return newState;
    });
  };

  // autoplay (必須把 React.StrictMode 去除才會正常顯示)
  useEffect(() => {
    // closure capturing behavior
    // capture the value once from the initial rendering, and it will always use the value
    const interval_id = setInterval(() => {
      nextHandler();
    }, 5000);

    // return a cleanup function
    // clear previous interval, avoid multiple intervals running simultaneously
    return () => {
      clearInterval(interval_id);
    };
  }, [currentIndex]);

  // console.log(currentIndex);

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;

        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
            }}
          >
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

      <button className="prev" onClick={prevHandler}>
        <FaArrowLeft />
      </button>
      <button className="next" onClick={nextHandler}>
        <FaArrowRight />
      </button>
    </section>
  );
};

export default Carousel;
