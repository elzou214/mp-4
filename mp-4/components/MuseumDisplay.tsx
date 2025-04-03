"use client";
import { useState } from "react";
import MuseumPreview from "./MuseumPreview";

type MuseumRecord = {
  id: number;
  title?: string;
  primaryimageurl?: string;
  dated?: string;
  medium?: string;
  people?: { name: string }[];
};

export default function MuseumDisplay({
  inputRecords,
}: {
  inputRecords: MuseumRecord[];
}) {
  const [records] = useState(inputRecords);

  return (
    <div className="flex flex-col items-center">
      {records.map((record) => (
        <MuseumPreview key={record.id} record={record} />
      ))}
    </div>
  );
}
