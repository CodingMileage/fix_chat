import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export default function Product() {
  return (
    <section className="backdrop-blur-sm py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag text-3xl">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way of dealing with technical issues.
          </h2>
          <p className="section-description mt-5">
            Our AI infused technical support will effortlessly turn your
            problems into solutions.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="tube"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>

        <div className="flex justify-center py-36">
          <div className="font-bold text-3xl tracking-tighter bg-gradient-to-b from-white to-[#7108b3] text-transparent bg-clip-text mt-5">
            What FixChat Offers
          </div>
        </div>
      </div>
    </section>
  );
}
