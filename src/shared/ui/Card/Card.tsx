import cn from "classnames";
import { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

type Props = PropsWithChildren<{
  className?: string;
  variant?: "dark" | "light";
}>;

export const Card = ({ children, className, variant = "light" }: Props) => {
  return (
    <div className={cn(className, styles.card, styles[variant])}>
      {children}
    </div>
  );
};
