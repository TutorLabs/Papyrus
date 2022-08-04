import React from "react";
import { useState, useEffect } from "react";
import { Carousel, CarouselTypes } from "../../ui-components/Carousel";
import storyImg1 from "../../../images/Story1.svg";
import storyImg2 from "../../../images/Story2.svg";
import "./testimonials.scss";

var content = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Inqiyad Patwary",
    role: "Co-Founder",
    image: storyImg1,
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    name: "Mahzabin Rashid Fariha",
    role: "Co-Founder",
    image: storyImg2,
  },
];

const Testimonials = () => {
  const [state, setState] = useState({
    screenWidth: window.innerWidth,
  });

  const updateWindowDimensions = () => {
    setState({ ...state, screenWidth: window.innerWidth });
  };

  useEffect(() => {
    function handleResize() {
      updateWindowDimensions();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [state]);

  return (
    <div className="section-wrapper">
      <div className="section-container">
        <div className="section-content">
          <div className="story-container">
            <h1>Testimonials</h1>
            <Carousel content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
