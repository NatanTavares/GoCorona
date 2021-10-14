import Image from "next/image";

import GoCoronaSVG from "../../assets/goCorona.svg";
import AttentionSVG from "../../assets/Attention.svg";
import PlayButtonSVG from "../../assets/playButton.svg";

export function MainSection() {
  return (
    <section>
      <header>
        <Image src={GoCoronaSVG} alt="GoCorona" />

        <div>
          <nav>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SUPPORT</li>
            <li>CONTACT US</li>
          </nav>

          <button>DOWNLOAD</button>
        </div>
      </header>

      <div>
        <div>
          <h1>
            Take care of yours family&apos;s <strong>health</strong>
          </h1>
          <p>
            All in one destination for COVID-19 health queries. Consult 10,000+
            health workers about your concerns.
          </p>
          <button>GET STARTED</button>
        </div>

        <button>
          <Image src={PlayButtonSVG} alt="play button" />
          <p>Stay safe with GoCorona</p>
          <p>Watch Video</p>
        </button>
      </div>
      <div>
        <Image src={AttentionSVG} alt="Attention" />
        {/* background red */}
      </div>
    </section>
  );
}
