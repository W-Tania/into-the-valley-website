//specify font
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | Into the Valley",
    default: "Welcome | Into the Valley",
  },
  description:
    "Comfortable cabin resort, located in the heart of the Stardew Valley, escape the hustle and bustle of the city life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-6 md:px-12 pt-12 pb-[120px] grid ">
          <main className="max-w-7xl mx-auto w-full">
            {/* passing/rendering server components as props insider client components */}
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
