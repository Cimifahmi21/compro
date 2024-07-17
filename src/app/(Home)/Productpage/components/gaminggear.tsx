import Image from "next/image";

export default function Gaminggear() {
  return (
    <div>
      <h1 className="text-6xl text-center pt-12">GAMING GEAR</h1>
      <div className="flex-row lg:flex gap-8 pt-24">
        <div className="card bg-white w-96 shadow-xl">
          <figure>
            <Image
              src="/carousel/CarUsb1.png"
              width={380}
              height={400}
              alt="case1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card bg-white w-96 shadow-xl">
          <figure>
            <Image
              src="/carousel/CarUsb1.png"
              width={380}
              height={400}
              alt="case1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card bg-white w-96 shadow-xl">
          <figure>
            <Image
              src="/carousel/CarUsb1.png"
              width={380}
              height={400}
              alt="case1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card bg-white w-96 shadow-xl">
          <figure>
            <Image
              src="/carousel/CarUsb1.png"
              width={380}
              height={400}
              alt="case1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card bg-white w-96 shadow-xl">
          <figure>
            <Image
              src="/carousel/CarUsb1.png"
              width={380}
              height={400}
              alt="case1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card bg-white w-96 shadow-xl">
          <figure>
            <Image
              src="/carousel/CarUsb1.png"
              width={380}
              height={400}
              alt="case1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
