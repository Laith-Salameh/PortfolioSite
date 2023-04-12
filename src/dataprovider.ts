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
}
]


export default function apiRequest(): IProject[] {
    return projects;
}