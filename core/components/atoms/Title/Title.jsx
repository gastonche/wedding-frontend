import { classNames } from "../../../utils";
import styles from "./Title.module.css";
import colors from "../../../../styles/text-colors.module.css";

export default function Title({
  children,
  variant = "regular",
  color = "primary",
}) {
  return (
    <h1
      className={classNames({
        [styles.title]: true,
        [styles[variant]]: true,
        [colors[color]]: true,
      })}
    >
      {children}
    </h1>
  );
}
