import Image from "next/image"

export default function Header () {
    return (
        <div>
            <Image src="/bannercase.jpg" width={1600} height={450} alt="case1" className="object-cover pt-10 h-[400px] w-full" />
        </div>
    )
}