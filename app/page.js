import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-10 md:mt-28">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests in Stardew Valley"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl lg:text-7xl text-primary-50 mb-20 tracking-tight font-normal">
          Welcome to Stardew Valley
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-4 sm:px-8 sm:py-6 text-primary-800 text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore cabins
        </Link>
      </div>
    </main>
  );
}
