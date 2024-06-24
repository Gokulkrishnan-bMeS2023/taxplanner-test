// import { encrypt } from "@/utils/crypto";
// import UserList from ".";

// async function fetchUsers() {
//   const res = await fetch(
//     "https://taxplanner-test-json.onrender.com/user?UserType=2&UserType=1",
//     {
//       cache: "no-store",
//     }
//   );
//   return res.json();
// }

// const UsersPage = async () => {
//   const users = await fetchUsers();

//   const encryptedUsers = await Promise.all(
//     users.map(async (user: any) => ({
//       ...user,
//       id: String(await encrypt(encodeURIComponent(user.id))), // Ensure the encrypted id is a string
//     }))
//   );

//   return <UserList staffDatas={encryptedUsers} />;
// };

// export default UsersPage;

import { encrypt } from "@/utils/crypto";
import UserList from ".";

async function fetchUsers() {
  const res = await fetch(
    "https://taxplanner-test-json.onrender.com/user?UserType=2&UserType=1",
    {
      cache: "no-store",
    }
  );
  return res.json();
}

const UsersPage = async () => {
  const users = await fetchUsers();

  const encryptedUsers = await Promise.all(
    users.map(async (user: any) => ({
      ...user,
      id: encodeURIComponent(await encrypt(user.id)), // Ensure the encrypted id is encoded
    }))
  );

  return <UserList staffDatas={encryptedUsers} />;
};

export default UsersPage;
