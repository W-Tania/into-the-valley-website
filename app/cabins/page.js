import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

//data(Cabins) change from time to time, but not constantly.
//fetch data every 1 hour works for data that might change once everyday.
// export const revalidate = 3600;
//considering partial pre-rendering, it is best to put revalidate in the <CabinList /> within Suspense, keep this shell of page static
//after adding the filter, using searchParams make the page dynamic and not static, no need to revalidate

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  // searchParams only available on page.js(server), not on all server components
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      {/* dynamic componenet */}

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/* when filtered cabins change, the spinner doesn't show. 
      Because Navigation is wrapped in React transition. And for transition, suspense doesn't hide the already rendered content
      To fix it, give suspense a unique key */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
