import React, { useState, useEffect } from "react";
import CheckBoxTF from "../checkBoxTF/CheckBoxTF";

const TrueFalseCard = ({
  id,
  questionType,
  question,
  answers,
  submitClicked,
  handleSubmit
}) => {
  const [answerLocal, setAnswerLocal] = useState(answers);
  useEffect(() => {
    handleSubmit(id, questionType, question, answerLocal);
  }, [submitClicked]);

  const handleAnswerUpdate = answerId => {
    const updatedAnswer = answerLocal.map(e => {
      if (answerId === e.id) {
        e = { ...e, checked: true };
      } else {
        e = { ...e, checked: false };
      }
      return e;
    });
    setAnswerLocal(updatedAnswer);
  };
  return (
    <div className="flex flex-wrap justify-start br3 shadow-4 pa3 ma2 mw8 center ">
      <h2>{question}</h2>
      <CheckBoxTF
        question={question}
        answers={answerLocal}
        handleChange={handleAnswerUpdate}
      />
    </div>
  );
};

export default TrueFalseCard;
