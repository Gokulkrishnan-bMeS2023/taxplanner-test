export const getAmountByFilingType = async (
  filingType: string
): Promise<string> => {
  const jsonUrl = "https://services.taxplanner.co.in/paymentdetails-json.aspx";
  try {
    const response = await fetch(jsonUrl);
    const data = await response.json();
    const amountItem = data.find(
      (item: { FilingType: string; Amount: string }) =>
        item.FilingType === filingType
    );
    return amountItem ? amountItem.Amount : "NA";
  } catch (error) {
    throw new Error("Error retrieving JSON data: " + error);
  }
};