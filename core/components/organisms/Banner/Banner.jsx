import Name from "../../molecules/Name/Name";
import bannerStyle from "./Banner.module.css";
import Image from "next/image";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

export function Banner() {
  return (
    <>
      <Name />
      <div className={bannerStyle.banner}>
        <div>
          <Title variant="regular">24.06.2022</Title>
          <Text variant="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            aut veritatis enim ad. Aperiam, quasi. Quaerat aspernatur assumenda,
            incidunt asperiores non sint aliquam officiis beatae adipisci error
            quasi nostrum reiciendis?
          </Text>
        </div>
        <div className={bannerStyle.banner__image}>
          <Image src={"/rings.jpg"} alt="rings" height="1000px" width="1000px" />
        </div>
      </div>
    </>
  );
}
