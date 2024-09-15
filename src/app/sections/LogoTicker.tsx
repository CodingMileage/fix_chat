import acmeLogo from "@/assets/logo-acme.png";
import echoLogo from "@/assets/logo-echo.png";
import quantumLogo from "@/assets/logo-quantum.png";
import celestialLogo from "@/assets/logo-celestial.png"; // Corrected the typo here
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export default function LogoTicker() {
  return (
    <div className="py-8 backdrop-blur-md">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none animate-scroll">
            {" "}
            {/* Add animation class here */}
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
