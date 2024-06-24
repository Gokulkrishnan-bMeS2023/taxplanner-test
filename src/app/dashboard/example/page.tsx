// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ex() {
//   const [gokul, setGokul] = useState("");
//   const searchParams = useSearchParams();

//   const id = searchParams.get("id");

//   useEffect(() => {
//     const handleSubmit = async () => {
//       // Send the encryptedText to the .NET API for decryption
//       const response = await fetch("/api/decrypt", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id }),
//       });
//       const data = await response.json();
//       console.log("Decrypted Text:", data);
//       setGokul(data);
//     };
//     handleSubmit();
//   }, [id]);

//   return (
//     <div>
//       <h1>jk</h1>
//     </div>
//   );
// }

// "use client";
// import { TitleList } from "@/component-contents/TitleFilterData";
// import { decrypt } from "@/utils/crypto";
// import axios from "axios";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function example() {
//   const [decryptedData, setDecryptedData] = useState<string | null>(null);
//   const searchParams = useSearchParams();
//   const Type = searchParams.get("Type");
//   const router = useRouter();

//   console.log(decryptedData);

//   useEffect(() => {
//     const getData = async () => {
//       if (Type) {
//         const encryptedData = decodeURIComponent(Type as string);
//         try {
//           const data = decrypt(encryptedData);
//           setDecryptedData(await data);
//           // if (decryptedData) {
//           //   fetch("example.com", {
//           //     body: decryptedData,
//           //   });
//           //   const res = await axios.post("exa.com", {
//           //     userid: 1,
//           //     decryptedData,
//           //   });
//           // } else {
//           //   router.push("/dashboard");
//           // }
//         } catch (error) {
//           console.error("Error decrypting data:", error);
//         }
//       }
//     };
//     getData();
//   }, [Type]);

//   const title = TitleList.find((title) => title.Type === decryptedData);

//   return (
//     <div style={{ padding: "200px" }}>
//       <h1>page example</h1>
//       <h1>Title:{title?.Title}</h1>
//       <h1>decryptcode :{decryptedData}</h1>
//       <h1>encryptcode:{Type}</h1>
//     </div>
//   );
// }

// "use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { decrypt } from "@/utils/crypto";
// import { TitleList } from "@/component-contents/TitleFilterData";

// const TargetPage = () => {
//   const router = useRouter();
//   const [decryptedData, setDecryptedData] = useState<string | null>(null);
//   const [decryptedTitle, setDecryptedTitle] = useState<string | null>(null);
//   const searchParams = useSearchParams();
//   const Type = searchParams.get("Type");
//   const Title = searchParams.get("Title");

//   useEffect(() => {
//     const getdata = async () => {
//       if (Type) {
//         const encryptedData = decodeURIComponent(Type as string);
//         const encryptedTitle = decodeURIComponent(Title as string);
//         try {
//           const data = decrypt(encryptedData);
//           setDecryptedData(await data);
//         } catch (error) {
//           console.error("Error decrypting data:", error);
//         }
//       }
//     };
//     getdata();
//   }, []);

//   const title = TitleList.find((title) => title.Type === decryptedData);

//   return (
//     <div style={{ padding: "200px" }}>
//       <h1>Target Page</h1>
//       {decryptedData && decryptedData}
//       {/* <h1>{decryptedTitle}</h1> */}
//       <h1>{title?.Title}</h1>
//     </div>
//   );
// };

// export default TargetPage;

// pages/data.js
// app/payment-details/page.js

// import React from "react";

// async function fetchUsers() {
//   const res = await fetch("https://taxplanner-test-json.onrender.com/user", {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   return data;
// }

// const UsersPage = async () => {
//   const users = await fetchUsers();

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user: any) => (
//           <li key={user.id}>{user.firstName}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersPage;

// pages/query.tsx
// src/app/dashboard/example/page.tsx
"use client";
import { TitleList } from "@/component-contents/TitleFilterData";
import { decrypt } from "@/utils/crypto";
import { useSearchParams } from "next/navigation";

const QueryPage = async () => {
  const searchParams = useSearchParams();
  const myParam = searchParams.get("Type");

  const encryptedData = decodeURIComponent(myParam as string);
  const decryptedId = await decrypt(encryptedData);

  const title = TitleList.find((title) => title.Type === decryptedId);

  return (
    <div>
      <h1>Query Parameter Value</h1>
      <p>Value of "myParam": {title?.Title}</p>
    </div>
  );
};

export default QueryPage;
