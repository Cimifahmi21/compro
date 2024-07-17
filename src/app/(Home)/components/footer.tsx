import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 font-extrabold">
      <nav>
        <h6 className="footer-title">Social Media</h6>
        <Link href="https://www.instagram.com/digital.alliance/" target="_blank" className="link link-hover">Instagram</Link>
        <Link href="https://www.youtube.com/c/DigitalAllianceOfficial" target="_blank" className="link link-hover">YouTube</Link>
        <Link href="https://www.facebook.com/digitalalliance" target="_blank" className="link link-hover">Facebook</Link>
        <Link href="https://www.tiktok.com/@digital.alliance" target="_blank" className="link link-hover">TikTok</Link>
      </nav>
    </footer>
  );
}
