import { Card } from "@/shared/ui/Card";
import { Promo } from "@/shared/ui/Promo";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const serviceCategories = [
    { id: "1", image_url: "/2.png", name_sector: "Медицина" },
    { id: "2", image_url: "/2.png", name_sector: "Медицина" },
    { id: "3", image_url: "/2.png", name_sector: "Медицина" },
    { id: "4", image_url: "/2.png", name_sector: "Медицина" },
    { id: "5", image_url: "/2.png", name_sector: "Медицина" },
    { id: "6", image_url: "/2.png", name_sector: "Медицина" },
  ];

  return (
    <>
      <section>
        <Promo />
      </section>
      <section className={styles['service-section']}>
        <div className="container">
          <h2 className={styles["services-heading"]}>Сфера услуг</h2>
          <div className={styles["cards-container"]}>
            {serviceCategories.map(({ id, image_url, name_sector }) => (
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
