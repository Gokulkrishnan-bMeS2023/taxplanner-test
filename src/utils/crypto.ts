// // utils/cryptoUtils.ts
// import crypto from "crypto";
// const ENCRYPTION_KEY = "MAKV2SPBNI99212";
// // Must be 256 bits (32 characters)
// const SALT = new Uint8Array([
//   0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76,
// ]);
// // Salt must be at least 8 bytes
// function getKeyAndIv(password: crypto.BinaryLike, salt: crypto.BinaryLike) {
//   const key = crypto.pbkdf2Sync(password, salt, 1000, 32, "sha256");
//   const iv = crypto.pbkdf2Sync(password, salt, 1000, 16, "sha256");
//   return { key, iv };
// }
// export async function encrypt(text: string) {
//   const { key, iv } = getKeyAndIv(ENCRYPTION_KEY, SALT);
//   const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
//   let encrypted = cipher.update(text, "utf8", "base64");
//   encrypted += cipher.final("base64");
//   return encrypted;
// }

// export async function decrypt(encryptedText: string): Promise<string> {
//   const { key, iv } = getKeyAndIv(ENCRYPTION_KEY, SALT);
//   const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
//   let decrypted = decipher.update(encryptedText, "base64", "utf8");
//   decrypted += decipher.final("utf8");
//   return decrypted;
// }

// utils/crypto.ts
// import CryptoJS from "crypto-js";

// const SECRET_KEY = "g"; // Use a secure key and store it securely

// export const encrypt = (text: string): string => {
//   return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
// };

// export const decrypt = (cipherText: string): string => {
//   const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
//   return bytes.toString(CryptoJS.enc.Utf8);
// };



// import crypto from "crypto";

// const ENCRYPTION_KEY = "MAKV2SPBNI99212"; // Must be 256 bits (32 characters)
// const SALT = new Uint8Array([0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76]); // Salt must be at least 8 bytes

// function getKeyAndIv(password: crypto.BinaryLike, salt: crypto.BinaryLike) {
//   const key = crypto.pbkdf2Sync(password, salt, 1000, 32, "sha256");
//   const iv = crypto.pbkdf2Sync(password, salt, 1000, 16, "sha256");
//   return { key, iv };
// }

// export async function encrypt(text: string): Promise<string> {
//   const { key, iv } = getKeyAndIv(ENCRYPTION_KEY, SALT);
//   const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
//   let encrypted = cipher.update(text, "utf8", "base64");
//   encrypted += cipher.final("base64");
//   return encrypted;
// }

// export async function decrypt(encryptedText: string): Promise<string> {
//   const { key, iv } = getKeyAndIv(ENCRYPTION_KEY, SALT);
//   const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
//   let decrypted = decipher.update(encryptedText, "base64", "utf8");
//   decrypted += decipher.final("utf8");
//   return decrypted;
// }



import crypto from 'crypto';

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY ?? 'MAKV2SPBNI99212'; // 32 characters
const SALT = Buffer.from('4976616E204D65647665646576', 'hex'); // Use the same salt as in your decryption function

function getKeyAndIv(password: string, salt: Buffer) {
  const key = crypto.pbkdf2Sync(password, salt, 1000, 32, 'sha256');
  const iv = crypto.pbkdf2Sync(password, salt, 1000, 16, 'sha256');
  return { key, iv };
}

export function encrypt(text: string): string {
  const { key, iv } = getKeyAndIv(ENCRYPTION_KEY, SALT);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

export function decrypt(text: string): string {
    const { key, iv } = getKeyAndIv(ENCRYPTION_KEY, SALT);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(text, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
