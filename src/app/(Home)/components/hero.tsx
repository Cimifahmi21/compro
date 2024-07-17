import Image from "next/image";
export default function Hero() {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-screen-2xl mx-auto">
        <video
          className="overflow-hidden -z-10"
          controls={false}
          autoPlay
          muted
          loop
          src={"/pideo.mp4"}
          style={{ width: "100%", height: "100%" }}
        ></video>
      </div>
    </div>
  );
}
