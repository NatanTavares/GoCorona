import Image from "next/image";

import { Button } from "../../Button";
import { Wrapper } from "../../Wrapper";
import { useModal } from "../../../hooks/useModal";

import { Container, Content, MockContainer } from "./styles";
import AuthMockupSVG from "../../../assets/authMockup.svg";

export function AuthSection() {
  const { openModal } = useModal();

  return (
    <Container id="login">
      <MockContainer>
        <Image src={AuthMockupSVG} alt="Mockup" />
      </MockContainer>

      <Wrapper>
        <Content>
          <article>
            <h1>
              Stay safe with Go<strong>Corona.</strong>
            </h1>
            <p>
              24x7 Support and user friendly mobile platform to bring healthcare
              to your fingertips. Signup and be a part of the new health
              culture.
            </p>
          </article>
          <Button label="sign in" onClick={() => openModal("signIn")} />
        </Content>
      </Wrapper>
    </Container>
  );
}
