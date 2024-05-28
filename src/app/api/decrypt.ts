// export default async function handler(
//   req: { method: string; body: { encryptedText: any } },
//   res: any
// ) {
//   if (req.method === "POST") {
//     const { encryptedText } = req.body;

//     // Forward the request to the .NET API
//     const response = await fetch("https://your-dotnet-api-endpoint/decrypt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ encryptedText }),
//     });
//     const data = await response.json();
//     res.status(200).json(data);
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

export default async function handler(
  req: { method: string; body: { id: any } },
  res: any
) {
  if (req.method === "POST") {
    const { id } = req.body;
    console.log(id);

    // Forward the request to the .NET API
    const response = await fetch(
      `https://taxplanner-test-json.onrender.com/user?id=${id}`
      // {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ id }),
      // }
    );
    const data = await response.json();
    console.log(data);
    
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
