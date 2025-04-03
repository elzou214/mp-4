import getAllArt from "@/lib/getAllArt";
import MuseumDisplay from "@/components/MuseumDisplay";

export default async function Home() {
  const { records } = await getAllArt();

  return (
    <div className="flex flex-col items-center bg-blue-200 p-4">
      <MuseumDisplay inputRecords={records} />
    </div>
  );
}
