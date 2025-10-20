import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>About</h1>
      <p>Ini halaman tentang saya 😄</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum dolor ducimus labore animi et sapiente sunt vitae dolorem ab, consectetur veritatis dignissimos velit doloribus sit, adipisci beatae voluptatum quam?</p>
      <Link href="/">← Kembali ke Home</Link>
    </main>
  );
}
