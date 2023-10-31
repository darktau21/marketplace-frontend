import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/shared/config";
import styles from "./Logo.module.scss";

export const Logo = () => {
  const navigate = useNavigate();
  const handleNavigation: MouseEventHandler = () => navigate(Routes.HOME);

  return (
    <div className={styles.logo} onClick={handleNavigation}>
      <img
        alt="Маркетплейс инжиниринговых и производственных услуг"
        className={styles.img}
        src="/logo.png"
      />
    </div>
  );
};
