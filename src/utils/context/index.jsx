"use client"

import { createContext } from "react";
export const UserContext = createContext();

async function getData() {
  const res = await fetch(
    "https://services.taxplanner.co.in/paymentdetails-json.aspx"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UserContextProvider({ children }) {
  const data = await getData();
  return (
    <UserContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
