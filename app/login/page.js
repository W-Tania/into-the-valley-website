import SignInButton from "../_components/SignInButton";

export const metadata = { title: "Login" };

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-xl font-semibold">
        Sign in to access your guest profile and reservations
      </h2>
      <SignInButton />
    </div>
  );
}
