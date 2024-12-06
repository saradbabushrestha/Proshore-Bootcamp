import { Link } from "react-router-dom";

export default function Showcase() {
  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Showcase</h1>

      <div className="flex gap-4">
        <Link
          to="/showcase/team"
          className="cursor-pointer p-4 bg-[#b572d6] text-white rounded-md hover:bg-[#9b54b8] transition"
        >
          Team
        </Link>
        <Link
          to="/showcase/team/player"
          className="cursor-pointer p-4 bg-[#b572d6] text-white rounded-md hover:bg-[#9b54b8] transition"
        >
          Player
        </Link>
      </div>
    </div>
  );
}
