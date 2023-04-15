import { Logos } from '../components/Icons/Portfolio';

export type IProject = {
    path: string
    title: string
    icon: Logos
    brief: string
    images?: Image[]
    technologies: string[]
    liveLink?: string
    gitHubLink?: string 
}

type Image = {
    fileName: string,
    containerPath: string,
    width: number,
    height: number
}

export const projects: IProject[] = [
{
    icon: "samapay-web",
    title: "Sama Pay Website",
    path: "SamaPay-Website",
    brief: `Upgraded and Redesigned Sama Pay Website adding a <abbr title="Content Management System"><strong>CMS</strong></abbr> to make the website’s content dynamically controlled from an admin dashboard`,
    technologies: [ "Typescript","Next JS", "React JS", "Node JS", "Prisma", "GraphQL", "Apollo Server Express", "GraphQL"],
    liveLink: "https://samapay.sy/",   
    images: [
    {
        containerPath: "SamaPayCMS",
        fileName: "0.mp4",
        width: 800,
        height: 450,
    },
    {
        containerPath: "SamaPayCMS",
        fileName: "1.png",
        width: 900,
        height: 450,
    },
    {
        containerPath: "SamaPayCMS",
        fileName: "2.png",
        width: 900,
        height: 450,
    },
    {
        containerPath: "SamaPayCMS",
        fileName: "3.png",
        width: 900,
        height: 300,
    },
    ]   
},
{
    icon: "mobdeoun",
    title: "Mobdeoun Website",
    path: "Mobdeoun-Website",
    brief: `Developed a website for Mobdeoun ngo showcasing their message, achievements, staff, and awards. Along side the website, we provided a Content Management admin dashboard`,
    technologies: [ "Typescript", "Next JS", "React JS", "Strapi Headless CMS", "GraphQL"],
    liveLink: "https://mobdeoun.ngo/",
    images: [
    {
        containerPath: "Modeboun",
        fileName: "0.png",
        width: 800,
        height: 450,
    },
    {
        containerPath: "Modeboun",
        fileName: "1.png",
        width: 800,
        height: 450,
    },
    {
        containerPath: "Modeboun",
        fileName: "2.png",
        width: 600,
        height: 200,
    },
    {
        containerPath: "Modeboun",
        fileName: "3.png",
        width: 800,
        height: 450,
    },
    {
        containerPath: "Modeboun",
        fileName: "4.png",
        width: 400,
        height: 400,
    },
    {
        containerPath: "Modeboun",
        fileName: "5.png",
        width: 800,
        height: 450,
    },
    ]
},
{
    icon: "RamadanContest",
    title: "Ramadan Sama Pay Contest",
    path: "Samapay-Ramadan-Contest",
    brief: `Developed and Analysed a <strong>Ramadan-themed Contest</strong> Website to boost company app downloads and to engage with the company's brand. The System stores points for each user that are colleceted by downloading Sama Pay app, paying an online bill, answering questions, sharing a referal link, and playing online games`,
    technologies: [ "Typescript", "Next JS", "React JS", "Node JS", "GraphQL", "Prisma"],
    liveLink: "http://ramadan.samapay.sy/",
    images: [
    {
        containerPath: "ContestSamapay",
        fileName: "0.jpg",
        width: 400,
        height: 800,
    },
    {
        containerPath: "ContestSamapay",
        fileName: "1.jpg",
        width: 400,
        height: 800,
    },
    {
        containerPath: "ContestSamapay",
        fileName: "2.jpg",
        width: 400,
        height: 800,
    },
    {
        containerPath: "ContestSamapay",
        fileName: "3.jpg",
        width: 400,
        height: 800,
    },
    {
        containerPath: "ContestSamapay",
        fileName: "4.jpg",
        width: 400,
        height: 800,
    },
    {
        containerPath: "ContestSamapay",
        fileName: "5.jpg",
        width: 400,
        height: 800,
    },
    {
        containerPath: "ContestSamapay",
        fileName: "6.jpg",
        width: 400,
        height: 800,
    },
    {
        containerPath: "ContestSamapay",
        fileName: "7.jpg",
        width: 400,
        height: 800,
    },
    {
        containerPath: "ContestSamapay",
        fileName: "8.jpg",
        width: 400,
        height: 800,
    },
    ]
},
{
    icon: "GraduationProject",
    title: "Traffic Surveillance System with GIS Integration",
    path: "Graduation-Project",
    brief: `My <strong>Graduation Project</strong> at HIAST, where I developed a system that detects and tracks vehicles from traffic surveillance footage and then visualizes the location of the tracked vehicles on a Geographic Information System (GIS). The System also provided speed estimation for the tracked vehciles and traffic density calculations on the monitered road`,
    technologies: [ "Python", "Pytorch", "OpenCV", "YOLOR", "DeepSORT", "Streamlit", "UA-DETRAC Dataset"],
    gitHubLink: "https://github.com/Laith-Salameh/Traffic-Surviellance-System",
    images: [
        {
            containerPath: "GradProj",
            fileName: "0.mp4",
            width: 800,
            height: 450,
        },
        {
            containerPath: "GradProj",
            fileName: "4.png",
            width: 600,
            height: 200,
        },
        {
            containerPath: "GradProj",
            fileName: "1.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "GradProj",
            fileName: "2.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "GradProj",
            fileName: "3.png",
            width: 1000,
            height: 300,
        },
        {
            containerPath: "GradProj",
            fileName: "5.png",
            width: 800,
            height: 400,
        },
        {
            containerPath: "GradProj",
            fileName: "6.png",
            width: 800,
            height: 400,
        }
        ,
        {
            containerPath: "GradProj",
            fileName: "7.mp4",
            width: 800,
            height: 450,
        }
    ]
},
{
    icon: "Hotelizer",
    title: "Hotel Management Website",
    path: "Hotel-Management-Website",
    brief: `Online Hotel Management System with a web interface developed implementing the <strong>SOLID</strong> architecture, additionally provided with an admin dashboard`,
    technologies: [ "C#", "ASP.NET", "Bootstrap", "HTML", "CSS", "Javascript", "jQuery", "MS SQL Server"],
    gitHubLink: "https://github.com/Laith-Salameh/Hotel-Managment-System",
    images: [
        {
            containerPath: "Hotilizer",
            fileName: "0.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Hotilizer",
            fileName: "1.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Hotilizer",
            fileName: "2.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Hotilizer",
            fileName: "4.jpeg",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Hotilizer",
            fileName: "5.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Hotilizer",
            fileName: "6.png",
            width: 800,
            height: 450,
        },
    ]
},
{
    icon: "BookSearch",
    title: "Book Search Engine",
    path: "Book-Search-Engine",
    brief: `Information retrieval project where a search engine web service was built to index and retrieve book titles and authors. Addionally, provided a Custom Synonym Tokenizer, Custom Filter and Analyzer Provider, and Custom Similarity Calculator`,
    technologies: [ "C#", "ASP.NET", "Lucene.NET" , "Bootstrap", "HTML", "CSS", "Javascript", "jQuery"],
    gitHubLink: "https://github.com/Laith-Salameh/Book-Search-Engine",
    images: [
        {
            containerPath: "BookSearch",
            fileName: "0.mp4",
            width: 800,
            height: 450,
        }
    ]
},
{
    icon: "Kraken",
    title: "Kraken Academy",
    path: "Kraken-Academy",
    brief: `Online course management website where students join class sessions that are added by the teachers depending on their time and selected topic, it was built with the <strong>MVC</strong> software architectural pattern`,
    technologies: [ "PHP", "MySQL", "HTML", "CSS", "Javascript", "jQuery"],
    gitHubLink: "https://github.com/Laith-Salameh/Online-Course-Management-Website",
    images: [
        {
            containerPath: "Kraken",
            fileName: "1.jpeg",
            width: 1000,
            height: 1500,
        },
        {
            containerPath: "Kraken",
            fileName: "2.jpeg",
            width: 1000,
            height: 1500,
        },
        {
            containerPath: "Kraken",
            fileName: "0.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Kraken",
            fileName: "3.png",
            width: 800,
            height: 400,
        },
        {
            containerPath: "Kraken",
            fileName: "4.png",
            width: 500,
            height: 100,
        },
        {
            containerPath: "Kraken",
            fileName: "5.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Kraken",
            fileName: "6.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Kraken",
            fileName: "7.jpg",
            width: 1600,
            height: 900,
        }
    ]
},
{
    icon: "Castled",
    title: "Castled Unity Game",
    path: "Castled-Game",
    brief: `Developed a single-player FPS survival game using <strong>UNITY's game engine</strong>. The game had a medieval theme with a player stuck in the castle being attacked by waves of AI knights`,
    technologies: [ "C#", "Unity"],
    images: [
        {
            containerPath: "Castled",
            fileName: "0.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Castled",
            fileName: "1.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Castled",
            fileName: "2.png",
            width: 800,
            height: 450,
        },{
            containerPath: "Castled",
            fileName: "3.png",
            width: 800,
            height: 450,
        },{
            containerPath: "Castled",
            fileName: "4.png",
            width: 800,
            height: 450,
        },
        {
            containerPath: "Castled",
            fileName: "5.mp4",
            width: 1600,
            height: 900,
        },
    ]
}
]


export default function apiRequest(): IProject[] {
    return projects;
}