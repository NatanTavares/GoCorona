import Image from "next/image";

import { Button } from "../../Button";
import { Scoreboard } from "../../Scoreboard";
import { Wrapper } from "../../Wrapper";

import { Container, Content, Summary } from "./styles";
import FakePlayerSVG from "../../../assets/fakePlayer.svg";

export function ContactSection() {
  return (
    <Container>
      <Scoreboard />

      <Summary>
        <Wrapper>
          <Content>
            <article>
              <h1>
                Talk to <strong>experts.</strong>
              </h1>
              <p>
                Book appointments or submit queries into thousands of forums
                concerning health issues and prevention against noval Corona
                Virus.
              </p>
            </article>
            <Button label="features" />
          </Content>
        </Wrapper>

        <Image src={FakePlayerSVG} alt="fake video player" />
      </Summary>
    </Container>
  );
}
