import styles from "../styles/Track.module.css";

type Props = {
  ImgSrc: string;
  artist: string;
  title: string;
  onClick?(): void;
  xxx: string;
};

// export function LikeButton(props: Like) {
//   return (

//   );
// }

export default function Track(props: Props) {
  return (
    <li className={styles.trackbox}>
      <img className={styles.image__track} src={props.ImgSrc} />
      <div className={styles.artist}>{props.artist}</div>
      <div className={styles.title}>{props.title}</div>
      <button className={styles.like} onClick={() => props.onClick()}>
        {props.xxx}
      </button>
    </li>
  );
}
