import Image from "next/image";

import { Container, Content, ImageContainer } from "./styles";
import RectanglesSVG from "../../assets/rectangles.svg";

type ScoreboardProps = {};

export function Scoreboard({}: ScoreboardProps) {
  return (
    <Container>
      <Content>
        <div>
          <strong>2m</strong>
          <span>USERS</span>
        </div>

        <div>
          <strong>78</strong>
          <span>COUNTRIES</span>
        </div>

        <div>
          <strong>10,000+</strong>
          <span>MEDICAL EXPERTS</span>
        </div>
      </Content>

      <ImageContainer>
        <Image src={RectanglesSVG} alt="Rectangles SVG" />
      </ImageContainer>
    </Container>
  );
}
