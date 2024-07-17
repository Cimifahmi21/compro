import Image from "next/image";

interface IProd {
  judul: string;
  deskripsi: string;
  image: string;
}

export default function Temptfetch({ judul, deskripsi, image }: IProd) {
  return (
    // <div className="w- bg-blue-900/50">
    //   <div className="card card-compact bg-base-100 w-96 shadow-xl">
    //     <figure>
    //       <Image src={`https:${image}`} width={380} height={400} alt="produk" />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">{judul}</h2>
    //       <p>{deskripsi}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="w-[300px] ">
      <div className="bg-blue-800/30 rounded-md flex flex-col items-center justify-center">
        <Image className="p-2 rounded-sm" src={`https:${image}`} alt="produk" width={300} height={300} />
        <h1 className="text-white text-2xl font-semibold pt-2 text-center">{judul}</h1>
        <p className="h-[500px] text-sm p-2">{deskripsi}</p>
      </div>
    </div>
  );
}
