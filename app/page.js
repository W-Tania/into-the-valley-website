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
        <h1 className="mb-20 text-5xl font-normal tracking-tight text-primary-50 lg:text-7xl">
          Welcome to Stardew Valley
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-4 text-base font-semibold text-primary-800 transition-all hover:bg-accent-600 sm:px-8 sm:py-6 sm:text-lg"
        >
          Explore cabins
        </Link>
      </div>
    </main>
  );
}
