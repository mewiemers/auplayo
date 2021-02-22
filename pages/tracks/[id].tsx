import { useRouter } from "next/router";
import { bringTrack, TrackfromApi } from "../../utils/api";
import { useState, useEffect } from "react";
import styles from "../../styles/Track.module.css";

export default function Tracki() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<TrackfromApi>(null);

  useEffect(() => {
    bringTrack(id).then((brandnewtrack) => {
      setTrack(brandnewtrack);
    });
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <img className={styles.image__track} src={track.ImgSrc} />
      <div className={styles.artist}>Artist:{track.artist}</div>
      <div className={styles.title}>Title: {track.title}</div>
    </div>
  );
}
// if {typeof id !=="string"}{
//   return;
// }
