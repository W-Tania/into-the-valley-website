import { updateReservation } from "../_lib/actions";
import FormSubmitButton from "./FormSubmitButton";

function UpdateReservationForm({
  bookingId,
  observations,
  numGuests,
  maxCapacity,
}) {
  return (
    <form
      className="flex flex-col gap-8 bg-primary-900 px-6 py-8 text-base sm:px-16"
      action={updateReservation}
    >
      <input type="hidden" name="bookingId" value={bookingId} />
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          defaultValue={numGuests}
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
          defaultValue={observations}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <FormSubmitButton>Update Reservation</FormSubmitButton>
      </div>
    </form>
  );
}

export default UpdateReservationForm;
