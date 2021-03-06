import React from "react";
import CheckBoxMulti from "../checkBoxMulti/CheckBoxMulti";

const CheckBoxMultiList = ({ answers, handleChange }) => {
  return (
    <div>
      {answers.map((element, i) => {
        return (
          <CheckBoxMulti
            key={element.id}
            answer={element}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default CheckBoxMultiList;
