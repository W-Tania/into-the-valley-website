import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800">
      <p className="self-center py-12 text-center text-xl">
        <Link href="/login" className="text-accent-500 underline">
          Login
        </Link>{" "}
        to reserve this cabin
      </p>
    </div>
  );
}

export default LoginMessage;
