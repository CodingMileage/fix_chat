import acmeLogo from "@/assets/logo-acme.png";
import echoLogo from "@/assets/logo-echo.png";
import quantumLogo from "@/assets/logo-quantum.png";
import celestrialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export default function LogoTicker() {
  return (
    <>
      <div className="py-8 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div className="flex gap-14 flex-none">
              <Image src={acmeLogo} className="logo-ticker-image" />
              <Image src={echoLogo} className="logo-ticker-image" />
              <Image src={quantumLogo} className="logo-ticker-image" />
              <Image src={celestrialLogo} className="logo-ticker-image" />
              <Image src={pulseLogo} className="logo-ticker-image" />
              <Image src={apexLogo} className="logo-ticker-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
