import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="Into the Valley logo"
        className="scale-75 md:scale-100"
      />
      <span className="text-sm sm:text-base font-semibold text-primary-100">
        Into the Valley
      </span>
    </Link>
  );
}

export default Logo;
