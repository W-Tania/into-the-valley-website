import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  //auth works with cookies and headers, switching the route to dynamic rendering
  const session = await auth();

  return (
    <nav className="z-10 text-base">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <span>{session.user.name}</span>
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
              className="hover:text-accent-400 transition-colors"
            >
              Guest
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
