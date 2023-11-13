import { Dispatch, SetStateAction } from "react";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import styles from "./PriceFilter.module.scss";

type Props = {
  from?: number;
  setFrom: Dispatch<SetStateAction<number | undefined>>;
  setTo: Dispatch<SetStateAction<number | undefined>>;
  to?: number;
};

export const PriceFilter = ({ from, setFrom, setTo, to }: Props) => {
  return (
    <Card className={styles.filter}>
      <span>Цена</span>
      <Input
        className={styles.input}
        defaultValue={""}
        onChange={(e) => setFrom(+e.target.value)}
        placeholder="От"
        value={from}
      />
      <Input
        className={styles.input}
        defaultValue={""}
        onChange={(e) => setTo(+e.target.value)}
        placeholder="До"
        value={to}
      />
    </Card>
  );
};
