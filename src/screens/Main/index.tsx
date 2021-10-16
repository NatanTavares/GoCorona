import Image from "next/image";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import AttentionSVG from "../../assets/Attention.svg";
import PlayButtonSVG from "../../assets/playButton.svg";

export function MainSection() {
  return (
    <section>
      <Header />

      {/* <div>
        <div>
          <h1>
            Take care of yours family&apos;s <strong>health</strong>
          </h1>
          <p>
            All in one destination for COVID-19 health queries. Consult 10,000+
            health workers about your concerns.
          </p>
          <Button label="GET STARTED" />
        </div>

        <button>
          <Image src={PlayButtonSVG} alt="play button" />
          <p>Stay safe with GoCorona</p>
          <p>Watch Video</p>
        </button>
      </div>
      <div className="redBackground">
        <Image src={AttentionSVG} alt="Attention" />
      </div> */}
    </section>
  );
}
