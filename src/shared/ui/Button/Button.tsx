import { MouseEventHandler, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "@/shared/config";
import styles from "./Button.module.scss";

type Props = PropsWithChildren<{
  navTo?: Routes;
  onClick?: MouseEventHandler;
  variant?: "dark" | "light";
}>;

export const Button = ({
  children,
  navTo,
  onClick,
  variant = "dark",
}: Props) => {
  const classes = `${styles.button} ${styles[variant]}`;

  if (navTo) {
    return (
      <NavLink className={classes} to={navTo}>
        {children}
      </NavLink>
    );
  }

  return <button onClick={onClick}>{children}</button>;
};
