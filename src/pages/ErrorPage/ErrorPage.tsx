import { Routes } from "@/shared/config";
import { Button } from "@/shared/ui/Button";
import styles from "./ErrorPage.module.scss";

type Props = {
  code: number;
  message: string;
};

export const ErrorPage = ({ code, message }: Props) => {
  return (
    <div className={styles["error-page"]}>
      <h1 className={styles.code}>{code}</h1>
      <p className={styles.message}>{message}</p>
      <Button navTo={Routes.HOME} variant="light">
        Вернуться на главную
      </Button>
    </div>
  );
};
