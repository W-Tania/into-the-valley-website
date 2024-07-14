import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="grid border border-primary-800 sm:flex">
      <div className="relative aspect-square min-h-32">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col px-6 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {numNights} Nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold uppercase text-yellow-200">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold uppercase text-green-200">
              upcoming
            </span>
          )}
        </div>

        <p className="text-sm text-primary-300">
          {format(new Date(startDate), "EEE, dd MMM yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, dd MMM yyyy")}
        </p>

        <div className="mt-auto gap-5">
          <div className="flex items-center gap-5">
            <p className="text-lg font-semibold text-accent-400">
              ${totalPrice}
            </p>
            <p className="text-primary-300">&bull;</p>
            <p className="text-base text-primary-300">
              {numGuests} guest{numGuests > 1 && "s"}
            </p>
          </div>
          <p className="text-right text-sm font-light text-primary-400">
            Booked on {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex min-h-[50px] min-w-[100px] max-w-[150px] grow flex-row border-t border-primary-800 sm:flex-col sm:border-l sm:border-t-0">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex flex-grow items-center justify-center gap-2 border-primary-800 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
