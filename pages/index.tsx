import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";
import Track from "../components/Track";
import { useEffect, useState } from "react";
import { TrackfromApi, bringTracks } from "../utils/api";
import Link from "next/link";

export default function Home() {
  const [color, setColor] = useState("💚");
  const [colorState, setColorState] = useState(true);
  function BorisLike() {
    const newcolor = colorState ? "💚" : "💓";
    setColor(newcolor);
    setColorState(!colorState);
  }

  const [tracks, setTracks] = useState<TrackfromApi[]>([]);

  useEffect(() => {
    bringTracks().then((brandnewTracks) => {
      setTracks(brandnewTracks);
    });
  }, []);

  const trackList = tracks.map((track) => (
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <Track
          ImgSrc={track.ImgSrc}
          artist={track.artist}
          title={track.title}
          xxx={color}
          onClick={() => BorisLike()}
        />
      </a>
    </Link>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Auplayo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Melanie" />
      <ul className={styles.list}>
        {trackList}

        {/* <LikeButton xxx={color} onClick={() => BorisLike()} />
        <LikeButton xxx={color} onClick={() => BorisLike()} />
        <LikeButton xxx={color} onClick={() => BorisLike()} />
        <LikeButton xxx={color} onClick={() => BorisLike()} /> */}
      </ul>
    </div>
  );
}
