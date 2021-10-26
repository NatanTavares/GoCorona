import Image from "next/image";

import { Container, Content, ImageWrapper } from "./styles";

type CardProps = {
  iconSrc: string;
  title: string;
  children: string;
};

export function Card({ children, iconSrc, title }: CardProps) {
  return (
    <Container>
      <ImageWrapper>
        <Image src={iconSrc} alt={title} />
      </ImageWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{children}</p>
      </Content>
    </Container>
  );
}
