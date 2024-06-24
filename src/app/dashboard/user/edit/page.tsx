// import UserEdit from "@/components/Form/UserEdit";
// import { decrypt } from "@/utils/crypto";

// async function getData(id: string) {
//   const res = await fetch(
//     `https://taxplanner-test-json.onrender.com/user?id=${id}`,
//     {
//       cache: "no-store",
//     }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

// export default async function Page({
//   searchParams,
// }: {
//   searchParams: { id: string };
// }) {
//   const id = searchParams.id;
//   const encryptedData = decodeURIComponent(id as string);
//   const data = await getData(await decrypt(encryptedData));

//   return <UserEdit Data={data} />;
// }


import UserEdit from "@/components/Form/UserEdit";
import { decrypt } from "@/utils/crypto";

async function getData(id: string) {
  const res = await fetch(
    `https://taxplanner-test-json.onrender.com/user?id=${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const id = searchParams.id;
  const encryptedData = decodeURIComponent(id as string);
  const decryptedId = await decrypt(encryptedData);
  const data = await getData(decryptedId);

  return <UserEdit Data={data} />;
}
