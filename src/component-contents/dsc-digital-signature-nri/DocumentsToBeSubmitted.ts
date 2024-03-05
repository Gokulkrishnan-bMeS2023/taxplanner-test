import { FaUser, FaFile, FaIdCard } from "react-icons/fa";

export const Documents = [
  {
    id: 1,
    title: "Digital Signature for Foreign citizens and NRI",
    DocumentList: [
      "Passport Size Photo",
      "Bank statement with bank seals and signature",
      "Passport front and back copy should be attested by local embassy / notarised of that country",
      "Copy of your Drivers License (appostile in case of NRI or Foreign person)",
    ],
    DocumentListIcons: [FaUser, FaFile, FaIdCard, FaFile],
  },
];
