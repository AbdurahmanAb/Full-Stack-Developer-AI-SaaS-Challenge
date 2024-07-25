export const dynamic = "force-dynamic";
import Documents from "@/components/documents";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div className="w-3/4 max-w-7xl mx-auto">
      <div className="text-3xl p-5 bg-gray-100 font-extralight text-indigo-600  w-full">My Documents
      <Documents />
      </div>

    </div>
  );
}
