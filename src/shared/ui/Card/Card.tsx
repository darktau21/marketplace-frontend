import { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

type Props = PropsWithChildren<{
  variant?: "dark" | "light";
}>;

export const Card = ({ children, variant = "light" }: Props) => {
  let color;

  switch (variant) {
    case "dark":
      color = styles.dark;
      break;
    case "light":
      color = styles.light;
      break;
  }

  return <div className={`${styles.card} ${color}`}>{children}</div>;
};
