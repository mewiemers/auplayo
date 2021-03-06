// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDB, writeDB } from "../../../server/db";
import { TrackfromApi } from "../../../utils/api";

type Methods = {
  [method: string]: (req: NextApiRequest, res: NextApiResponse) => void;
};

const methods: Methods = {
  GET: handleGet,
  POST: handlePost,
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const method = methods[req.method];
  if (!method) {
    return res.status(405).json({
      status: 405,
      error: "Method not allowed",
    });
  }
  await method(req, res);
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const db = await readDB();
  res.status(200).json(db.tracks);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const newTrack: TrackfromApi = req.body;
  newTrack.id = `${newTrack.artist}_${newTrack.title}`
    .replaceAll(" ", "-")
    .toLowerCase();
  const db = await readDB();
  const trackExists = db.tracks.some((track) => track.id === newTrack.id);
  if (trackExists) {
    return res.status(409).json({
      status: 409,
      error: "Track already exists",
    });
  }
  db.tracks.push(newTrack);
  await writeDB(db);
  res.status(201).json(newTrack);
}
