import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

//SideNavigation - client component
//server actions can be called from the client but still be executed on server

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span className="hidden sm:inline">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
