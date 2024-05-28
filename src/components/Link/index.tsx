import Link from "next/link";

interface Props {
  encryptedParam: Promise<string>;
  label: string;
  href: string;
}
export default async function LinkComponent({
  encryptedParam,
  label,
  href,
}: Props) {
  return (
    <Link href={`${href}${encodeURIComponent(await encryptedParam)}`}>
      {label}
    </Link>
  );
}
