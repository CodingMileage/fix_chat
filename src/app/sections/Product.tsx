import productImage from "@/assets/product-image.png";
import Image from "next/image";

export default function Product() {
  return (
    <section className="backdrop-blur-sm py-24">
      <div className="container">
        <div className="tag">Boost your productivity</div>
        <h2>A more effective way of dealing with technical issues.</h2>
        <p>
          Our AI infused technical support will effortlessly turn your problems
          into solutions.
        </p>
        <Image src={productImage} />
      </div>
    </section>
  );
}
