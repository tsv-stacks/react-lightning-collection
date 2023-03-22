import phantom from "./cover-img/phantom.jpg";
import prisLogo from "./season-icons/PRIS.png";
import spdgreen from "./cover-img/spd-green.jpg";
import lgBlue from "./cover-img/lg-blue.jpg";
import lgRed from "./cover-img/lg-red.jpg";
import spdLogo from "./season-icons/PR_S.P.D._logo.png";
import lgLogo from "./season-icons/PR_Lost_Galaxy_logo.png";
import spdred from './cover-img/spd-red.jpeg'
import spdshadow from './cover-img/spd-shadow.jpg'
import blaze from './cover-img/blaze.jpg'
import prBM from './season-icons/Power_Rangers_Beast_Morphers_logo.png'
import dcRed from './cover-img/dinocharge-red.jpg'
import prDC from './season-icons/Power_Rangers_Dino_Charge_logo.png'

export default [
  {
    id: 1,
    season: "in Space",
    bio: "The Phantom Ranger is a mysterious Ranger from his current home Eltar who helped the Turbo Rangers battle Divatox in Power Rangers Turbo.",
    name: "Phantom Ranger",
    ranger: "Phantom Ranger",
    img: {
      cover: phantom,
      season: prisLogo,
    },
    bought: "Forbidden Planet",
    price: 9.99,
    wiki: "https://powerrangers.fandom.com/wiki/Phantom_Ranger",
  },
  {
    id: 2,
    season: "SPD",
    bio: "Bridge Carson is a S.P.D. Cadet who began his Ranger duties as the S.P.D. Green Ranger. He is a member of the B-Squad Rangers of the S.P.D. Rangers.",
    name: "Bridge Carsons",
    ranger: "Green Ranger",
    img: {
      cover: spdgreen,
      season: spdLogo,
    },
    bought: "Forbidden Planet",
    price: 9.99,
    wiki: "https://powerrangers.fandom.com/wiki/Bridge_Carson",
  },
  {
    id: 3,
    season: "Lost Galaxy",
    bio: "Straight-laced, sensible and ambitious, Kai is the classic overachiever. Having been brought up in a strict military family, he always does things by the book and likes everything in its place.",
    name: "Kai Chen",
    ranger: "Galaxy Blue",
    img: {
      cover: lgBlue,
      season: lgLogo,
    },
    bought: "ToyTown",
    price: 7.5,
    wiki: "https://powerrangers.fandom.com/wiki/Kai_Chen",
  },
  {
    id: 4,
    season: "Lost Galaxy",
    bio: "As a stowaway aboard the Terra Venture, Leo dared to follow his older brother, Mike, to find a new world.",
    name: "Leo Corbett",
    ranger: "Galaxy Red",
    img: {
      cover: lgRed,
      season: lgLogo,
    },
    bought: "Comics and Cocktails",
    price: 9.99,
    wiki: "https://powerrangers.fandom.com/wiki/Kai_Chen",
  },
  {
    id: 6,
    season: "SPD",
    bio: `Anubis "Doggie" Cruger is a Sirian and the commander of Space Patrol Delta's Earth Base who later becomes the S.P.D. Shadow Ranger`,
    name: 'Anubis "Doggie" Cruger',
    ranger: "Shadow Ranger",
    img: {
      cover: spdshadow,
      season: spdLogo,
    },
    bought: "Kapow! Toys",
    price: 20.45,
    wiki: "https://powerrangers.fandom.com/wiki/Jack_Landors",
  },
  {
    id: 5,
    season: "SPD",
    bio: "Jack Landors is a former street thief alongside his best friend Z Delgado who were given a chance to join S.P.D. and reform themselves. After some reluctance, Jack decided to accept Cruger's offer and become the first S.P.D. Red Ranger",
    name: "Jack Landors",
    ranger: "Red Ranger",
    img: {
      cover: spdred,
      season: spdLogo,
    },
    bought: "Star Action Figures",
    price: 11.90,
    wiki: "https://powerrangers.fandom.com/wiki/Jack_Landors",
  },
  {
    id: 8,
    season: "Dino Charge",
    bio: "Tyler Navarro is on a mission to find his missing father, and holds Fury responsible for his disappearance.  He bonds with the Red Energem and becomes the Dino Charge Red Ranger.",
    name: "Tyler Navarro",
    ranger: "Red Ranger",
    img: {
      cover: dcRed,
      season: prDC,
    },
    bought: "Kapow! Toys",
    price: 20.45,
    wiki: "https://powerrangers.fandom.com/wiki/Tyler_Navarro",
  },
  {
    id: 7,
    season: "Beast Morphers",
    bio: "Blaze is a member of the Grid Battleforce and was meant to be the Red Ranger, but when Evox put a virus into the system, it makes an evil clone of him.",
    name: "Blaze",
    ranger: "Cybervillain",
    img: {
      cover: blaze,
      season: prBM,
    },
    bought: "InDemand Toys",
    price: 6.74,
    wiki: "https://powerrangers.fandom.com/wiki/Blaze/Cybervillain",
  },
];
