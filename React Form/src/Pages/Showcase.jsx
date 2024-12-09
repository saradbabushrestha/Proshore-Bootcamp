import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "./Breadcrumb";

const clubImages = [
  {
    id: 1,
    name: "Sudhurpashim Royal",
    imgSrc:
      "https://i.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-xrvw67d6tasd1.jpg?width=2048&format=pjpg&auto=webp&s=02e1af8ee3ecd8c19ca6c800c5eb1218f903ec91",
    link: "/team/1",
  },
  {
    id: 2,
    name: "Chitwan Rhinos",
    imgSrc:
      "https://preview.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-h9nlkea6tasd1.jpg?width=640&crop=smart&auto=webp&s=f08630b6b4162a11ad7147a630e955b3ad7d76b2",
    link: "/team/2",
  },
  {
    id: 3,
    name: "Karnali Yaks",
    imgSrc:
      "https://i.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-oiwzj7d6tasd1.jpg?width=2048&format=pjpg&auto=webp&s=c6134d703ed11f49edc855d85c25529e4b5a64ee",
    link: "/team/3",
  },
  {
    id: 4,
    name: "Biratnagar Kings",
    imgSrc:
      "https://preview.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-tvbpyca6tasd1.jpg?width=720&format=pjpg&auto=webp&s=04726911c8ae957628b03e35b93dd5cc699bde81", // Replace with actual image URL
    link: "/team/4",
  },
  {
    id: 5,
    name: "Janakpur Bolts",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMa4e_7OJ1pbuQyaX95f32ZxPC9kmXyB-FQ&s",
    link: "/team/5",
  },
  {
    id: 6,
    name: "Kathmandu gurkha",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5L7NgN9gPubhSzjQnLt3O-89TlxYFsaqUlw&s",
    link: "/team/6",
  },
  {
    id: 7,
    name: "Lumbini Lions",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_CRTvFGyhH-uxEgxYGjqGeoBd2MGYIwU6Q&s",
    link: "/team/7",
  },
  {
    id: 8,
    name: "Pokhara Avengers",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsviZwGlOgzatl5L0LAQQGHArfJkms8p4Dg&s",
    link: "/team/8",
  },
];

const Showcase = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Breadcrumbs paths={[{ name: "Showcase", link: "/showcase" }]} />

      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Showcase Page</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {clubImages.map((club) => (
            <div
              key={club.id}
              className="cursor-pointer text-center"
              onClick={() => navigate(club.link)}
            >
              <img
                src={club.imgSrc}
                alt={club.name}
                className="w-48 h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105 mx-auto"
              />
              <p className="mt-2 text-gray-700">{club.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
