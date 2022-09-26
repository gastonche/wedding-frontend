import Title from "../../atoms/Title/Title";
import styles from "./Name.module.css";

export default function Name() {
  return (
    <div className={styles.root}>
      <div>
        <Title color="highlight" variant="large">Glwadys</Title>
        <Title color="highlight">&amp;</Title>
      </div>
      
      <Title color="highlight" variant="large">Ezechiel</Title>
    </div>
  );
}
