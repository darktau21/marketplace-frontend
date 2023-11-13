// eslint-disable-next-line import/no-internal-modules
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.button} onClick={() => navigate(-1)}>
      <FaCircleArrowLeft />
      <span>Вернуться</span>
    </button>
  );
};
