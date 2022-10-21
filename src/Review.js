import React, { useState } from "react";
import people from "./data";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const setPageToPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const setPageToNext = () => {
    if (people.length - 1 > index) {
      setIndex(index + 1);
    }
  };

  const setRandomPage = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };
  return (
    <section className="section-card">
      <div>
        <img className="image" src={image} alt={name} />
        <p className="name">{name}</p>
        <p className="job">{job}</p>
        <p className="text">{text}</p>
      </div>
      <div className="btn-wrap">
        <button
          className="btn"
          id="previousBtn"
          disabled={index === 0}
          onClick={setPageToPrevious}
        >
          <GrFormPrevious />
        </button>
        <button
          className="btn"
          id="nextBtn"
          disabled={people.length - 1 === index}
          onClick={setPageToNext}
        >
          <GrFormNext />
        </button>
      </div>
      <div className="btn-wrap">
        <button className="btn" onClick={setRandomPage}>
          Surprise me
        </button>
      </div>
    </section>
  );
};

export default Reviews;
