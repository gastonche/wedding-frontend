import { classNames } from "../../../utils";
import styles from "./Title.module.css";
import colors from "../../../../styles/text-colors.module.css";

export default function Title({
  children,
  variant = "regular",
  color = "primary",
  className
}) {
  return (
    <h1
      className={classNames({
        [className]: true,
        [styles.title]: true,
        [styles[variant]]: true,
        [colors[color]]: true,
      })}
    >
      {children}
    </h1>
  );
}
