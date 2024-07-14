import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { format } from "date-fns";

export const metadata = {
  title: "Update reservation",
};

export default async function Page({ params }) {
  const { bookingId } = params;
  const {
    cabinId,
    numGuests,
    startDate,
    endDate,
    observations,
    totalPrice,
    extrasPrice,
  } = await getBooking(bookingId);
  const { name, maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="mb-7 flex text-2xl font-semibold text-accent-400">
        Edit Reservation #{bookingId}
      </h2>
      <div className="my-4 flex justify-between text-sm text-primary-300">
        <span>
          {format(new Date(startDate), "EEE, dd MMM yyyy")} &mdash;
          {format(new Date(endDate), "EEE, dd MMM yyyy")} at Cabin {name}
        </span>
        <span>
          Total ${totalPrice} (including ${extrasPrice} extra)
        </span>
      </div>
      <UpdateReservationForm
        bookingId={bookingId}
        observations={observations}
        numGuests={numGuests}
        maxCapacity={maxCapacity}
      />
    </div>
  );
}
