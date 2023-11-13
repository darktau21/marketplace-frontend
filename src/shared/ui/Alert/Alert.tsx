import cn from "classnames";
// eslint-disable-next-line import/no-internal-modules
import { FaCircleExclamation } from "react-icons/fa6";
import styles from "./Alert.module.scss";

type Props = {
  text: string;
  variant?: "error" | "warn";
};

export const Alert = ({ text, variant = "error" }: Props) => {
  return (
    // <div className={`${styles.alert} ${styles[variant]}`}>
    <div className={cn(styles.alert, styles[variant])}>
      <FaCircleExclamation />
      <span>{text}</span>
    </div>
  );
};
