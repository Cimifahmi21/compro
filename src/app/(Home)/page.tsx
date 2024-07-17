import Image from "next/image";
import About from "./images/about.jpg";
import Link from "next/link";
import Hero from "./components/hero";
import Overview from "./components/overview";
import CarouselComponent from "./carousel";
import Ceo from "./components/ceo";

export const metadata = {
  title: "home",
  description: "halaman depan",
};

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Overview />
      <CarouselComponent />

      {/* <h3 className="absolute inset-0 p-4 flex md:right-[70px] md:top-[500px] top-40 justify-between md:text-5xl text-3x1 text-bold text-white text-center">"Eat peacefully <br></br>heart content" </h3> */}

      {/* <div className="carousel carousel-center rounded-box">
        <div id="slide1" className=" relative carousel-item">
          <Image src="/carousel/CarAio1.png" alt="carousel1" width={400} height={380} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide11" className="btn text-white">❮</a>
            <a href="#slide2" className="btn text-white">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item">
          <Image src="/carousel/CarCase1.png" alt="carousel2" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide3" className="carousel-item">
          <Image src="/carousel/CarHs1.png" alt="carousel3" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide4" className="carousel-item">
          <Image src="/carousel/CarKey1.png" alt="carousel4" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide5" className="carousel-item">
          <Image src="/carousel/CarMoni1.png" alt="carousel5" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide6" className="carousel-item">
          <Image src="/carousel/CarMos1.png" alt="carousel6" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide7" className="carousel-item">
          <Image src="/carousel/CarMos1.png" alt="carousel7" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide8" className="carousel-item">
          <Image src="/carousel/CarMpd1.png" alt="carousel8" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide9" className="carousel-item">
          <Image src="/carousel/CarRam1.png" alt="carousel9" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide10" className="carousel-item">
          <Image src="/carousel/CarUsb1.png" alt="carousel10" width={400} height={380} />
          <div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div id="slide11" className="carousel-item">
          <Image src="/carousel/CarVga1.png" alt="carousel11" width={400} height={380} />
          <div>
            <a href="#slide10" className="btn text-white">❮</a>
            <a href="#slide1" className="btn text-white">❯</a>
          </div>
        </div>
        
      </div> */}
      {/* <Ceo/> */}
    </div>
  );
}
