import { classNames } from "../../../utils";
import TextStyles from "./Text.module.css";

export default function Text({ children, variant }) {
  return (
    <p
      className={classNames({
        [TextStyles.text]: true,
        [TextStyles[variant]]: true,
      })}
    >
      {children}
    </p>
  );
}
