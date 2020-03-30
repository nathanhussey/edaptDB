import React, { useState, useEffect } from "react";
import TrueFalseCard from "../../components/trueFalseCard/TrueFalseCard";
import MultiChoiceCard from "../multiChoiceCard/MultiChoiceCard";
import TextAreaCard from "../../components/textAreaCard/TextAreaCard";

const QuestionCard = ({ data, submitClicked, handleSubmit }) => {
  let card;
  switch (data.questionType) {
    case "MultiChoice":
      card = (
        <MultiChoiceCard
          id={data.id}
          questionType={data.questionType}
          question={data.question}
          answers={data.answers}
          submitClicked={submitClicked}
          handleSubmit={handleSubmit}
        />
      );
      break;
    case "TrueFalse":
      card = (
        <TrueFalseCard
          id={data.id}
          questionType={data.questionType}
          question={data.question}
          answers={data.answers}
          submitClicked={submitClicked}
          handleSubmit={handleSubmit}
        />
      );
      break;

    case "TextArea":
      card = (
        <TextAreaCard
          id={data.id}
          questionType={data.questionType}
          question={data.question}
          answers={data.answers}
          submitClicked={submitClicked}
          handleSubmit={handleSubmit}
        />
      );
      break;
    default:
      return (card = <div></div>);
  }

  return <div>{card}</div>;
};

export default QuestionCard;
