import styles from "../styles/Greeting.module.css";

type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  return (
    <p>
      <span className={styles.name}>Hello, {props.name}</span>
    </p>
  );
}
