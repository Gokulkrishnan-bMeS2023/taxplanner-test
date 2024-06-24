"use client";

// import React, { useState } from "react";
// import { encrypt } from "@/utils/crypto";
// import LinkComponent from "@/components/Link";

// export default function EncryptComponent() {
//   const [text, setText] = useState("");
//   const [encryptedText, setEncryptedText] = useState("");
//   const handleEncrypt = async () => {
//     const encrypted = await encrypt(text);
//     setEncryptedText(encrypted);
//   };
//   const handleSubmit = async () => {
//     // Send the encryptedText to the .NET API for decryption
//     const response = await fetch("/api/decrypt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ encryptedText }),
//     });
//     const data = await response.json();
//     console.log("Decrypted Text:", data.decryptedText);
//   };

//   const encryptedParam = encrypt("1");

//   return (
//     <div style={{ padding: "200px" }}>
//       <h1>Encrypt Text</h1>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value.toString())}
//         placeholder="Enter text to encrypt"
//       />
//       <button onClick={handleEncrypt}>Encrypt</button>
//       <textarea
//         value={encryptedText}
//         readOnly
//         placeholder="Encrypted text will appear here"
//       />
//       <button onClick={handleSubmit}>Send to Server for Decryption</button>
//       <LinkComponent href="/dashboard/example?Type=" label="Salaried Person" encryptedParam={encrypt("1")} />
//     </div>
//   );
// }

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

import {
  Box,
  Button,
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { encrypt } from "@/utils/crypto";

export default async function DashboardCard() {

  return (
    <Card
      padding={"120px"}
      minH={"220px"}
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      border={"1px solid #e3e6f0"}
    >
      <Box>
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
          gap={6}
        >
          <Button
            as={Link}
            color={"#DFE4FD"}
            backgroundColor={"#2D50D6"}
            borderColor={"#2D50D6"}
            _hover={{
              bg: "#00abed",
              transform: "translateY(-2px)",
              boxShadow: "md",
            }}
            w={"200px"}
            href={`/dashboard/example?Type=${encodeURIComponent(
              await encrypt("1")
            )}`}
          >
            encrypt
          </Button>
        </Box>
        <Box>
          <Box
            display={"flex"}
            ml={4}
            mt={6}
            gap={1}
            alignItems={"center"}
            fontSize={"small"}
            fontWeight={700}
          >
            <FaCalendarDays />
            <Text>Not Filed Yet</Text>
          </Box>
          <TableContainer>
            <Table size={"sm"} display={"inline-block"} color={"black"}>
              <Thead>
                <Tr>
                  <Th border={"none"} color={"black"}>
                    Status
                  </Th>
                  <Th border={"none"} color={"black"}>
                    Date
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border={"none"}>Done</Td>
                  <Td border={"none"} display={"flex"} gap={1}>
                    <FaRegCalendarAlt />
                    <Text>09/20/02</Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Card>
  );
}

