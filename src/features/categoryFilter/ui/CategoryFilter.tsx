import { Card } from "@/shared/ui/Card";
import styles from "./CategoryFilter.module.scss";

type Props = {
  categories: string[];
};

export const CategoryFilter = ({ categories }: Props) => {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <Card key={category}>{category}</Card>
      ))}
    </div>
  );
};
