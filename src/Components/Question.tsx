import React from "react";

type Props = {
  data: {
    question: string;
    category: string;
    difficulty: string;
  };
};

const Question: React.FC<Props> = ({
  data: { question, category, difficulty },
}) => {
  return (
    <div className="question">
      <div className="column">
        <p>{question}</p>
        <p>{category}</p>
        <p>{difficulty}</p>
      </div>
      <div className="column">
        <button className="btn edit-btn">Edit</button>
        <button className="btn delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default Question;
