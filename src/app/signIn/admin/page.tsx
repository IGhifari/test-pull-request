import Navbar from "@/app/components/navbar";

export default function Admin() {
    return (
        <main style={{ padding: 20 }}>
            <nav>
                <Navbar />
            </nav>
            <h1 className="text-6xl">Halaman Admin</h1>
            <p>Selamat datang di halaman admin!</p>
        </main>
    );
}