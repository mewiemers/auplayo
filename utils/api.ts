export type TrackfromApi = {
  id: string;
  ImgSrc: string;
  artist: string;
  title: string;
};

export async function bringTracks() {
  const response = await fetch("/api/tracks");
  const tracks: TrackfromApi[] = await response.json();
  return tracks;
}
