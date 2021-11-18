import Image from "next/image";
import { useModal } from "../../../hooks/useModal";

import { Button } from "../../Button";
import { Wrapper } from "../../Wrapper";
import { Scoreboard } from "../../Scoreboard";

import { Container, Content, Summary } from "./styles";
import FakePlayerSVG from "../../../assets/fakePlayer.svg";

export function ContactSection() {
  const { openModal } = useModal();

  return (
    <Container id="contactUs">
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
            <Button label="Send message" onClick={() => openModal("contact")} />
          </Content>
        </Wrapper>

        <Image src={FakePlayerSVG} alt="fake video player" />
      </Summary>
    </Container>
  );
}
