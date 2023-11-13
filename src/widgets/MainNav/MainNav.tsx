import { useUser } from "@/entities/session";
import { Routes } from "@/shared/config";
import { Button } from "@/shared/ui/Button/Button";
import { Logo } from "@/shared/ui/Logo";
import { NavTo } from "@/shared/ui/NavTo";
import styles from "./MainNav.module.scss";

export const MainNav = () => {
  const { data: user } = useUser();

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.mainNav}>
          <Logo />
          <ul className={styles.links}>
            <li>
              <NavTo to={Routes.SERVICES}>Услуги</NavTo>
            </li>
            <li>
              <NavTo to={Routes.PRODUCTION_SERVICES}>
                Производственные услуги
              </NavTo>
            </li>
            <li>
              <NavTo to={Routes.CHAT}>Чат</NavTo>
            </li>
          </ul>
          <div>
            {user ? (
              <Button navTo={Routes.ACCOUNT}>Личный кабинет</Button>
            ) : (
              <Button navTo={Routes.LOGIN}>Вход</Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
