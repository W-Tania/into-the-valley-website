"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  // Get search parameters from the URL, it returns a immutable object.
  // create a new object for manipulation using URLSearchParams
  const searchParams = useSearchParams();
  //Access Next.js router for navigation
  const router = useRouter();
  // Get the current pathname, not including query string
  const pathname = usePathname();

  //To mark current active filter
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    //to get searchParams from filter into URL

    const params = new URLSearchParams(searchParams);
    //Set the new value for capacity in the URLSearchParams object
    params.set("capacity", filter);
    //Use router.replace to navigate to new URL, without triggering a full page reload.
    //prevent page from scrolling to top
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
