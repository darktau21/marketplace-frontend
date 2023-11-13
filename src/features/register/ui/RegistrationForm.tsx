import { z } from "zod";
// eslint-disable-next-line import/no-internal-modules
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRegister } from "@/entities/session";
import { Routes } from "@/shared/config";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { NavTo } from "@/shared/ui/NavTo";
import styles from "./RegistrationForm.module.scss";

const schema = z.object({
  email: z.string().email("Невалидный Email адрес"),
  name: z
    .string()
    .min(2, "Минимальная длина имени 2 символа")
    .max(32, "Максимальная длина имени 32 символа"),
  password: z
    .string()
    .min(8, "Минимальная длина пароля 8 символов")
    .max(32, "Максимальная длина пароля 32 символа"),
  surname: z
    .string()
    .min(2, "Минимальная длина фамилии 2 символа")
    .max(32, "Максимальная длина фамилии 32 символа"),
});

type FormInputs = z.infer<typeof schema>;

export const RegistrationForm = () => {
  const { control, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });
  // const { isError, mutate } = useMutation({
  //   mutationFn: userApi.login,
  //   mutationKey: [userApi.QUERY_KEY, userApi.LOGGED_KEY],
  // });
  const navigate = useNavigate();
  const { mutate } = useRegister({
    onError: () => toast.error("Ошибка регистрации"),
    onSuccess: () => navigate(-1),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => void mutate(data);

  return (
    <Card variant="dark">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.heading}>Регистрация</h1>
        <Controller
          control={control}
          defaultValue=""
          name="surname"
          render={({ field, fieldState: { error } }) => (
            <Input
              errorMessage={error?.message}
              placeholder="Фамилия"
              required
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="name"
          render={({ field, fieldState: { error } }) => (
            <Input
              errorMessage={error?.message}
              placeholder="Имя"
              required
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="email"
          render={({ field, fieldState: { error } }) => (
            <Input
              className={styles["wide-input"]}
              errorMessage={error?.message}
              placeholder="Адрес эл. почты"
              required
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="password"
          render={({ field, fieldState: { error } }) => (
            <Input
              className={styles["wide-input"]}
              errorMessage={error?.message}
              placeholder="Пароль"
              required
              type="password"
              {...field}
            />
          )}
        />
        <Button className={styles.submit} type="submit">
          Зарегистрироваться
        </Button>
        <NavTo className={styles.register} to={Routes.LOGIN}>
          Уже есть аккаунт?
        </NavTo>
      </form>
    </Card>
  );
};
