import { TitleList } from "@/component-contents/TitleFilterData";
import { decrypt } from "@/utils/crypto";

const DecryptComponent = async ({ Type }: any) => {
  const encryptedData = decodeURIComponent(Type as string);
  const decryptedId = await decrypt(encryptedData);
  const title = TitleList.find((title) => title.Type === decryptedId);

  return <>{title?.Title}</>;
};

export default DecryptComponent;
