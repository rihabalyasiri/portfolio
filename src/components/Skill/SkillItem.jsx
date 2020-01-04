import React from "react";
import "./SkillItem.css";

const SkillItem = props => {

  // defining the style that came from the List Component
  const progress_yes_width = props.progressYesWidth;
  const progress_no_width = props.progressNoWidth;
  const progress_circle_pos = props.circlePos;

  return (
    <div className="skill-item">
      <div className="skill-content">
        <h2 className="skill-heading">{props.language}</h2>
        <span className="skill-range">{props.rate}%</span>
      </div>
      <div className="progress">
        <div className="progress-circle" style={{ left: `${progress_circle_pos}%` }}>
          <i class="right icon  fas fa-code"></i>
        </div>
        <div
          style={{ width: `${progress_yes_width}%` }}
          className="progress-yes"
        ></div>
        <div
          style={{ width: `${progress_no_width}%` }}
          className="progress-no"
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
