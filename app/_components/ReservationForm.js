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
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-4 gap-4 flex items-center">
        <p>Logged in as {user.name}</p>
        <img
          // Important to display google profile images
          referrerPolicy="no-referrer"
          className="h-8 rounded-full"
          src={user.image}
          alt={user.name}
        />

        {/* <div className="flex  items-center">
          <p></p>
          
        </div> */}
      </div>

      <form
        // action={createReservationWithDate}
        action={async (formData) => {
          await createReservationWithDate(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
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
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
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
