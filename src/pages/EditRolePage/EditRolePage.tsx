import { EditRoleForm } from "@/features/editRole";
import { useUser } from "@/entities/session";

export const EditRolePage = () => {
  const { data: user } = useUser();

  if (!user) return null;
  return (
    <div>
      <EditRoleForm />
    </div>
  );
};
