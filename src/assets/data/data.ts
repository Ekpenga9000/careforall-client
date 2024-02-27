import counsellingIcon from "../icons/counsellingIcon.png";
import homeIcon from "../icons/homeIcon.png";
import inclusiveIcon from "../icons/communityIcon.png"; 
import skillBuilding from "../icons/skills.png";
import { CardProps } from "../../components/interfaces/Card";

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