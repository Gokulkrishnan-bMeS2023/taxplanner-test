export async function GET() {
  const res = await fetch("https://services.taxplanner.co.in/paymentdetails-json.aspx");
  const data = await res.json();

  return Response.json({ data });
}
