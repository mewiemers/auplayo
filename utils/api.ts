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

export async function bringTrack(id) {
  const response = await fetch(`/api/tracks/${id}`);
  const track: TrackfromApi = await response.json();
  return track;
}
