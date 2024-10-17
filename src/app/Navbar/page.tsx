import Link from "next/link";

export default function Navbar () {
    return (
        <div className="flex items-center justify-center h-20 bg-black text-white gap-5 text-1xl">
            <Link href="/">Home</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/About">About</Link>
        </div>
    )
}