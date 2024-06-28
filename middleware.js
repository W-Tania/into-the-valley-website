// Redirect to about page with config
// import { NextResponse } from "next/server";
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "./app/_lib/auth";
export const middleware = auth;

//middleware to protect the account route
export const config = {
  matcher: ["/account"],
};
