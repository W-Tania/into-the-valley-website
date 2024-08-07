"use client";

//want to display form status on button
//the hook can not be used in the component which contains the form.
//it needs to be inside a component that is rendered inside the form
//* since using hook, the button needs to be client component

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

export default function FormSubmitButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? <SpinnerMini /> : children}
    </button>
  );
}
