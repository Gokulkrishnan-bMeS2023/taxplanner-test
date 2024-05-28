"use client";

import React, { useState } from "react";
import { encrypt } from "@/utils/crypto";
import LinkComponent from "@/components/Link";

export default function EncryptComponent() {
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const handleEncrypt = async () => {
    const encrypted = await encrypt(text);
    setEncryptedText(encrypted);
  };
  const handleSubmit = async () => {
    // Send the encryptedText to the .NET API for decryption
    const response = await fetch("/api/decrypt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ encryptedText }),
    });
    const data = await response.json();
    console.log("Decrypted Text:", data.decryptedText);
  };

  const encryptedParam = encrypt("1");

  return (
    <div style={{ padding: "200px" }}>
      <h1>Encrypt Text</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value.toString())}
        placeholder="Enter text to encrypt"
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <textarea
        value={encryptedText}
        readOnly
        placeholder="Encrypted text will appear here"
      />
      <button onClick={handleSubmit}>Send to Server for Decryption</button>
      <LinkComponent href="/dashboard/example?Type=" label="Salaried Person" encryptedParam={encrypt("1")} />
    </div>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import { encrypt } from "@/utils/crypto";
// import React from "react";
// import Link from "next/link";

// export default function page() {
//   const router = useRouter();
//   const handleNavigation = () => {
//     const param = "1";
//     const encryptedParam = encrypt(param);
//     router.push(
//       `/dashboard/example?Type=${encodeURIComponent(encryptedParam)}`
//     );
//   };
//   const encryptedParam = encrypt("1");
//   const encryptedParamT = encrypt("salary");
//   const encryptedParam1 = encrypt("2");
//   return (
//     <div style={{ padding: "200px" }}>
//       <button onClick={handleNavigation}>Go to Target Page</button>
//       <br />
//       <Link
//         href={`/dashboard/example?Type=${encodeURIComponent(
//           encryptedParam
//         )}&Title=${encodeURIComponent(encryptedParamT)}`}
//       >
//         salary link
//       </Link>
//       <br />
//       <Link
//         href={`/dashboard/example?Type=${encodeURIComponent(encryptedParam1)}`}
//       >
//         salary link
//       </Link>
//     </div>
//   );
// }
