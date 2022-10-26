import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Questions = (question) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article key={question.id} className="section-article">
      <header className="question-title">
        <h3>{question.title}</h3>
        <button
          className="btn btn-question"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {showInfo && <p className="question-info">{question.info}</p>}
    </article>
  );
};

export default Questions;
