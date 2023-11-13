import { Spinner } from "@/shared/ui/Spinner";
import styles from "./LoadingPage.module.scss";

export const LoadingPage = () => {
  return (
    <div className={styles["loading-page"]}>
      <Spinner />
    </div>
  );
};
