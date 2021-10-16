import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components/Button";

import { Container, Navigation } from "./styles";
import GoCoronaSVG from "../../assets/goCorona.svg";

export function Header() {
  return (
    <Container>
      <Image src={GoCoronaSVG} alt="GoCorona" />

      <div>
        <Navigation>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/">FEATURES</Link>
          </li>
          <li>
            <Link href="/">SUPPORT</Link>
          </li>
          <li>
            <Link href="/">CONTACT US</Link>
          </li>
        </Navigation>

        {/* The button must be hidden when on the cellular phone */}
        <Button label="download" colorSchema="blue" />
      </div>
    </Container>
  );
}
