// import { encrypt } from "@/utils/crypto";
// import Link from "next/link";
// async function fetchUsers() {
//   const res = await fetch("https://taxplanner-test-json.onrender.com/user", {
//     cache: "no-store",
//   });
//   return res.json();
// }

// const UsersPage = async () => {
//   const users = await fetchUsers();

//   return (
//     <ul style={{ padding: "200px" }}>
//       {users?.map(async (user: { id: string; firstName: string }) => (
//         <li key={user.id}>
//           {user.firstName}
//           <Link href={`/dashboard/useredit?userid=${await encrypt(user.id)}`}>
//             Edit Link
//           </Link>
//           {/* <Link href={`/dashboard/useredit?userid=${user.id}`}>Edit Link</Link> */}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default UsersPage;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page