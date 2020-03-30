import React, { useState } from "react";

const CheckBoxTF = ({ answers, handleChange }) => {
  return (
    <div>
      <label className="checkbox ml2 mr3">
        {answers[0].answer}
        <input
          type="checkbox"
          value={answers[0].answer}
          id={answers[0].id}
          checked={answers[0].checked}
          onChange={() => handleChange(answers[0].id)}
          className="ml1"
        />
      </label>
      <label className="checkbox ">
        {answers[1].answer}
        <input
          type="checkbox"
          value={answers[1].answer}
          id={answers[1].id}
          checked={answers[1].checked}
          onChange={() => handleChange(answers[1].id)}
          className="ml1"
        />
      </label>
    </div>
  );
};

export default CheckBoxTF;
