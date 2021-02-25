import styles from "../styles/Detailstrack.module.css";
import { TrackfromApi } from "../utils/api";

type Track = {
  track: TrackfromApi;
};
export default function Detailstrack({ track }: Track) {
  return (
    <div className={styles.trackDetails}>
      <img className={styles.img} src={track.ImgSrc} alt="" />
      <div className={styles.title}>Title:{track.title}</div>
      <div className={styles.artist}> Artist:{track.artist}</div>
    </div>
  );
}
