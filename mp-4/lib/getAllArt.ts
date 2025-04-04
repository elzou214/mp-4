'use server';

import { MuseumResponse } from "@/types";

export default async function getAllArt(): Promise<MuseumResponse> {
  try {
    const apiKey = process.env.MUSEUM_KEY;

    if (!apiKey) {
      throw new Error("Missing API key");
    }

    const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=200`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const data: MuseumResponse = await res.json();
    return data;

  } catch (error) {
    console.error("Error fetching art from API:", error);

    throw new Error("Unable to retrieve data.");
  }
}
