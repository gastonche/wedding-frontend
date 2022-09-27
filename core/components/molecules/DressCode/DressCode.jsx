import React from "react";
import Image from "next/image";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import dressStyle from "./DressCode.module.css";

function DressCode() {
  return (
    <div className={dressStyle.dressCode}>
      <div>
        <Title variant="regular">Dress Code</Title>
        <Text variant="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          aut veritatis enim ad. Aperiam, quasi. Quaerat aspernatur assumenda,
          incidunt asperiores non sint aliquam officiis beatae adipisci error
          quasi nostrum reiciendis?
        </Text>
      </div>
      <div className={dressStyle.mosaic}>
        <div className={dressStyle.mosaic__column1}>
          <Image
            src={"/rings.jpg"}
            alt="rings"
            height="650px"
            width="500px"
          />
          <Image
            src={"/rings.jpg"}
            alt="rings"
            height="650px"
            width="500px"
          />
        </div>
        <div className={dressStyle.mosaic__column2}>
          <Image
            src={"/rings.jpg"}
            alt="rings"
            height="650px"
            width="500px"
          />
          <Image
            src={"/rings.jpg"}
            alt="rings"
            height="650px"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default DressCode;
