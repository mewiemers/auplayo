// import styles from "../styles/Greeting.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return <p onClick={() => router.back()}>Hello, &lt; Now playing</p>;
}
