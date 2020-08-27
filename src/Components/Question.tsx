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
  const {
    questions,
    setQuestions,
    setEditView,
  } = useContext(DataContext);

  const setView = (e: any) => {
    let editedItem = parseInt(e.target.dataset.index);
    setEditView((prev: any) => ({
      ...prev,
      status: true,
      item: questions.filter(
        (item: any, index: number) => index === editedItem
      ),
    }));
  };

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
  };
  return (
    <div className="question">
      <div className="column">
        <p>{question}</p>
        <p>{category}</p>
        <p>{difficulty}</p>
      </div>
      <div className="column">
        <button
          data-index={index}
          onClick={setView}
          className="btn edit-btn"
        >
          Edit
        </button>
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
