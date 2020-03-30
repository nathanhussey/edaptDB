import React from "react";
import QuestionCard from "../questionCard/QuestionCard";

const QuestionCardList = ({ data, submitClicked, handleSubmit }) => {
  return (
    <div className="w-100">
      {data.map((element, i) => {
        return (
          <QuestionCard
            key={element.id}
            data={element}
            submitClicked={submitClicked}
            handleSubmit={handleSubmit}
          />
        );
      })}
    </div>
  );
};

export default QuestionCardList;
