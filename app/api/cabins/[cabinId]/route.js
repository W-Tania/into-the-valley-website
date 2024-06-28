import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

//functions needs to be named in the HTTP verb that are making request with
//GET, POST, PUT, PATCH, DELETE

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}

// export async function POST(){}
