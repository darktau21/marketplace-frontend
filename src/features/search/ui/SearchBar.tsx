import { Dispatch, SetStateAction } from "react";
import { Input } from "@/shared/ui/Input";

type Props = {
  searchText?: string;
  setSearchText: Dispatch<SetStateAction<string | undefined>>;
};

export const SearchBar = ({ searchText, setSearchText }: Props) => {
  return (
    <Input
      defaultValue={""}
      onChange={(e) => void setSearchText(e.target.value)}
      placeholder="Поиск по названию услуги"
      value={searchText}
    />
  );
};
