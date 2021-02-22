import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return <p onClick={() => router.back()}>&lt; Now playing</p>;
}
