import { Outlet } from "react-router-dom";
import { BackButton } from "@/shared/ui/BackButton";
import styles from "./CleanLayout.module.scss";

export const CleanLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["clean-layout"]}>
        <div className={styles.back}>
          <BackButton />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
