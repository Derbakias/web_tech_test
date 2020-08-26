import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataProvider";
import Question from "../Components/Question";
import axios from "axios";
import Spinner from "../Assets/Spinning.gif";

function Questions() {
  const {
    questions,
    setQuestions,
    loading,
    setLoading,
  } = useContext(DataContext);

  const getQuestions = () => {
    const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple`;

    axios
      .get(url)
      .then((res) => {
        setLoading(true);
        let data = res.data.results.slice(0, 3);
        setQuestions((prev: any) => [...prev.concat(data)]);
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
      {questions.map((question: any, index: number) => (
        <Question key={index} data={question} />
      ))}
    </div>
  );
}

export default Questions;
