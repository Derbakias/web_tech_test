import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataProvider";
import Question from "../Components/Question";
import axios from "axios";
import Spinner from "../Assets/Spinning.gif";
import EditView from "./EditView";

function Questions() {
  const {
    questions,
    setQuestions,
    loading,
    setLoading,
    editView,
  } = useContext(DataContext);

  const getQuestions = () => {
    const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple`;
    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        let data = res.data.results.slice(0, 2);
        setQuestions((prev: any) => {
          return [...data, ...prev];
        });
        const timeOut = setTimeout(() => {
          setLoading(false);
          clearTimeout(timeOut);
        }, 300);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);
  if (!editView?.status) {
    return (
      <div className="questions-wrapper">
        <div className="questions-header">
          <h3>Questions</h3>
          {loading ? (
            <img src={Spinner} alt="" />
          ) : (
            <button
              onClick={getQuestions}
              className="btn load-btn"
            >
              Load more question
            </button>
          )}
        </div>
        {questions.map((question: any, index: string) => (
          <Question
            key={index}
            data={question}
            index={index}
          />
        ))}
      </div>
    );
  } else {
    return <EditView />;
  }
}

export default Questions;
