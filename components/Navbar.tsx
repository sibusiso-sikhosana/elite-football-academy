import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Elite Football Academy
        </Link>

        <div className="flex items-center gap-6">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/services">Services</Link>

          <Link href="/contact">Contact</Link>

          <Link
            href="/book-session"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Book Session
          </Link>

        </div>

      </div>
    </nav>
  );
}