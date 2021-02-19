import styles from "../styles/TrackDetails.module.css";

type Props = {
  ImgSrc: string;
  title: string;
  artist: string;
};
export default function TrackDetails({ ImgSrc, title, artist }: Props) {
  return (
    <div className={styles.trackDetails}>
      <img className={styles.img} src={ImgSrc} alt="" />
      <div className={styles.title}>Title:{title}</div>
      <div className={styles.artist}> Artist:{artist}</div>
    </div>
  );
}
