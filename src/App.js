import "./App.css";
import React, { useState } from "react";
import questionsData from "./questionsData";
import Reviews from "./Review";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = useState(questionsData);
  return (
    <main className="main">
      <h1 className="title">Reviews</h1>
      <Reviews />
      <h1 className="title">Q&A</h1>
      <section className="section-card section-question">
        {questions.map((question) => {
          return <Questions key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
}

export default App;
