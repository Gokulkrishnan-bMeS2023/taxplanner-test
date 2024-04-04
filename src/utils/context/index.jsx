
"use client";

import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const DataFetch = async () => {
      try {
        const res = await axios.get(
          "https://services.taxplanner.co.in/paymentdetails-json.aspx"
        );
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    DataFetch();
  }, []);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;


// "use client"

// import { createContext } from "react";
// export const UserContext = createContext();

// async function getData() {
//   const res = await fetch(
//     "https://services.taxplanner.co.in/paymentdetails-json.aspx"
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function UserContextProvider({ children }) {
//   const data = await getData();
//   return (
//     <UserContext.Provider
//       value={{
//         data,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// }
