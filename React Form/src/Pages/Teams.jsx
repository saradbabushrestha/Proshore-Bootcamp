import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumb";

const teamDetails = [
  {
    id: "1",
    name: "Sudhurpashim Royal",
    description:
      "Sudhurpashim Royal is a team based in the far western region of Nepal. Known for their aggressive playstyle, they have a loyal fanbase.",
    imgSrc:
      "https://i.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-xrvw67d6tasd1.jpg?width=2048&format=pjpg&auto=webp&s=02e1af8ee3ecd8c19ca6c800c5eb1218f903ec91",
  },
  {
    id: "2",
    name: "Chitwan Rhinos",
    description:
      "Chitwan Rhinos is a team that represents the Chitwan district. Famous for their strong defense, they are one of the top contenders.",
    imgSrc:
      "https://preview.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-h9nlkea6tasd1.jpg?width=640&crop=smart&auto=webp&s=f08630b6b4162a11ad7147a630e955b3ad7d76b2",
  },
  {
    id: "3",
    name: "Karnali Yaks",
    description:
      "Karnali Yaks are known for their resilience and tough playstyle. They represent the Karnali region and have a strong support base.",
    imgSrc:
      "https://i.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-oiwzj7d6tasd1.jpg?width=2048&format=pjpg&auto=webp&s=c6134d703ed11f49edc855d85c25529e4b5a64ee",
  },
  {
    id: "4",
    name: "Biratnagar Kings",
    description:
      "Biratnagar Kings, known for their strong batting lineup, represent the Biratnagar region in the league.",
    imgSrc:
      "https://preview.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-tvbpyca6tasd1.jpg?width=720&format=pjpg&auto=webp&s=04726911c8ae957628b03e35b93dd5cc699bde81",
  },
  {
    id: "5",
    name: "Janakpur Bolts",
    description:
      "Janakpur Bolts are known for their electrifying style of play and youthful squad.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMa4e_7OJ1pbuQyaX95f32ZxPC9kmXyB-FQ&s",
  },
  {
    id: "6",
    name: "Kathmandu Gurkha",
    description:
      "Kathmandu Gurkha is a proud team representing the capital city, combining experience with young talent.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5L7NgN9gPubhSzjQnLt3O-89TlxYFsaqUlw&s",
  },
  {
    id: "7",
    name: "Lumbini Lions",
    description:
      "Lumbini Lions are fierce competitors with a strong lineup that fights for every point.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_CRTvFGyhH-uxEgxYGjqGeoBd2MGYIwU6Q&s",
  },
  {
    id: "8",
    name: "Pokhara Avengers",
    description:
      "Pokhara Avengers are known for their strategic game plan and excellent teamwork.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsviZwGlOgzatl5L0LAQQGHArfJkms8p4Dg&s",
  },
];

const Team = () => {
  const navigate = useNavigate();
  const { teamId } = useParams();
  const team = teamDetails.find((team) => team.id === teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  const navigateToPlayers = () => {
    navigate(`/team/${teamId}/players`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Breadcrumbs
        paths={[
          { name: "Showcase", link: "/showcase" },
          { name: `Team ${team.name}`, link: `/team/${team.id}` },
        ]}
      />

      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {team.name} Team Details
        </h2>

        <img
          src={team.imgSrc}
          alt={team.name}
          className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">{team.description}</p>

        <button
          onClick={navigateToPlayers}
          className="p-4 bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go to Players
        </button>
      </div>
    </div>
  );
};

export default Team;
