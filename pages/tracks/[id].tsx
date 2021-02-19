import { useRouter } from "next/router";
import { bringTrack, TrackfromApi } from "../../utils/api";
import { useState, useEffect } from "react";
import Detailstrack from "../../components/Detailstrack";
import Player from "../../components/Audio";
// import styles from "../../styles/Track.module.css";

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
    <div>
      {/* <header><Navigation /></header> */}
      <main>
        <Detailstrack
          ImgSrc={track.ImgSrc}
          title={track.title}
          artist={track.artist}
        />
        <Player audioFile={track.audioFile} />
      </main>
      {/* <footer><AudioPlayer /></footer> */}
    </div>
  );
}
