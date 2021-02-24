import { useRouter } from "next/router";
import styles from "../../styles/Audio.module.css";
import { bringTracks, TrackfromApi } from "../../utils/api";
import { useState, useEffect } from "react";
import AudioPlayer from "../../components/Audio";
import usingLocalStorage from "../../hooks/LocalStorage";

export default function Tracki() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];

  const [tracks, setTracks] = useState<TrackfromApi[]>(null);
  const [favTracks, setFavTracks] = usingLocalStorage<string[]>(
    "favoriteTrack",
    []
  );

  const fav = favTracks.includes(id);

  const handleonClick = () => {
    if (fav) {
      const newfavTracks = favTracks.filter((favTracks) => favTracks !== id);
      setFavTracks(newfavTracks);
    } else {
      setFavTracks([...favTracks, id]);
    }
  };

  useEffect(() => {
    bringTracks().then((brandnewtracks) => {
      setTracks(brandnewtracks);
    });
  }, [id]);

  if (!tracks) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AudioPlayer tracks={tracks} initialTrackId={id} />
      <div className={styles.audio}>
        <button className={styles.like} onClick={handleonClick}>
          {fav ? "💓" : "💀"}
        </button>
      </div>
    </>
  );
}
