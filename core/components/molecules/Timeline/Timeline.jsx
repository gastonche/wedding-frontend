import React from "react";
import TimelineStyle from "./Timeline.module.css";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

function Timeline() {
  return (
    <>
      <div className={TimelineStyle.timeline__program}>
        <div>
          <Title>Church</Title>
          <Text>10 am</Text>
          <Text>4901 Edward Street</Text>
          <Text>New Bern, North Carolina 25680</Text>
        </div>
        <div>
          <Title>Wedding</Title>
          <Text>10 am</Text>
          <Text>4901 Edward Street</Text>
          <Text>New Bern, North Carolina 25680</Text>
        </div>
        <div>
          <Title>Banquet</Title>
          <Text>10 am</Text>
          <Text>4901 Edward Street</Text>
          <Text>New Bern, North Carolina 25680</Text>
        </div>
      </div>
      <Button className={TimelineStyle.timeline__button}> Click </Button>
    </>
  );
}

export default Timeline;
