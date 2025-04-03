export default function MuseumPreview({ record }: { record: any }) {
    return (
      <div className="bg-white p-4 m-2 w-100">
        <h3 className="text-lg font-semibold text-gray-600  mb-2">{record.title || "Untitled"}</h3>
  
        {record.primaryimageurl ? (
          <img
            src={record.primaryimageurl}
            alt={record.title || "Artwork"}
            className="w-full h-50"
          />
        ) : (
          <div className="w-full h-50 text-gray-600 flex items-center justify-center">
            No Image
          </div>
        )}
  
        <p className="text-sm text-gray-600 ">
          {record.dated || "Unknown date"}
        </p>
  
        <p className="text-sm text-gray-800">
          {record.medium || "Unknown medium"}
        </p>
  
        {record.people?.[0]?.name && (
          <p className="text-sm text-gray-600 font-medium">By: {record.people[0].name}</p>
        )}
      </div>
    );
  }
  