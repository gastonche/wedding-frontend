import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import { Banner } from "../../organisms/Banner/Banner";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Banner />
      {/* <Title>Annette</Title>
      <Title variant="large">Ezra</Title>
      <Button>My Button</Button>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>

      <Text variant="large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text> */}
    </div>
  );
}
