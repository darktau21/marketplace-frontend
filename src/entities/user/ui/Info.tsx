import { ReactNode } from "react";
import { Card } from "@/shared/ui/Card";
import styles from "./Info.module.scss";

type Props = {
  avatarSrc: string;
  birthday?: string;
  editButton: ReactNode;
  email: string;
  fullName: string;
  phone?: string;
};

export const Info = ({
  avatarSrc,
  birthday,
  editButton,
  email,
  fullName,
  phone,
}: Props) => {
  return (
    <Card className={styles.info}>
      <div className={styles["avatar-wrapper"]}>
        <img alt={fullName} loading="lazy" src={avatarSrc} />
      </div>
      <div>
        <h2 className={styles.name}>{fullName}</h2>
      </div>
      <div className={styles["item-heading"]}>Дата рождения</div>
      <div className={styles.item}>
        {birthday
          ? new Date(+birthday).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })
          : "Не указано"}
      </div>
      <div className={styles["item-heading"]}>Почта</div>
      <div className={styles.item}>{email}</div>
      <div className={styles["item-heading"]}>Номер телефона</div>
      <div className={styles.item}>{phone ?? "Не указано"}</div>
      <div className={styles["edit-button"]}>{editButton}</div>
    </Card>
  );
};
