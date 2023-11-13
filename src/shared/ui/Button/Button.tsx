import cn from "classnames";
import { MouseEventHandler, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "@/shared/config";
import styles from "./Button.module.scss";

type Props = PropsWithChildren<{
  className?: string;
  navTo?: Routes;
  onClick?: MouseEventHandler;
  type?: "button" | "reset" | "submit";
  variant?: "dark" | "light";
}>;

export const Button = ({
  children,
  className,
  navTo,
  onClick,
  type,
  variant = "dark",
}: Props) => {
  if (navTo) {
    return (
      <NavLink
        className={cn(styles.button, styles[variant], className)}
        to={navTo}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
