import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import Answers from "./Answers";

function EditView() {
  const {
    editView,
    setEditView,
    error,
    setError,
  } = useContext(DataContext);
  const [answerInput, setAnswerInput] = useState([0, 1]);

  const submitAnswers = (e: any) => {
    e.preventDefault();
    const correct_answer = editView?.item[0].correct_answer.toLowerCase();
    Array.from(e.target).forEach((element: any) => {
      if (
        element.tagName === "INPUT" &&
        element.type === "text"
      ) {
        if (element.value.trim().length > 0) {
          if (
            element.value.toLowerCase() === correct_answer
          ) {
            element.nextElementSibling.checked = true;
            const timeOut = setTimeout(() => {
              setEditView((prev: any) => ({
                ...prev,
                status: false,
                item: undefined,
              }));
              clearTimeout(timeOut);
            }, 1000);
          }
        } else if (element.value.trim().length < 1) {
          setError("Field is required");
          const timeOut = setTimeout(() => {
            setError("");
            clearTimeout(timeOut);
          }, 2000);
        }
      }
    });
  };
  return (
    <div className="edit-view-wrapper">
      <div className="row">
        <h3>Question</h3>
        <p>{editView?.item[0].question}</p>
        <button
          onClick={() => {
            if (answerInput.length < 5) {
              setAnswerInput((prev: any) => [
                ...prev,
                prev[-1] + 1,
              ]);
            }
          }}
          className="btn btn-add-answer"
        >
          Add More Answers
        </button>
        <button
          onClick={() => {
            if (answerInput.length > 2) {
              setAnswerInput((prev: any) => [
                ...prev.slice(0, prev.length - 1),
              ]);
            }
          }}
          className="btn btn-remove-answer"
        >
          Remove Answer
        </button>
      </div>
      <div className="answer-wrapper">
        <div className="row">
          <h3>Answers</h3>
          <h3>IsCorrect</h3>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <form onSubmit={submitAnswers} className="form">
          {answerInput.map((answer, index) => (
            <Answers key={index} />
          ))}
          <div className="row">
            <button
              type="button"
              onClick={() =>
                setEditView((prev: any) => ({
                  ...prev,
                  status: false,
                  item: undefined,
                }))
              }
              className="btn cancel-btn"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn submit-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditView;
