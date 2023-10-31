import styles from "./Promo.module.scss";

export const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className="container">
        <h1 className={styles.heading}>
          Маркетплейс инжиниринговых и производственных услуг
        </h1>
        <p className={styles.description}>Услуги в разных сферах</p>
      </div>
    </div>
  );
};
