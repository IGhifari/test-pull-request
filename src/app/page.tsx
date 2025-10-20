import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Halaman Utama</h1>
      <p>Selamat datang di website saya!</p>
      <Link href="/about"></Link>
    </main>
  );
}
