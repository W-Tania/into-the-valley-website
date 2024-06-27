"use client";

import { createContext, useContext, useState } from "react";

//create context
const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

//create component which will hold the state, and provide value to rest of the tree
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

//create custom hook to consume the context
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) throw new Error("Context was use ouside provider");
  return context;
}

export { ReservationProvider, useReservation };
