import Image from "next/image";
import Link from "next/link"
export default function Overview() {
  return (
    <div className="py-10 justify-center flex h-auto">
      <div className="flex-1 text-center justify-center items-center place-content-center px-5">
        <p className="pb-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae asperiores ex! Alias temporibus dolorum doloremque consequatur quibusdam dolore veritatis odio sapiente. In illo sed quas magni cumque nam a.
        </p>
        <button className="text-center bg-white rounded-lg px-5 py-2"><Link href="/aboutus" className="mx-auto hover:text hover:text-orange-25 hover:scale-100">See More</Link></button>
        </div>
        <div className="flex-1 pr-5">
          <Image
            src="/logo2.jpg"
            width={777}
            height={100}
            alt="Picture of the author"
            className="object-cover"
          />
        <div>
        </div>
        
        </div>
      </div>
  );
}
