import { Twitter, YouTube } from "@mui/icons-material";
import { AffordableEntertainmentIcon, AffordableEntertainmentThumbnail, AmericanEagles, ATandT, CommunityIcon, CommunityThumbnail, Correlium, Event1, Event2, Event3, Event4, FacebookIcon, GEAppliances, GeneralMills, HP, IndividualDevelopmentIcon, IndividualDevelopmentThumbnail, LinkedInIcon, LocalDevelopmentIcon, Philips } from "../assets";

export const navLinks = [
    {
        name: "About Us",
        url: "/#about"
    },
    {
        name: "Opportunities",
        url: "/opportunities"
    },
    {
        name: "Events",
        url: "/#events"
    },
    {
        name: "Contact Us",
        url: "/#contact"
    },
];

export const brands = [
    {
        name: "AT&T",
        icon: <ATandT />
    },
    {
        name: "Philips",
        icon: <Philips />
    },
    {
        name: "GE Appliances",
        icon: <GEAppliances />
    },
    {
        name: "American Eagles",
        icon: <AmericanEagles />
    },
    {
        name: "General Mills",
        icon: <GeneralMills />
    },
    {
        name: "HP",
        icon: <HP />
    },
];

export const about = [
    {
        icon: <CommunityIcon />,
        bgColor: "#DDF1C4",
        title: "Community Projects",
        thumbnail: <CommunityThumbnail />
    },
    {
        icon: <IndividualDevelopmentIcon />,
        bgColor: "#FFE746",
        title: "Individual Development",
        thumbnail: <IndividualDevelopmentThumbnail />
    },
    {
        icon: <AffordableEntertainmentIcon />,
        bgColor: "#E0DDFF",
        title: "Affordable Entertainment",
        thumbnail: <AffordableEntertainmentThumbnail />
    },
    {
        icon: <LocalDevelopmentIcon />,
        bgColor: "#F5D3FF",
        title: "Local Development",
        thumbnail: <IndividualDevelopmentThumbnail />
    },
];

export const latestOpportunities = [
    {
        icon: <Correlium />,
        title: "Corellium",
        subtitle: "Event streaming platform and message broker",
        contact: "team@memphis.dev",
        body: "Join us to make a difference! We‘re seeking dedicated volunteers for our upcoming community service project .",
        availableTo: "Open to new writers",
        label: "Be The Change",
        tags: ["Devtools", "Park Clean Up"]
    },
    {
        icon: <Correlium />,
        title: "Corellium",
        subtitle: "Event streaming platform and message broker",
        contact: "team@memphis.dev",
        body: "Join us to make a difference! We‘re seeking dedicated volunteers for our upcoming community service project .",
        availableTo: "Open to new writers",
        label: "Be The Change",
        tags: ["Devtools", "Park Clean Up"]
    },
    {
        icon: <Correlium />,
        title: "Corellium",
        subtitle: "Event streaming platform and message broker",
        contact: "team@memphis.dev",
        body: "Join us to make a difference! We‘re seeking dedicated volunteers for our upcoming community service project .",
        availableTo: "Open to new writers",
        label: "Be The Change",
        tags: ["Devtools", "Park Clean Up"]
    },
    {
        icon: <Correlium />,
        title: "Corellium",
        subtitle: "Event streaming platform and message broker",
        contact: "team@memphis.dev",
        body: "Join us to make a difference! We‘re seeking dedicated volunteers for our upcoming community service project .",
        availableTo: "Open to new writers",
        label: "Be The Change",
        tags: ["Devtools", "Park Clean Up"]
    },
];

export const latestEvents = [
    {
        title: "Event1",
        body1: "",
        thumbnail: <Event1 />
    },
    {
        title: "Event2",
        body1: "",
        thumbnail: <Event2 />
    },
    {
        title: "Event3",
        body1: "",
        thumbnail: <Event3 />
    },
    {
        title: "Event4",
        body1: "",
        thumbnail: <Event4 />
    },
];

export const socialMediaIcons = [
    {
        icon: <Twitter />,
        url: "/"
    },
    {
        icon: <FacebookIcon style={{ width: "1em", height: "1em" }} />,
        url: "/"
    },
    {
        icon: <LinkedInIcon style={{ width: "1em", height: "1em" }} />,
        url: "/"
    },
    {
        icon: <YouTube />,
        url: "/"
    },
];
