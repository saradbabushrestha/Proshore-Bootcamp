import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumb";
const teamDetails = [
  {
    id: "1",
    name: "Sudhurpashim Royal",
    description:
      "Sudhurpashim Royal is a team based in the far western region of Nepal. Known for their aggressive playstyle, they have a loyal fanbase.",
    imgSrc:
      "https://i.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-xrvw67d6tasd1.jpg?width=2048&format=pjpg&auto=webp&s=02e1af8ee3ecd8c19ca6c800c5eb1218f903ec91",
    players: [
      "Arjun Kumal",
      "Ishan Pandey",
      "Naresh Budhayer",
      "Amit Shrestha",
      "Brandon McMullen",
      "Dipendra Singh Airee (Captain)",
      "Binod Bhandari",
      "Rohan Mustafa",
      "Md Aarif Sheikh",
      "Saif Zaib",
      "Abinash Bohara",
      "Scott Kuggeleijn",
      "Bhoj Raj Bhatta",
    ],
  },
  {
    id: "2",
    name: "Chitwan Rhinos",
    description:
      "Chitwan Rhinos is a team that represents the Chitwan district. Famous for their strong defense, they are one of the top contenders.",
    imgSrc:
      "https://preview.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-h9nlkea6tasd1.jpg?width=640&crop=smart&auto=webp&s=f08630b6b4162a11ad7147a630e955b3ad7d76b2",
    players: [
      "Hassan Eisakhil (Opening Batter)",
      "Deepak Bohara (Bowler)",
      "Luc Benkenstein (All-rounder)",
      "Kushal Malla (All-rounder, Captain)",
      "Ravi Bopara (Batter)",
      "Santosh Karki (All-rounder)",
      "Sharad Vesawkar (Middle-order batter)",
      "Bipin Rawal (Wicketkeeper)",
      "Amar Routela (Bowler/All-rounder)",
      "Rijan Dhakal (Bowler)",
      "Sohail Tanvir (Bowler)",
    ],
  },
  {
    id: "3",
    name: "Karnali Yaks",
    description:
      "Karnali Yaks are known for their resilience and tough playstyle. They represent the Karnali region and have a strong support base.",
    imgSrc:
      "https://i.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-oiwzj7d6tasd1.jpg?width=2048&format=pjpg&auto=webp&s=c6134d703ed11f49edc855d85c25529e4b5a64ee",
    players: [
      "Chadwick Walton",
      "Dev Khanal",
      "Rit Gautam",
      "Arjun Gharti",
      "Dipak Dumre",
      "Babar Hayat",
      "Gulshan Kumar Jha",
      "Hussain Talat",
      "Bhuvan Karki",
      "Sompal Kami",
      "Nandan Yadav",
      "Mausam Dhakal",
    ],
  },
  {
    id: "4",
    name: "Biratnagar Kings",
    description:
      "Biratnagar Kings, known for their strong batting lineup, represent the Biratnagar region in the league.",
    imgSrc:
      "https://preview.redd.it/all-team-logos-and-names-revealed-nepal-premier-league-npl-v0-tvbpyca6tasd1.jpg?width=720&format=pjpg&auto=webp&s=04726911c8ae957628b03e35b93dd5cc699bde81",
    players: [
      "Martin Guptill (top-order batsman)",
      "Lokesh Bam (wicketkeeper/batsman)",
      "Aqib Ilyas (all-rounder)",
      "Rajesh Pulami Magar (all-rounder)",
      "Naren Bhatta or Dipak Bohara (middle-order batsman)",
      "Nicholas Kirton (middle-order batsman)",
      "Bashir Ahmad (middle-order batsman/finisher)",
      "Pratish GC (all-rounder)",
      "Sandeep Lamichhane (captain, bowler)",
      "Chris Sole (bowler)",
      "Jitendra Mukhiya (bowler)",
    ],
  },
  {
    id: "5",
    name: "Janakpur Bolts",
    description:
      "Janakpur Bolts are known for their electrifying style of play and youthful squad.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMa4e_7OJ1pbuQyaX95f32ZxPC9kmXyB-FQ&s",
    players: [
      "Aasif Sheikh (wk)",
      "Lahiru Milantha",
      "Anil Kumar Sah (C)",
      "Aakash Tripathi",
      "Joshua Tromp",
      "Jimmy Neesham",
      "Sher Malla",
      "Tul Thapa",
      "Ben Mike",
      "Lalit Rajbanshi",
      "Kishor Mahato",
    ],
  },
  {
    id: "6",
    name: "Kathmandu Gurkha",
    description:
      "Kathmandu Gurkha is a proud team representing the capital city, combining experience with young talent.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5L7NgN9gPubhSzjQnLt3O-89TlxYFsaqUlw&s",
    players: [
      "Sumit Maharjan or Raju Rijal (opening)",
      "Michael Levitt or Stephen Eskinazi (opener)",
      "Bhim Sharki (top-order)",
      "Gerhard Erasmus (middle-order)",
      "Shankar Rana (finisher)",
      "Dan Douthwaite (all-rounder)",
      "Karan KC (captain, all-rounder)",
      "Rashid Khan (bowler)",
      "Krishna Karki (bowler)",
      "Shahab Alam (bowler)",
      "Dipesh Kandel (bowler)",
    ],
  },
  {
    id: "7",
    name: "Lumbini Lions",
    description:
      "Lumbini Lions are fierce competitors with a strong lineup that fights for every point.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_CRTvFGyhH-uxEgxYGjqGeoBd2MGYIwU6Q&s",
    players: [
      "Unmukt Chand (Top-order batsman)",
      "Tom Moores (Wicketkeeper-batsman)",
      "Rohit Poudel (Batsman)",
      "Ben Cutting (All-rounder)",
      "Saad Bin Zafar (All-rounder)",
      "Bikash Aagri (All-rounder)",
      "Dinesh Adhikari (Batsman)",
      "Surya Tamang (Bowler)",
      "Ramon Simmonds (Bowler)",
      "Tilak Bhandari (Bowler)",
      "Arjun Saud (Wicketkeeper-batsman)",
    ],
  },
  {
    id: "8",
    name: "Pokhara Avengers",
    description:
      "Pokhara Avengers are known for their strategic game plan and excellent teamwork.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsviZwGlOgzatl5L0LAQQGHArfJkms8p4Dg&s",
    players: [
      "Kushal Bhurtel – Opening batter and team captain",
      "Andries Gous – Explosive top-order batter from South Africa",
      "Sunam Gautam – Experienced player with ties to Australian domestic cricket",
      "Bas de Leede – Talented all-rounder from the Netherlands",
      "Michael Leask – Hard-hitting all-rounder from Scotland",
      "Dilip Nath – Reliable wicketkeeper-batsman",
      "Narayan Joshi – Versatile all-rounder",
      "Raymon Reifer – West Indies all-rounder",
      "Bipin Khatri – Left-arm spinner",
      "Akash Chand – Promising young pacer",
      "Sagar Dhakal – Left-arm spinner",
    ],
  },
];

const Players = () => {
  const { teamId } = useParams();
  const team = teamDetails.find((team) => team.id === teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Breadcrumbs
        paths={[
          { name: "Showcase", link: "/showcase" },
          { name: `Team ${team.name}`, link: `/team/${team.id}` },
          { name: "Players", link: `/team/${team.id}/players` },
        ]}
      />

      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Players of Team {team.name}
        </h2>

        <div className="text-lg text-gray-600">
          {team.players.map((player, index) => (
            <div key={index} className="mb-2">
              {player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
