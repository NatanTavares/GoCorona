import Image from "next/image";
import { useModal } from "../../../hooks/useModal";
import { useNotification } from "../../../hooks/useNotification";

import { Button } from "../../Button";
import { Wrapper } from "../../Wrapper";
import { Scoreboard } from "../../Scoreboard";

import {
  ButtonWrapper,
  Container,
  Content,
  ImageWrapper,
  ScoreboardWrapper,
  Summary,
} from "./styles";
import FakePlayerSVG from "../../../assets/fakePlayer.svg";

export function ContactSection() {
  const { openModal } = useModal();
  const { emitterWarnNotification } = useNotification();

  return (
    <Container id="contactUs">
      <ScoreboardWrapper>
        <Scoreboard />
      </ScoreboardWrapper>

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

            <ButtonWrapper>
              <Button
                label="Send message"
                onClick={() => openModal("contact")}
              />
            </ButtonWrapper>
          </Content>
        </Wrapper>

        <ImageWrapper>
          <button
            onClick={() =>
              emitterWarnNotification(
                `We are working on it!  Soon this functionality will be available`
              )
            }
          >
            <Image src={FakePlayerSVG} alt="fake video player" />
          </button>
        </ImageWrapper>
      </Summary>
    </Container>
  );
}
