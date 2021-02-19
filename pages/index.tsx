import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";
import Track from "../components/Track";
import { useEffect, useState } from "react";
import { TrackfromApi, bringTracks } from "../utils/api";

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

  // const tracks = [
  //   {
  //     ImgSrc:
  //       "https://images.unsplash.com/photo-1518499845966-9a86ddb68051?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=60",
  //     artist: "Dingens",
  //     title: "Viech",
  //   },
  //   {
  //     ImgSrc:
  //       "https://images.unsplash.com/photo-1575844261401-d69721eb5044?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aGVsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     artist: "The Hell",
  //     title: "WTF",
  //   },
  //   {
  //     ImgSrc:
  //       "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     artist: "Podcats",
  //     title: "Micromiau",
  //   },
  //   {
  //     ImgSrc:
  //       "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     artist: "Burning-Guitar",
  //     title: "Burn Baby",
  //   },
  // ];

  const trackList = tracks.map((track) => (
    <Track
      key={track.id}
      ImgSrc={track.ImgSrc}
      artist={track.artist}
      title={track.title}
      xxx={color}
      onClick={() => BorisLike()}
    />
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
