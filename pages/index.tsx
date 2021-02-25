import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";
import Track from "../components/Track";
import { useEffect, useState } from "react";
import { TrackfromApi, bringTracks, deleteSong } from "../utils/api";
import Link from "next/link";
import Count from "../components/Counter";
import usingLocalStorage from "../hooks/LocalStorage";

export default function Home() {
  const [tracks, setTracks] = useState<TrackfromApi[]>([]);
  const [seefav] = usingLocalStorage<string[]>("favoriteTrack", []);

  const mynewfav = tracks.filter((track) => seefav.includes(track.id));

  const mynewunfav = tracks.filter((track) => !seefav.includes(track.id));

  function refreshTracks() {
    bringTracks().then(setTracks);
  }

  useEffect(refreshTracks, []);

  const favtrackList = mynewfav.map((track) => (
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <Track
          ImgSrc={track.ImgSrc}
          artist={track.artist}
          title={track.title}
        />
        <button
          onClick={async (event) => {
            event.preventDefault();
            await deleteSong(track.id);
            refreshTracks();
          }}
        >
          Delete
        </button>
      </a>
    </Link>
  ));

  const untrackList = mynewunfav.map((track) => (
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <Track
          ImgSrc={track.ImgSrc}
          artist={track.artist}
          title={track.title}
        />
        <button
          onClick={async (event) => {
            event.preventDefault();
            await deleteSong(track.id);
            refreshTracks();
          }}
        >
          Delete
        </button>
      </a>
    </Link>
  ));

  const trackList = tracks.map((track) => (
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <Track
          ImgSrc={track.ImgSrc}
          artist={track.artist}
          title={track.title}
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
      <Count />
      Tolle Lieder:
      <ul className={styles.list}>{favtrackList}</ul>
      Nicht so tolle Lieder:
      <ul className={styles.list}>{untrackList}</ul>
      alle Lieder:
      <ul className={styles.list}>{trackList}</ul>
    </div>
  );
}
