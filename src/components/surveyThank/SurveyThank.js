import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const SurveyThank = () => {
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="flex flex-wrap  mw8 tc pr4 pl4 justify-center items-center ">
      <h2 className="w-100 f1 lh-title">
        Thank you for filling out the survey{" "}
      </h2>
      <h3 className="w-100 f3 lh-copy">Your submission has been sent </h3>
      <button className="button is-success is-light" onClick={handleClick}>
        Back to Home
      </button>
    </div>
  );
};

export default SurveyThank;
