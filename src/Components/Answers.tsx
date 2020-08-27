import React, { Fragment } from "react";

function Answers() {
  return (
    <Fragment>
      <div className="row">
        <input type="text" name="answer" />
        <input
          type="checkbox"
          name="isCorrect"
          className="isCorrect"
        />
      </div>
    </Fragment>
  );
}

export default Answers;
