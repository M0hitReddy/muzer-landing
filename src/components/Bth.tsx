import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Bth() {
  return (
    <>
      <Link
        to="/"
        className="inline-flex items-center text-gray-400 mb-8 bg-white/10 rounded-full px-4 py-1"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
    </>
  );
}
