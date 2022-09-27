import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import DressCode from "../../molecules/DressCode/DressCode";
import Gallery from "../../molecules/Gallery/Gallery";
import Story from "../../molecules/Story/Story";
import { Banner } from "../../organisms/Banner/Banner";
import Program from "../../organisms/Program/Program";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Banner />
      <Program />
      <DressCode />
      <Story />
      <Gallery />
    </div>
  );
}
