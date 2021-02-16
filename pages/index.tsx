import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";
import Track, { LikeButton } from "../components/Track";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("💚");
  const [colorState, setColorState] = useState(true);
  function BorisLike() {
    const newcolor = colorState ? "💚" : "💓";
    setColor(newcolor);
    setColorState(!colorState);

    //  const newColorState = colorState ?
    console.log("BorisTest");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Auplayo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Melanie" />
      <Track
        ImgSrc="https://images.unsplash.com/photo-1518499845966-9a86ddb68051?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        artist="Dingens"
        title="Viech"
      />
      <LikeButton xxx={color} onClick={() => BorisLike()} />
    </div>
  );
}
