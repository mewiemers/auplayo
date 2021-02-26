export type TrackfromApi = {
  id: string;
  ImgSrc: string;
  artist: string;
  title: string;
  audioFile: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function bringTracks(): Promise<TrackfromApi[]> {
  return await fetchURL<TrackfromApi[]>("/api/tracks");
}

export async function bringTrack(id: string): Promise<TrackfromApi> {
  return await fetchURL<TrackfromApi>(`/api/tracks/${id}`);
}
export async function deleteSong(id: string) {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
}


export async function addTrack(data: TrackfromApi) {
  return await fetch("/api/tracks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

