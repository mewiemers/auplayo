import styles from "../styles/Controls.module.css";
import React, { MouseEvent } from "react";

type Controls = {
  isPlaying: boolean;
  onPrevClick(event: MouseEvent): void;
  onNextClick(event: MouseEvent): void;
  onPlayPauseClick?(play: boolean): void;
};

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: Controls) => (
  <div className={styles.controls}>
    <button
      type="button"
      className={styles.prev}
      aria-label="Previous"
      onClick={onPrevClick}
    >
      Prev
    </button>
    {isPlaying ? (
      <button
        type="button"
        className={styles.pause}
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        Pause
      </button>
    ) : (
      <button
        type="button"
        className={styles.play}
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        Play
      </button>
    )}
    <button
      type="button"
      className={styles.next}
      aria-label="Next"
      onClick={onNextClick}
    >
      Next
    </button>
  </div>
);
export default AudioControls;
