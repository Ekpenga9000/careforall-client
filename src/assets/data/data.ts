import homeIcon from "../icons/homeIcon.png";
import inclusiveIcon from "../icons/communityIcon.png"; 
import visitation from "../icons/visitation.png"; 
import skillBuilding from "../icons/skills.png";
import { CardProps } from "../../components/interfaces/Card";

export const data:CardProps[] = [
    {
        id:1, 
        imgUrl: homeIcon,
        alt: "The picture of a home.", 
        header: "Home Service Support", 
        text:"We provide Home-Based Assistance, delivering compassionate care and support within the comfort of familiar surroundings."
    }, 
    {
        id:2, 
        imgUrl: visitation,
        alt: "A Pin on a map", 
        header: "Visitation Services", 
        text:"Our services extend to escorting individuals with special needs during their visitation, ensuring a supportive and inclusive experience."
    },
    {
        id:3, 
        imgUrl: skillBuilding,
        alt: "A pencil and a wrench", 
        header: "Skill Development", 
        text:"We empower individuals with special needs through tailored skill development, fostering opportunities for meaningful employment."
    },
    {
        id:4, 
        imgUrl: inclusiveIcon,
        alt: "Profiles of 4 people connected together", 
        header: "Inclusive Haven", 
        text:"We've crafted a secure and inclusive social media platform, fostering a welcoming, safe and comfortable environment."
    }
];