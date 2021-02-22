import { useRouter } from "next/router";
import { bringTracks, TrackfromApi } from "../../utils/api";
import { useState, useEffect } from "react";
import AudioPlayer from "../../components/Audio";

export default function Tracki() {
  const router = useRouter();
  const { id } = router.query;

  const [tracks, setTracks] = useState<TrackfromApi[]>(null);

  useEffect(() => {
    bringTracks().then((brandnewtracks) => {
      setTracks(brandnewtracks);
    });
  }, [id]);

  if (!tracks) {
    return <div>Loading...</div>;
  }

  return <AudioPlayer tracks={tracks} initialTrackId={id} />;
}
