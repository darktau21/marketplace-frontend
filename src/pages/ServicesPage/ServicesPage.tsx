import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CategoryFilter } from "@/features/categoryFilter";
import { PriceFilter } from "@/features/priceFilter/ui";
import { SearchBar } from "@/features/search";
import { Service } from "@/entities/service";
import { servicesApi } from "@/shared/api";
import styles from "./ServicesPage.module.scss";

export const ServicesPage = () => {
  const [priceFrom, setPriceFrom] = useState<number | undefined>();
  const [priceTo, setPriceTo] = useState<number | undefined>();
  const [searchText, setSearchText] = useState<string | undefined>();

  const { data: categories } = useQuery({
    queryFn: servicesApi.getServices,
    queryKey: [servicesApi.QUERY_KEY],
  });
  return (
    <div className={`container ${styles.content}`}>
      <div className={styles.filters}>
        <PriceFilter
          from={priceFrom}
          setFrom={setPriceFrom}
          setTo={setPriceTo}
          to={priceTo}
        />
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        {categories ? (
          <div className={styles["category-filter"]}>
            <CategoryFilter
              categories={categories.map(({ name_sector }) => name_sector)}
            />
          </div>
        ) : null}
      </div>
      <div>
        <Service
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus provident velit ex aperiam fugit, accusamus quasi molestias ipsam similique ipsum iste deleniti maiores veritatis cupiditate sapiente quidem id! Maiores, explicabo."
          issuerName="Имя инженера"
          name="Название услуги"
          price={100000}
        />
      </div>
    </div>
  );
};
