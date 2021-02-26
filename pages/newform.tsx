import { useState } from "react";
import { addTrack } from "../utils/api";

export default function New() {
  const [id, setId] = useState("");
  const [ImgSrc, setImgSrc] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [audioFile, setAudioFile] = useState("");

  function handleChange(event) {
    setId(event.target.value);
    setImgSrc(event.target.value);
    // setArtist(event.target.value);
    // setAudioSrc(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`ID:${id} img:${ImgSrc}`);
  }

  const data = { id, ImgSrc, artist, title, audioFile };
  addTrack(data);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID
        <input value={id} onChange={handleChange} />
        <label>
          Image
          <input value={ImgSrc} onChange={handleChange} />
        </label>
        <label>
          Artist
          <input
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </label>
        <label>
          Title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Audio
          <input
            value={audioFile}
            onChange={(event) => setAudioFile(event.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </label>
    </form>
  );
}
