"use client";

import { useState } from "react";
import MuseumPreview from "./MuseumPreview";

export default function MuseumDisplay({
  inputRecords,
}: {
  inputRecords: any[];
}) {
  const [records, setRecords] = useState<any[]>(inputRecords);
    
 

  return (
    <div className="flex flex-col items-center">
      {records.map((record) => (
        <MuseumPreview key={record.id} record={record} />
      ))}
    </div>
  );
}
