import React from "react";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import TeamWork from "../../images/teamwork.png";

const Homepage = () => {
  return (
    <div className=" bg-grey-1 ">
      <Nav />
      <div className="flex flex-wrap items-center mw8 center pr4 pl4 vh-75">
        <div className="w-40">
          <h2 className="w-100 f2 lh-copy">
            Schools sharing educational solutions during COVID19
          </h2>
          <h3 className="w-100">
            How is your school or school system adapting to serving students
            during COVID19?
          </h3>
          <Link to="/survey">
            <button className="button is-primary mt3">Take Survey</button>
          </Link>
        </div>

        <img className="w-60 mt5 " src={TeamWork} alt="teacher"></img>
      </div>
      <div className=" flex flex-wrap justify-center items-center mt2 h4 w-100  bg-light-gray ">
        <h2 className="mw8 w-100 tc f3 lh-copy pr4 pl4">
          {" "}
          Please share this site with teaching professionals{" "}
        </h2>
      </div>
      <div className="flex  flex-wrap  justify-center content-center pa4 vh-50">
        <h2 className="w-100 tc f2 lh-copy">How the project works</h2>
        <div className="flex flex-column flex-wrap justify-start  content-start w-30 ma2 pa3 shadow-4 br4">
          <h4 className="w-100 f4 lh-copy tc">Collect </h4>
          <h5 className="f6 tc ">
            Collect survey data from kind participants who support the project
          </h5>
        </div>
        <div className="flex flex-column flex-wrap justify-start  content-start    w-30 ma2 pa3 shadow-4 br4">
          <h4 className="w-100 f4 lh-copy tc">Analyze</h4>
          <h5 className="f6 tc">Curate and analyze the data.</h5>
        </div>
        <div className="flex flex-column flex-wrap justify-start  content-start   w-30 ma2 pa3 shadow-4 br4">
          <h4 className="w-100 f4 lh-copy tc">Share</h4>
          <h5 className="f6 tc ">
            Create data visualizations and other methods so others may learn
          </h5>
        </div>
      </div>
      <div className="flex flex-column flex-wrap justify-center items-center mw8 center pr4 pl4 vh-100">
        <h2 className="f2 lh-copy tc w-100">Support the project</h2>
        <h2 className="f2 lh-copy tc w-100">Share the project</h2>
        <h2 className="f2 lh-copy tc w-100">Thank You</h2>
        <Link to="/survey">
          <button className="button is-primary mt3">Take Survey</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
