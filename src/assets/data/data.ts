import homeIcon from "../icons/homeIcon.png";
import inclusiveIcon from "../icons/communityIcon.png"; 

interface CardProps{
    imgUrl: string,
    alt: string, 
    header: string, 
    text:string
}

export const data:CardProps[] = [
    {
        imgUrl: homeIcon,
        alt: "The picture of a home.", 
        header: "Home Service Support", 
        text:"We provide Home-Based Assistance, delivering compassionate care and support within the comfort of familiar surroundings."
    }, 
    {
        imgUrl: inclusiveIcon,
        alt: "Profiles of 4 people connected together", 
        header: "Inclusive Haven", 
        text:"We've crafted a secure and inclusive social media platform, fostering a welcoming, safe and comfortable environment."
    }
];