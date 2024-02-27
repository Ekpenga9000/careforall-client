import counsellingIcon from "../icons/counsellingIcon.png";
import homeIcon from "../icons/homeIcon.png";
import inclusiveIcon from "../icons/communityIcon.png"; 
import skillBuilding from "../icons/skills.png";
import community from "../images/careforall3.jpg";
import { CardProps } from "../../components/interfaces/interface";
import { TilesProps } from "../../components/interfaces/interface";

export const data:CardProps[] = [
    {
        id:1, 
        imgUrl: counsellingIcon,
        alt: "Two people communicating.", 
        header: "Professional Counselling", 
        text:"We enable secure access to professional counselling services."
    }, 
    {
        id:2, 
        imgUrl: homeIcon,
        alt: "The picture of a home.", 
        header: "Home Service Support", 
        text:"We provide Home-Based Assistance, delivering compassionate care and support within the comfort of familiar surroundings."
    },
    {
        id:3, 
        imgUrl: skillBuilding,
        alt: "A pencil and a wrench", 
        header: "Skill Development", 
        text:"We provide teaching classes for musical instruments , sports , picture editing and arts & crafts."
    },
    {
        id:4, 
        imgUrl: inclusiveIcon,
        alt: "Profiles of 4 people connected together", 
        header: "Inclusive Haven", 
        text:"We've crafted a secure and inclusive social media platform, fostering a welcoming, safe and comfortable environment."
    }
];

export const tiles: TilesProps[] = [
    {
      id: 1,
      image: {
        src: "image1.jpg",
        alt: "Professional Counselling Image"
      },
      icon: {
        src: "icon1.png",
        alt: "Professional Counselling Icon"
      },
      header: "Professional Counselling",
      text: "We provide access to professional counseling services delivered by seasoned counselors boasting extensive experience and expertise. Our licensed counselors offer professional guidance, empowering individuals to lead happier, healthier lives.",
      isReverse: false
    },
    {
      id: 2,
      image: {
        src: "image2.jpg",
        alt: "Home Service Support Image"
      },
      icon: {
        src: "icon2.png",
        alt: "Home Service Support Icon"
      },
      header: "Home Service Support",
      text: "We offer compassionate home-based assistance, delivering tailored care and support in the comforting embrace of familiar surroundings.",
      isReverse: true
    },
    {
      id: 3,
      image: {
        src: "image3.jpg",
        alt: "Skill Development Image"
      },
      icon: {
        src: "icon3.png",
        alt: "Skill Development Icon"
      },
      header: "Skill Development",
      text: "We provide teaching classes for musical instruments, sports, picture editing, and arts & crafts.",
      isReverse: false
    },
    {
      id: 4,
      image: {
        src: community,
        alt: "Inclusive Haven Image"
      },
      icon: {
        src: "icon4.png",
        alt: "Inclusive Haven Icon"
      },
      header: "Inclusive Haven",
      text: "Join our inclusive and supportive community, where everyone is welcomed and embraced. Gain access to a nurturing environment that fosters growth, connection, and empowerment.",
      isReverse: true
    }
  ];
  