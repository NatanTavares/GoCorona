import { Container } from "./styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  colorSchema?: "red" | "blue";
};

export function Button({ label, colorSchema = "red", ...rest }: ButtonProps) {
  return (
    <Container {...rest} colorSchema={colorSchema}>
      {label.toUpperCase()}
    </Container>
  );
}
