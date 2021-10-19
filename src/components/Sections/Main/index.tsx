import Image from "next/image";

import { Header } from "../../Header";
import { Button } from "../../Button";
import { Wrapper } from "../../Wrapper";
import { PlayButton } from "../../PlayButton";

import { Container, Content, RedAside, Started, Illustration } from "./styles";
import AttentionSVG from "../../../assets/Attention.svg";

export function MainSection() {
  return (
    <Container>
      <Header />

      <Content>
        <Wrapper>
          <Started>
            <article>
              <h1>
                Take care of yours family&apos;s <strong>health.</strong>
              </h1>
              <p>
                All in one destination for COVID-19 health queries.
                <br />
                Consult 10,000+ health workers about your concerns.
              </p>
            </article>
            <Button label="Get started" />
          </Started>
        </Wrapper>

        <PlayButton />
      </Content>

      <RedAside />
      <Illustration>
        <Image src={AttentionSVG} alt="Attention" />
      </Illustration>
    </Container>
  );
}
