import React, { useState, useEffect } from "react";
import CheckBoxMultiList from "../checkBoxMultiList/CheckBoxMultiList";

const MultiChoiceCard = ({
  id,
  questionType,
  question,
  answers,
  submitClicked,
  handleSubmit
}) => {
  const [answersLocal, setAnswersLocal] = useState(answers);
  useEffect(() => {
    handleSubmit(id, questionType, question, answersLocal);
  }, [submitClicked]);

  const updateMultiAnswer = (answerId, userInput) => {
    const updatedAnswers = answersLocal.map(e => {
      if (answerId === e.id) {
        if (userInput === true) {
          e = { ...e, checked: false };
        } else {
          e = { ...e, checked: true };
        }
      }
      return e;
    });
    setAnswersLocal(updatedAnswers);
  };

  return (
    <div className="flex flex-wrap justify-start br3 shadow-4 pa3 ma2 mw8 center ">
      <h2 className="w-100">{question}</h2>
      <CheckBoxMultiList
        answers={answersLocal}
        handleChange={updateMultiAnswer}
      />
    </div>
  );
};

export default MultiChoiceCard;
