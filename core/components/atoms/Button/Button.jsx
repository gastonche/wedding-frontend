import { classNames } from "../../../utils";
import styles from "./Button.module.css";

export default function Button({ children, variant = "primary" }) {
  return (
    <button
      className={classNames({ [styles.btn]: true, [styles[variant]]: true})}
    >
      {children}
    </button>
  );
}
