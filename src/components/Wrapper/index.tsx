import { Container } from "./styles";

type WrapperProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

export function Wrapper({ children, size = "medium" }: WrapperProps) {
  return <Container size={size}>{children}</Container>;
}
