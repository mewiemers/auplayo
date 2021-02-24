import styles from "../styles/Audio.module.css";
import AudioControls from "./Controls";
import React, { useRef, useEffect, useState } from "react";
import Detailstrack from "../components/Detailstrack";
import { TrackfromApi } from "../utils/api";
import Header from "./Header";

export type Tracks = {
  tracks: TrackfromApi[];
  initialTrackId: string | string[];
};

const AudioPlayer = ({ tracks, initialTrackId }: Tracks) => {
  const initialTrackIndex = tracks.findIndex(
    (track) => track.id === initialTrackId
  );

  const [trackIndex, setTrackIndex] = useState(initialTrackIndex);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    if (trackIndex) {
      setTrack(tracks[trackIndex]);
    }
  }, [trackIndex]);

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

  const audioRef = useRef(new Audio(track?.audioFile));
  const intervalRef = useRef();
  const isReady = useRef(false);

  useEffect(() => {
    if (!track) {
      return;
    }
    audioRef.current.pause();
    audioRef.current = new Audio(track.audioFile);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex, track]);

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
      setTrackIndex(-1);
    }
  };
  const startTimer = () => {
    clearInterval(intervalRef.current);
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
    <div className={styles.audio}>
      <Header />
      <div className={styles.content}>
        {track && <Detailstrack track={track} />}
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
      </div>
    </div>
  );
};
export default AudioPlayer;
