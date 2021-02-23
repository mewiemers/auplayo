import { useRouter } from "next/router";
import styles from "../../styles/Audio.module.css";
import { bringTracks, TrackfromApi } from "../../utils/api";
import { useState, useEffect } from "react";
import AudioPlayer from "../../components/Audio";

export default function Tracki() {
  const router = useRouter();
  const { id } = router.query;

  const [tracks, setTracks] = useState<TrackfromApi[]>(null);
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    if (typeof id !== "string" || favorite === null) {
      return;
    }
    if (favorite) {
      localStorage.setItem("favoriteTrack", id);
    }
    if (!favorite) {
      localStorage.removeItem("favoriteTrack");
    }
  }, [favorite]);

  useEffect(() => {
    bringTracks().then((brandnewtracks) => {
      setTracks(brandnewtracks);
    });
    setFavorite(id === localStorage.getItem("favoriteTrack"));
  }, [id]);

  if (!tracks) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AudioPlayer tracks={tracks} initialTrackId={id} />
      <div className={styles.audio}>
        <button onClick={() => setFavorite(!favorite)}>
          {favorite ? "💜" : "💀"}
        </button>
      </div>
    </>
  );
}
