import Image from "next/image";

import { Container } from "./styles";
import PlayButtonSVG from "../../assets/playButton.svg";

export function PlayButton() {
  return (
    <Container onClick={() => {}}>
      <Image src={PlayButtonSVG} alt="play button" />
      <div>
        <p>Stay safe with GoCorona</p>
        <p>WATCH VIDEO</p>
      </div>
    </Container>
  );
}
