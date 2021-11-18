import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";
import PlayButtonSVG from "../../assets/playButton.svg";

type PlayButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function PlayButton({ ...rest }: PlayButtonProps) {
  return (
    <Container {...rest}>
      <Image src={PlayButtonSVG} alt="play button" />
      <div>
        <p>Stay safe with GoCorona</p>
        <p>WATCH VIDEO</p>
      </div>
    </Container>
  );
}
