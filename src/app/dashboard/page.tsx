export const dynamic = "force-dynamic";
import Documents from "@/components/documents";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-3xl p-5 bg-gray-100 font-extralight text-indigo-600">My Documents
      <Documents />
      </div>

    </div>
  );
}
