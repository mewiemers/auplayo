import { useState } from "react";

export default function New() {
  const [id, setId] = useState("");
  const [ImgSrc, setImgSrc] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [Audiosrc, setAudioSrc] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`ID:${id}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID
        <input value={id} onChange={(event) => setId(event.target.value)} />
      </label>
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
        ID
        <input
          value={Audiosrc}
          onChange={(event) => setAudioSrc(event.target.value)}
        />
      </label>
    </form>
  );
}
