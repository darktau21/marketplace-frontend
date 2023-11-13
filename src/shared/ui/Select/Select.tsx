import cn from "classnames";
import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import styles from "./Select.module.scss";

type Option = {
  label: string;
  value: number | string;
};

type Props = {
  className?: string;
  options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef(function Select(
  { className, options }: Props,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return (
    <select className={cn(className, styles.select)} ref={ref}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});
