"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

async function fetchUser(id: string) {
  const res = await fetch(
    `https://taxplanner-test-json.onrender.com/user/${id}`,
    { cache: "no-store" }
  );
  return res.json();
}

const EditUserPage = ({ params }: { params: any }) => {
  const [user, setUser] = useState([] || null);
  const [firstName, setName] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    fetchUser(id).then((data) => {
      setUser(data);
      setName(data.firstName);
    });
  }, [id]);

  const handleSave = async () => {
    await fetch(`https://taxplanner-test-json.onrender.com/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, firstName }),
    });
    router.push("/dashboard/userlist");
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ padding: "200px" }}>
      <h1>Edit User</h1>
      <label htmlFor="firstName">FirstName</label>
      <input name="firstName" value={firstName} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <Link href={"/dashboard/userlist"}>LINK B</Link>
    </div>
  );
};

export default EditUserPage;
