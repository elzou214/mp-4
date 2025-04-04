
import { MuseumRecord } from "@/types";
export default function MuseumPreview({ record }: { record: MuseumRecord }) {
  return (
    <div className="bg-white p-4 m-2 w-full max-w-md">
      <h3 className="text-lg font-semibold text-gray-600 mb-2">
        {record.title || "Untitled"}
      </h3>

      {record.primaryimageurl ? (
        <img
          src={record.primaryimageurl}
          alt={record.title || "Artwork"}
          className="w-full h-64 object-cover mb-2"
        />
      ) : (
        <div className="w-full h-64 text-gray-600 flex items-center justify-center bg-gray-100 mb-2">
          No Image Associate with this Object
        </div>
      )}

      <p className="text-sm text-gray-600">{record.dated || "Unknown date"}</p>
      <p className="text-sm text-gray-800">{record.medium || "Unknown medium"}</p>

      {record.people?.[0]?.name && (
        <p className="text-sm text-gray-600 font-medium">
          By: {record.people[0].name}
        </p>
      )}
    </div>
  );
}
