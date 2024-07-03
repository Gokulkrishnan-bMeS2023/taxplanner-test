// import { TitleList } from "@/component-contents/TitleFilterData";
// import { decrypt } from "@/utils/crypto";

// const DecryptComponent = async ({ Type }: any) => {
//   const encryptedData = decodeURIComponent(Type as string);
//   const decryptedId = await decrypt(encryptedData);
//   const title = TitleList.find((title) => title.Type === decryptedId);

//   return <>{title?.Title}</>;
// };

// export default DecryptComponent;

import { TitleList } from "@/component-contents/TitleFilterData";
import { decrypt } from "@/utils/crypto";

interface DecryptComponentProps {
  Type: any;
}

const DecryptComponent = ({ Type }: DecryptComponentProps) => {
  const decryptedId = decrypt(decodeURIComponent(Type)); // Decrypt the input Type
  const title = TitleList.find((title) => title.Type === decryptedId); // Find corresponding title

  return <>{title?.Title}</>; // Render title if found, otherwise render nothing
};

export default DecryptComponent;
