"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  //assume all inputs are unsafe
  if (!/^[a-zA-Z0-9]{6,20}$/.test(nationalID))
    throw new Error(
      "Please provide a valid national ID. Alphanumeric between 6-20 digits. Only numbers and letters are allowed"
    );

  const updateData = { nationality, countryFlag, nationalID };

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  await new Promise((res) => setTimeout(res, 2000));

  //1.Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  //2.Authorization
  //check if the reservation to be deleted belongs to current user
  //or can use supabase query to check guestId
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking!");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const bookingId = Number(formData.get("bookingId"));
  console.log(formData);

  //1.Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  //2.Authorization
  //check if the reservation to be updated belongs to current user
  //or can use supabase query to check guestId
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking!");

  //3.Data to be updated
  const updatedFields = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  //4.mutation
  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .select()
    .single();

  //5.Error handling
  if (error) {
    console.error(error);
    throw new Error("Reservation could not be updated");
  }

  //6.Revalidation
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  //7.Redirecting
  redirect("/account/reservations");
}
