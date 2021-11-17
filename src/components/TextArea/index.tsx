import { forwardRef, TextareaHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

import { InputContact } from "../Modals/Contact";

import { Container } from "./styles";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  labelId: "body";

  label: string;
  error: boolean;
};

const TextAreaComponent = (
  { labelId, label, error, ...rest }: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>
) => {
  return (
    <Container htmlFor={labelId} error={error}>
      <p>{label}:</p>
      <textarea id={labelId} {...rest} ref={ref} />
    </Container>
  );
};

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & ReturnType<UseFormRegister<InputContact>>
>(TextAreaComponent);
