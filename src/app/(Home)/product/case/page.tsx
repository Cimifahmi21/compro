import Image from "next/image";
import Header from "./components/header";
import case1 from '@/app/(Home)/product/case/assetCase/case1.png'

export default function Case () {
    return (
        <div className="">
            <Header/>
            <Image src={case1} alt="case" width={100} height={100} />
        </div> 
    )
}