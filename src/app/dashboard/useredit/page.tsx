// import EditComponent from ".";

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const res = await fetch("https://taxplanner-test-json.onrender.com/user/");
//   const users = await res.json();

//   return users.map((user: any) => ({
//     id: user.id,
//   }));
// }

// async function fetchUser(id: string) {
//   const res = await fetch(
//     `https://taxplanner-test-json.onrender.com/user/` + id,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     console.log("gokul");
//   }
//   return res.json();
// }

// export default async function UserEdit({ params }: { params: any }) {
//   const User = await fetchUser(params.id);
//   console.log(User);

//   return <EditComponent user={User} />;
// }

import { notFound } from "next/navigation";
import EditComponent from ".";
import { decrypt } from "@/utils/crypto";

async function fetchUser(id: string) {
  const res = await fetch(
    `https://taxplanner-test-json.onrender.com/user/` + id,
    { cache: "no-store" }
  );
  // if (!res.ok) {
  // notFound();
  // }
  return res.json();
}

export default async function UserEdit({
  searchParams,
}: {
  searchParams: { userid: any };
}) {
  const User = await fetchUser(await decrypt(searchParams.userid));
  // const User = await fetchUser(searchParams.userid);

  return <EditComponent user={User} />;
}
