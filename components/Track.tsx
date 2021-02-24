import styles from "../styles/Track.module.css";

type Props = {
  ImgSrc: string;
  artist: string;
  title: string;
  onClick?(): void;
  xxx: string;
};

export default function Track(props: Props) {
  return (
    <li className={styles.trackbox}>
      <img className={styles.image__track} src={props.ImgSrc} />
      <div className={styles.artist}>{props.artist}</div>
      <div className={styles.title}>{props.title}</div>
    </li>
  );
}
