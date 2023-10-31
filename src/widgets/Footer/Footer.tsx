import { Routes } from "@/shared/config";
import { Logo } from "@/shared/ui/Logo";
import { NavTo } from "@/shared/ui/NavTo";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          <div className={styles.info}>
            <NavTo className={styles.policy} to={Routes.POLICY}>
              Политика конфиденциальности
            </NavTo>
            <a className={styles.contact} href="mailto:injener@gmail.com">
              injener@gmail.com
            </a>
            <a className={styles.contact} href="tel:+78005553535">
              8 (800) 555 35 55
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
