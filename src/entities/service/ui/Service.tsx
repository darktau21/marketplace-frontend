import { Card } from "@/shared/ui/Card";
import styles from "./Service.module.scss";

type Props = {
  description: string;
  issuerName: string;
  name: string;
  price: number;
};

export const Service = ({ description, issuerName, name, price }: Props) => {
  return (
    <Card className={styles.service}>
      <h3 className={styles.issuer}>{issuerName}</h3>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.date}>01.01.2023</span>
      <p className={styles.description}>{description}</p>
      <span className={styles.price}>
        {new Intl.NumberFormat("ru-RU", {
          currency: "RUB",
          style: "currency",
        }).format(price)}
      </span>
    </Card>
  );
};
