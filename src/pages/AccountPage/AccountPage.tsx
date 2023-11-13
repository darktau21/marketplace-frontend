import { EditUserButton } from "@/features/editUser";
import { useUser } from "@/entities/session";
import { Info } from "@/entities/user";
import styles from "./AccountPage.module.scss";

export const AccountPage = () => {
  const { data: user } = useUser();

  if (!user) return null;

  return (
    <div className="container">
      <div className={styles.content}>
        <div>
          <Info
            avatarSrc={
              "https://dummyimage.com/150x150/000/fff&text=%D0%97%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0"
            }
            birthday={user.birthday}
            editButton={<EditUserButton />}
            email={user.email}
            fullName={`${user.name} ${user.surname}`}
            phone={user.phone}
          />
        </div>
      </div>
    </div>
  );
};
