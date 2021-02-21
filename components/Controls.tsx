import styles from "../styles/Controls.module.css";
import React from "react";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
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
