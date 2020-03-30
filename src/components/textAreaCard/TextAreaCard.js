import React, { useState, useEffect } from "react";

const TextAreaCard = ({
  id,
  questionType,
  question,
  answers,
  submitClicked,
  handleSubmit
}) => {
  const [textLocal, setTextLocal] = useState(answers);
  useEffect(() => {
    handleSubmit(id, questionType, question, textLocal);
  }, [submitClicked]);

  const updateText = e => {
    let newTextLocal = [{ ...answers[0], answer: e.target.value }];
    setTextLocal(newTextLocal);
  };

  return (
    <div className="flex flex-wrap w-100 justify-start br3 shadow-4 pa3 ma2 mw8 center  ">
      <h2 className="w-100">{question}</h2>
      <div className="field w-100 mt3">
        <div className="control ">
          <textarea
            className="textarea is-info w-100"
            placeholder="Add comment"
            value={textLocal[0].answer}
            onChange={updateText}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TextAreaCard;
