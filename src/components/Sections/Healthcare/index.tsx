import Image from "next/image";
import { useNotification } from "../../../hooks/useNotification";

import { Card } from "../../Card";

import {
  ApplicationStoreButton,
  CardsWrapper,
  Container,
  Content,
  ImageContainer,
} from "./styles";
import MedicSVG from "../../../assets/medic.svg";
import PeopleSVG from "../../../assets/people.svg";
import HeartRateSVG from "../../../assets/heartRate.svg";
import AppleStoreSVG from "../../../assets/appleStore.svg";
import GooglePlaySVG from "../../../assets/googlePlay.svg";
import FourRectangles from "../../../assets/fourRectangles.svg";

export function HealthcareSection() {
  const { emitterWarnNotification } = useNotification();

  return (
    <Container id="features">
      <article>
        <h1>
          <strong>Healthcare </strong>
          at your Fingertips.
        </h1>
        <p>
          Bringing premium healthcare features to your fingertips. User friendly
          mobile platform to bring healthcare to your fingertips. Signup and be
          a part of the new health culture.
        </p>
      </article>

      <CardsWrapper>
        <ImageContainer>
          <Image src={FourRectangles} alt="rectangles" />
        </ImageContainer>

        <Content>
          <Card title="Symptom Checker" iconSrc={PeopleSVG}>
            Check if you are infected by COVID-19 with our Symptom Checker.
          </Card>
          <Card title="24x7 Medical support" iconSrc={MedicSVG}>
            Consult with 10,000+ health workers about your concerns.
          </Card>
          <Card title="Conditions" iconSrc={HeartRateSVG}>
            Bringing premium healthcare features to your fingertips.
          </Card>
        </Content>
      </CardsWrapper>

      <footer>
        <ApplicationStoreButton>
          <Image
            src={GooglePlaySVG}
            alt="GooglePlay"
            onClick={() =>
              emitterWarnNotification(
                "We are working on it! Soon this functionality will be available"
              )
            }
          />
        </ApplicationStoreButton>

        <ApplicationStoreButton>
          <Image
            src={AppleStoreSVG}
            alt="AppleStore"
            onClick={() =>
              emitterWarnNotification(
                "We are working on it! Soon this functionality will be available"
              )
            }
          />
        </ApplicationStoreButton>
      </footer>
    </Container>
  );
}
