"use client";

import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface InputValueTypes {
  firstName: string;
  id: string;
  UpdatedAt: Date;
}

interface DataProps {
  user: InputValueTypes;
}

const EditComponent = ({ user }: DataProps) => {
  const [users, setUsers] = useState(user);
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const handleSave = async () => {
    setLoading(true);
    const res = await fetch(
      `https://taxplanner-test-json.onrender.com/user/${users.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...users }),
      }
    );

    if (res.status === 200) {
      router.push("/dashboard/userlist");
      router.refresh();
      setLoading(false);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        position: "top",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <div style={{ padding: "200px" }}>
      <label htmlFor="firstName">FirstName</label>
      <input
        name="firstName"
        value={users.firstName}
        onChange={(e) => setUsers({ ...users, firstName: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditComponent;
