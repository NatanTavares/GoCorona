import Image from "next/image";
import Link from "next/link";
import { useNotification } from "../../hooks/useNotification";

import { Button } from "../../components/Button";

import { Container, Navigation } from "./styles";
import GoCoronaSVG from "../../assets/goCorona.svg";

export function Header() {
  const { emitterWarnNotification } = useNotification();

  return (
    <Container>
      <Image src={GoCoronaSVG} alt="GoCorona" />

      <div>
        <Navigation>
          <li>
            <Link href="#home">HOME</Link>
          </li>
          <li>
            <Link href="#login">LOGIN</Link>
          </li>

          <li>
            <Link href="#contactUs">CONTACT US</Link>
          </li>
          <li>
            <Link href="#features">FEATURES</Link>
          </li>
        </Navigation>

        <Button
          label="download"
          colorSchema="blue"
          onClick={() =>
            emitterWarnNotification(
              `We are working on it!  Soon this functionality will be available`
            )
          }
        />
      </div>
    </Container>
  );
}
