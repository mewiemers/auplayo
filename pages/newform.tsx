import { useState } from "react";
import { addTrack } from "../utils/api";

export default function New() {
  const [id, setId] = useState("");
  const [ImgSrc, setImgSrc] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [audioFile, setAudioFile] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = { id, ImgSrc, artist, title, audioFile };
    addTrack(data);
    window.location.href = `/tracks/${id}`;
  }

  return (
    <form>
      <label>
        ID
        <input value={id} onChange={(event) => setId(event.target.value)} />
        <label>
          Image
          <input
            value={ImgSrc}
            onChange={(event) => setImgSrc(event.target.value)}
          />
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
