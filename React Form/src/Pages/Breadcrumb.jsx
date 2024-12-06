import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RightArrowImg from "../assets/right.png";

export default function Breadcrumb() {
  const [showSubLinks, setShowSubLinks] = useState(false);
  const location = useLocation();

  const handleShowcaseClick = () => {
    setShowSubLinks((prev) => !prev);
  };

  return (
    <div className="bg-white sticky top-0 z-50 shadow-md">
      <ul className="flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <li>
          <Link
            to="/showcase"
            onClick={handleShowcaseClick}
            className={`cursor-pointer hover:bg-[#E8DAEF] hover:text-black p-4 rounded-md ${
              location.pathname === "/showcase" && "bg-[#b572d6] text-white"
            }`}
          >
            Showcase
          </Link>
        </li>

        {showSubLinks && location.pathname === "/showcase" && (
          <>
            <li>
              <img src={RightArrowImg} className="w-5 h-5" alt="Right Arrow" />
              <Link
                to="/showcase/team"
                className={`cursor-pointer hover:bg-[#E8DAEF] hover:text-black p-4 rounded-md ${
                  location.pathname === "/showcase/team" &&
                  "bg-[#b572d6] text-white"
                }`}
              >
                Team
              </Link>
            </li>

            <li>
              <img src={RightArrowImg} className="w-5 h-5" alt="Right Arrow" />
              <Link
                to="/showcase/team/player"
                className={`cursor-pointer hover:bg-[#E8DAEF] hover:text-black p-4 rounded-md ${
                  location.pathname === "/showcase/team/player" &&
                  "bg-[#b572d6] text-white"
                }`}
              >
                Player
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
