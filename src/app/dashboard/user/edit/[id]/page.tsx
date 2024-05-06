import UserEdit from "@/components/Form/UserEdit";

async function getData(params: { params: { id: string } }) {
  const res = await fetch(
    `https://taxplanner-test-json.onrender.com/user?id=${params.params.id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData({ params });

  return <UserEdit Data={data} />;
}
