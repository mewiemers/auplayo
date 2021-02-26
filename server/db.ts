import fs from "fs/promises";
import { TrackfromApi } from "../utils/api";

type DB = {
  tracks: TrackfromApi[];
};

const DB_PATH = "./server/db.json";

export async function readDB(): Promise<DB> {
  const dbJSON = await fs.readFile("./server/db.json", "utf-8");
  const db: DB = JSON.parse(dbJSON);
  return db;
}

export async function writeDB(db: DB) {
  const dbJSON = JSON.stringify(db, null, 2);
  await fs.writeFile(DB_PATH, dbJSON);
}
