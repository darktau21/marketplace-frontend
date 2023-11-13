import { Controller, useForm } from "react-hook-form";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Select } from "@/shared/ui/Select";
import styles from "./EditRole.module.scss";

type FieldValues = {
  role: "client" | "engineer";
};

const options = [
  {
    label: "Клиент",
    value: "client",
  },
];

export const EditRoleForm = () => {
  const { control, handleSubmit } = useForm<FieldValues>();

  return (
    <Card variant="dark">
      <form className={styles.form}>
        <h1 className={styles.heading}>Выберите роль</h1>
        <Controller
          control={control}
          defaultValue="client"
          name="role"
          render={({ field }) => <Select options={options} {...field} />}
        />
        <Button className={styles.submit} type="submit">
          Войти
        </Button>
      </form>
    </Card>
  );
};
