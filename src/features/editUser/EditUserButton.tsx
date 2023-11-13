import { useUser } from "@/entities/session";
import { Routes } from "@/shared/config";
import { Button } from "@/shared/ui/Button";

export const EditUserButton = () => {
  const { data: user } = useUser();

  if (!user) return null;

  return (
    <Button navTo={user.role ? Routes.EDIT_USER : Routes.EDIT_ROLE}>
      Редактировать
    </Button>
  );
};
