import React, { useState } from "react";
import people from "./data";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const setPageToPrevious = (event) => {
    document.getElementById("nextBtn").disabled = false;
    if (index > 0) {
      setIndex(index - 1);
    } else {
      event.target.disabled = true;
    }
  };

  const setPageToNext = (event) => {
    document.getElementById("previousBtn").disabled = false;
    if (people.length - 1 > index) {
      setIndex(index + 1);
    } else {
      event.target.disabled = true;
    }
  };

  const setRandomPage = () => {
    document.getElementById("previousBtn").disabled = false;
    document.getElementById("nextBtn").disabled = false;
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
        <button className="btn" id="previousBtn" onClick={setPageToPrevious}>
          <GrFormPrevious />
        </button>
        <button className="btn" id="nextBtn" onClick={setPageToNext}>
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
