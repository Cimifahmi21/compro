import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <Image src="/logo3.jpeg" alt="about" width={400} height={400} />
        <div>
          <h1 className="text-5xl font-bold">Digital Alliance</h1>
          <p className="py-6">
            Digital Alliance didirikan pada tahun 2005. Sejak awal, mereka fokus
            pada produk-produk komputer, terutama komponen-komponen untuk gaming
            dan multimedia. Brand ini cepat menjadi populer di kalangan
            penggemar game di Indonesia karena produk-produk mereka yang
            berkualitas dan terjangkau. Mereka mulai mengembangkan berbagai
            macam produk seperti kartu grafis, motherboard, casing, power
            supply, dan aksesori gaming lainnya. Digital Alliance berhasil
            memposisikan dirinya sebagai salah satu pemain utama di pasar
            perangkat keras komputer di Indonesia. Mereka dikenal dengan
            strategi pemasaran yang efektif dan dukungan yang baik kepada
            komunitas pengguna komputer, terutama gamer. Seiring berjalannya
            waktu, Digital Alliance terus mengembangkan produk-produknya dengan
            mengikuti perkembangan teknologi terbaru. Mereka juga aktif dalam
            berbagai kolaborasi dengan merek-merek terkenal di industri komputer
            global. Salah satu faktor keberhasilan Digital Alliance adalah
            komitmen mereka terhadap komunitas gaming di Indonesia. Mereka tidak
            hanya menjual produk, tetapi juga aktif dalam mendukung acara-acara
            gaming, kompetisi, dan acara-acara komunitas lainnya.
          </p>
        </div>
      </div>
    </div>
  );
}
