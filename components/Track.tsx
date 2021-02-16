import styles from "../styles/Track.module.css";

type Props = {
  ImgSrc: string;
  artist: string;
  title: string;
};

type Like = {
  onClick?(): void;
  xxx: string;
};

export function LikeButton(props: Like) {
  return (
    <button className={styles.like} onClick={() => props.onClick()}>
      {props.xxx}
    </button>
  );
}

export default function Track(props: Props) {
  return (
    <div className={styles.trackbox}>
      <img className={styles.image__track} src={props.ImgSrc} />
      <h4 className={styles.artist}>Dingens</h4>
      <span className={styles.title}>Viech</span>
    </div>
  );
}
