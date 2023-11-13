import { useQuery } from "@tanstack/react-query";
import { servicesApi } from "@/shared/api";
import { Alert } from "@/shared/ui/Alert";
import { Card } from "@/shared/ui/Card";
import { Promo } from "@/shared/ui/Promo";
import { Spinner } from "@/shared/ui/Spinner";
import styles from "./HomePage.module.scss";

// const serviceCategories = [
//   { id: "1", image_url: "/2.png", name_sector: "Медицина" },
//   { id: "2", image_url: "/2.png", name_sector: "Медицина" },
//   { id: "3", image_url: "/2.png", name_sector: "Медицина" },
//   { id: "4", image_url: "/2.png", name_sector: "Медицина" },
//   { id: "5", image_url: "/2.png", name_sector: "Медицина" },
//   { id: "6", image_url: "/2.png", name_sector: "Медицина" },
// ];

export const HomePage = () => {
  const {
    data: serviceCategories,
    isError,
    isLoading,
  } = useQuery({
    queryFn: servicesApi.getServices,
    queryKey: [servicesApi.QUERY_KEY],
  });

  return (
    <>
      <section>
        <Promo />
      </section>
      <section className={styles["service-section"]}>
        <div className="container">
          <h2 className={styles["services-heading"]}>Сфера услуг</h2>
          <div className={styles["cards-container"]}>
            {isError ? (
              <div className={styles["alert-wrapper"]}>
                <Alert text="Категорий пока нет" />
              </div>
            ) : null}
            {isLoading ? (
              <div className={styles["alert-wrapper"]}>
                <Spinner />
              </div>
            ) : null}
            {serviceCategories
              ? serviceCategories.map(({ id, image_url, name_sector }) => (
                  <Card key={id}>
                    <div className={styles.card}>
                      <img
                        alt={name_sector}
                        className={styles["card-img"]}
                        src={image_url}
                      />
                      <p className={styles["card-text"]}>{name_sector}</p>
                    </div>
                  </Card>
                ))
              : null}
          </div>
        </div>
      </section>
    </>
  );
};
