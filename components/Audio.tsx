import styles from "../styles/Audio.module.css";
import AudioControls from "./Controls";
import React, { useRef, useEffect, useState } from "react";
// import tracks from "../pages/api/tracks";
import Detailstrack from "../components/Detailstrack";

export type Tracks = {
  ImgSrc: string;
  artist: string;
  title: string;
  audioFile: string;
};

const AudioPlayer = ({ tracks, initialTrackId }) => {
  const initialTrackIndex = tracks.findIndex(
    (track) => track.id === initialTrackId
  );

  const [trackIndex, setTrackIndex] = useState(initialTrackIndex);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const { ImgSrc, artist, title, audioFile } = tracks[trackIndex];
  const audioRef = useRef(new Audio(audioFile));
  const intervalRef = useRef();
  const isReady = useRef(false);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioFile);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    console.log("TODO go to prev");
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    console.log("TODO go to next");
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };
  const startTimer = () => {
    clearInterval(intervalRef.current);

    //   intervalRef.current = setInterval(() => {
    //     if (audioRef.current.ended) {
    //       toNextTrack();
    //     } else {
    //       setTrackProgress(audioRef.current.currentTime);
    //     }
    //   }, []);
  };

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  return (
    <>
      <di className={styles.audio}>
        <Detailstrack ImgSrc={ImgSrc} title={title} artist={artist} />
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className={styles.progress}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </di>
    </>
  );
};

export default AudioPlayer;
