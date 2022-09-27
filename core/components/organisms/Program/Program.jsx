import React from "react";
import programStyle from "./Program.module.css";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import Timeline from "../../molecules/Timeline/Timeline";
function Program() {
  return (
    <>
      <div className={programStyle.program__date}>
        <Title>24.06.2021</Title>
        <p className={programStyle.program__dateText}>
          Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit. Quibusdam
          excepturi neque ad fugit quisquam<br /> consequuntur vero labore amet magni.
          Aspernatur repellendus<br /> accusantium repudiandae<br /> nam mollitia. Quos non
          illo optio alias.
        </p>
      </div>
      <Timeline />
    </>
  );
}

export default Program;
