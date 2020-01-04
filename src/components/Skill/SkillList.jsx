import React from "react";
import SkillItem from "./SkillItem";

const SkillList = () => {
  return (
    <div className="skill-list">
      <h2 className="heading skill-list-heading">Skills:</h2>
      <div className="grid">
        <SkillItem
          language="HTML"
          rate="95"
          progressYesWidth="95"
          progressNoWidth="5"
          circlePos = "85"
        />
        <SkillItem
          language="CSS"
          rate="95"
          progressYesWidth="90"
          progressNoWidth="5"
          circlePos = "85"
        />
        <SkillItem
          language="JavaScript"
          rate="80"
          progressYesWidth="80"
          progressNoWidth="20"
          circlePos = "70"
        />
        <SkillItem
          language="React.js and Redux "
          rate="50"
          progressYesWidth="50"
          progressNoWidth="50"
          circlePos = "40"
        />
        <SkillItem
          language="Node.js"
          rate="5"
          progressYesWidth="5"
          progressNoWidth="95"
          circlePos = "0"
        />
        <SkillItem
          language="PHP"
          rate="10"
          progressYesWidth="10"
          progressNoWidth="90"
          circlePos = "0"
        />
        <SkillItem
          language="SQL"
          rate="15"
          progressYesWidth="15"
          progressNoWidth="85"
          circlePos = "5"
        />
        <SkillItem
          language="Java"
          rate="15"
          progressYesWidth="15"
          progressNoWidth="85"
          circlePos = "5"
        />
      </div>
    </div>
  );
};

export default SkillList;
