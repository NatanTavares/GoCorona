import Image from "next/image";

import { Container, Content, ImageContainer } from "./styles";
import RectanglesSVG from "../../assets/rectangles.svg";

type ScoreboardProps = {};

export function Scoreboard({}: ScoreboardProps) {
  const user = 2;
  const countries = 78;
  const doctors = 10;

  return (
    <Container>
      <Content>
        <div>
          <strong>{user}m</strong>
          <span>USERS</span>
        </div>

        <div>
          <strong>{countries}</strong>
          <span>COUNTRIES</span>
        </div>

        <div>
          <strong>{doctors},000+</strong>
          <span>MEDICAL EXPERTS</span>
        </div>
      </Content>

      <ImageContainer>
        <Image src={RectanglesSVG} alt="Rectangles SVG" />
      </ImageContainer>
    </Container>
  );
}
