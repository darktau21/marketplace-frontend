import { z } from "zod";
// eslint-disable-next-line import/no-internal-modules
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/entities/session";
import { Routes } from "@/shared/config";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { NavTo } from "@/shared/ui/NavTo";
import styles from "./LoginForm.module.scss";

const schema = z.object({
  email: z.string().email("Невалидный Email адрес"),
  password: z
    .string()
    .min(8, "Минимальная длина пароля 8 символов")
    .max(32, "Максимальная длина пароля 32 символа"),
});

type FormInputs = z.infer<typeof schema>;

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });
  // const { isError, mutate } = useMutation({
  //   mutationFn: userApi.login,
  //   mutationKey: [userApi.QUERY_KEY, userApi.LOGGED_KEY],
  // });
  const navigate = useNavigate();
  const { mutate } = useLogin({
    onError: () => toast.error("Ошибка входа"),
    onSuccess: () => navigate(-1),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => void mutate(data);

  return (
    <Card variant="dark">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.heading}>Добро пожаловать снова!</h1>
        <Controller
          control={control}
          defaultValue=""
          name="email"
          render={({ field, fieldState: { error } }) => (
            <Input
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
              errorMessage={error?.message}
              placeholder="Пароль"
              required
              type="password"
              {...field}
            />
          )}
        />
        <Button className={styles.submit} type="submit">
          Войти
        </Button>
        <NavTo className={styles.register} to={Routes.REGISTER}>
          Создать новый аккаунт
        </NavTo>
      </form>
    </Card>
  );
};
