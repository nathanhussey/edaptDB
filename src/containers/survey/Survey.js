import React, { useState, useEffect } from "react";
import QuestionCardList from "../../components/questionCardList/QuestionCardList";
import ReactLoading from "react-loading";
import SurveyThank from "../../components/surveyThank/SurveyThank";
import { DATA } from "./SURVEY_CONTENT";

const Survey = () => {
  const [surveyData, setSurveyData] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (submitClicked) {
      setIsLoading(true);
      fetch("https://edaptdb-api.herokuapp.com/survey", {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: surveyData })
      })
        .then(res => res.json())
        .then(data => {
          setIsLoading("success");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [surveyData]);

  let tempSurvey = [];

  if (isLoading === "success") {
    return (
      <div className="flex flex-wrap  mw8 center justify-center">
        <SurveyThank />
      </div>
    );
  }
  if (isLoading === true) {
    return (
      <div className="flex flex-wrap  mw8 center justify-center">
        <ReactLoading
          type="spinningBubbles"
          color="black"
          height={200}
          width={200}
        />
        <h2 className="w-100 tc ">Submitting</h2>
      </div>
    );
  }
  console.log(isLoading);
  const handleSubmit = (id, questionType, question, answers) => {
    let newObj = {
      id: id,
      question: question,
      questionType: questionType,
      answers: answers
    };
    tempSurvey.push(newObj);
    setSurveyData(tempSurvey);
  };
  const clickedSubmit = () => {
    setSubmitClicked(true);
  };
  return (
    <div className="flex flex-wrap  mw8 center pr4 pl4 justify-center">
      <h1 className="f2 lh-copy">Novel Education Survey</h1>
      <QuestionCardList
        data={DATA.data}
        submitClicked={submitClicked}
        handleSubmit={handleSubmit}
      />
      <button className="button is-primary mt2 mb4 " onClick={clickedSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Survey;
