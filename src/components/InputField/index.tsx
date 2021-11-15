import { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../../contexts/modalContext";

import { Container } from "./styles";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  labelId: "username" | "password" | "remember";
  label: string;
  error: boolean;
};

const InputFieldComponent = (
  { labelId, label, error, ...rest }: InputFieldProps,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <Container htmlFor={labelId} error={error}>
      {rest.type === "checkbox" ? <span>{label}: </span> : <p>{label}:</p>}
      <input id={labelId} {...rest} ref={ref} />
    </Container>
  );
};

export const InputField = forwardRef<
  HTMLInputElement,
  InputFieldProps & ReturnType<UseFormRegister<Inputs>>
>(InputFieldComponent);
