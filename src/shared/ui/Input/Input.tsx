import cn from "classnames";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import styles from "./Input.module.scss";

type Props = {
  className?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function Input(
  { className, errorMessage, id, placeholder, required, ...props }: Props,
  inputRef: ForwardedRef<HTMLInputElement>
) {
  return (
    <label className={cn(styles.label, className)} htmlFor={id}>
      <input
        className={cn(styles.input, {
          [styles.error]: errorMessage,
        })}
        id={id}
        placeholder={`${placeholder}${required ? "*" : ""}`}
        ref={inputRef}
        {...props}
      />
      {errorMessage ? (
        <span className={styles["error-msg"]}>{errorMessage}</span>
      ) : null}
    </label>
  );
});
