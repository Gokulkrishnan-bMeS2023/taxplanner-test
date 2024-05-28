// "use client";

// import React, { useEffect, useState } from "react";
import Link from "next/link";
// import axios from "axios";

async function fetchUsers() {
  const res = await fetch("https://taxplanner-test-json.onrender.com/user", {
    cache: "no-store",
  });
  return res.json();
}

const UsersPage = async () => {
  //   const [users, setUsers] = useState([]);
  const users = await fetchUsers();

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const res = await axios.get("https://taxplanner-test-json.onrender.com/user");
  //         setUsers(res.data);
  //       } catch (error) {
  //         console.error("Failed to fetch users:", error);
  //       }
  //     };

  //     fetchUsers();
  //   }, [users]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map((user: { id: string; firstName: string }) => (
          <li key={user.id}>
            {user.firstName}
            <Link href={`/dashboard/useredit/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
