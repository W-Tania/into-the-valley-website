"use client";

import { differenceInDays } from "date-fns";
import { createReservation } from "../_lib/actions";
import { useReservation } from "./ReservationContext";
import FormSubmitButton from "./FormSubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  //Prepare data to create new bookings
  const startDate = range?.from;
  const endDate = range?.to;
  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createReservationWithDate = createReservation.bind(null, bookingData);

  return (
    <div>
      <div className="flex items-center gap-4 bg-primary-800 px-8 py-4 text-primary-300 md:px-16">
        <p>Logged in as {user.name}</p>
        <img
          // Important to display google profile images
          referrerPolicy="no-referrer"
          className="h-8 rounded-full"
          src={user.image}
          alt={user.name}
        />
      </div>

      <form
        // action={createReservationWithDate}
        action={async (formData) => {
          await createReservationWithDate(formData);
          resetRange();
        }}
        className="flex flex-col gap-5 bg-primary-900 px-8 py-10 text-lg md:px-16"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          {!(startDate && endDate) ? (
            <p className="text-base text-primary-300">
              Start by selecting dates
            </p>
          ) : (
            <FormSubmitButton>Reserve now</FormSubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
