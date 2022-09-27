import React from "react";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import storyStyle from "./Story.module.css";

function Story() {
  return (
    <>
      <div className={storyStyle.story}>
        <div className={storyStyle.story__title}>
          <Title>Our Story</Title>
        </div>
        <div className={storyStyle.story__text}>
          <div className={storyStyle.story__column1}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              alias expedita, fugiat debitis numquam nam recusandae consequatur
              molestiae, sed, aspernatur fugit maxime ipsa repellat. Impedit,
              sequi assumenda! Reiciendis, id dolor!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              alias expedita, fugiat debitis numquam nam recusandae consequatur
              molestiae, sed, aspernatur fugit maxime ipsa repellat. Impedit,
              sequi assumenda! Reiciendis, id dolor!
            </Text>
          </div>
          <div className={storyStyle.story__column2}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              alias expedita, fugiat debitis numquam nam recusandae consequatur
              molestiae, sed, aspernatur fugit maxime ipsa repellat. Impedit,
              sequi assumenda! Reiciendis, id dolor!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              alias expedita, fugiat debitis numquam nam recusandae consequatur
              molestiae, sed, aspernatur fugit maxime ipsa repellat. Impedit,
              sequi assumenda! Reiciendis, id dolor!
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
