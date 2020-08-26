import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

type Props = {
  data: {
    question: string;
    category: string;
    difficulty: string;
  };
  index: string;
};

const Question: React.FC<Props> = ({
  data: { question, category, difficulty },
  index,
}) => {
  const { setQuestions } = useContext(DataContext);

  const removeQuestion = (e: any) => {
    let removeItem = parseInt(e.target.dataset.index);
    setQuestions((prev: any) => [
      // eslint-disable-next-line
      ...prev.filter((item: any, index: number) => {
        if (index !== removeItem) {
          return item;
        }
      }),
    ]);

    console.log(typeof removeItem);
  };
  return (
    <div className="question">
      <div className="column">
        <p>{question}</p>
        <p>{category}</p>
        <p>{difficulty}</p>
      </div>
      <div className="column">
        <button className="btn edit-btn">Edit</button>
        <button
          data-index={index}
          onClick={removeQuestion}
          className="btn delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Question;
