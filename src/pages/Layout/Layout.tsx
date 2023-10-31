import { Outlet } from "react-router-dom";
import { Footer } from "@/widgets/Footer/Footer";
import { MainNav } from "@/widgets/MainNav";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
