// import styles from "../styles/Audio.module.css";

type AudioViech = {
  audioFile: string;
};

export default function Player(props: AudioViech) {
  return (
    <audio controls src={props.audioFile}>
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
}
