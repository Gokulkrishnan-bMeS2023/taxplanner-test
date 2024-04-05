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

// export async function getAmountByFilingType(filingType) {
//   const jsonUrl = "https://services.taxplanner.co.in/paymentdetails-json.aspx";
  
//   try {
//     const response = await fetch(jsonUrl);
//     const data = await response.json();
    
//     const amountItem = data.find(item => item.FilingType === filingType);
    
//     return amountItem ? amountItem.Amount : "NA";
//   } catch (error) {
//     throw new Error("Error retrieving JSON data: " + error);
//   }
// }


// YourComponent.js or pages/YourPage.js

// import { getAmountByFilingType } from '../path/to/taxService';

// // Example usage inside a Next.js component
// export default function YourComponent() {
//   // You can use this function inside useEffect, useState, or directly in render
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const amount = await getAmountByFilingType("someFilingType");
//         console.log("Amount:", amount);
//       } catch (error) {
//         console.error(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     // Your JSX code
//     <div>
//       {/* Your component content */}
//     </div>
//   );
// }
