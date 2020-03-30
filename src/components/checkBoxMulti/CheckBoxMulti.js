import React, { useState } from "react";

const CheckBoxMulti = ({ answer, handleChange }) => {
  return (
    <div className="mt3 mb3">
      <label className="checkbox">
        <input
          type="checkbox"
          id={answer.id}
          checked={answer.checked}
          onChange={() => handleChange(answer.id, answer.checked)}
          className="mr2"
        />
        {answer.answer}
      </label>
    </div>
  );
};

export default CheckBoxMulti;
