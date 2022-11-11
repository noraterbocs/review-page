import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Questions = (question) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article key={question.id} className="section-article">
      <header className="question-title">
        <h4>{question.title}</h4>
        <button
          className="btn btn-question"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      <p className={`text ${showInfo ? "open" : "closed"}`}>{question.info}</p>
    </article>
  );
};

export default Questions;
