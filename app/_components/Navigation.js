import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  //auth works with cookies and headers, switching the route to dynamic rendering
  const session = await auth();

  return (
    <nav className="z-10 text-sm sm:text-base">
      <ul className="flex items-center gap-4 sm:gap-8 md:gap-16">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="flex items-center gap-4 transition-colors hover:text-accent-400"
            >
              <span className="hidden sm:inline">{session.user.name}</span>
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
            </Link>
          ) : (
            <Link
              href="/account"
              className="transition-colors hover:text-accent-400"
            >
              Guest
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
