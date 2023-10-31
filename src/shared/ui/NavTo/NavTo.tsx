import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

import { Routes } from "@/shared/config";
import styles from "./NavTo.module.scss";

type Props = PropsWithChildren<{
  className?: string;
  to: Routes;
}>;

export const NavTo = ({ children, className, to }: Props) => {
  return (
    <NavLink className={`${styles.link} ${className}`} to={to}>
      {children}
    </NavLink>
  );
};
