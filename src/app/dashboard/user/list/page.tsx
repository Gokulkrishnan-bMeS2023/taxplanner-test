import UserList from "@/components/Tables/UserList";

async function getData() {
  const res = await fetch(
    `https://taxplanner-test-json.onrender.com/user?UserType=${3}`
  );

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <UserList staffData={data} />
    </main>
  );
}
