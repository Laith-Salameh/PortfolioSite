import { FunctionComponent, useRef } from "react";
import styles from "../../../styles/Home/journey.module.scss"
import TimeLine from "../../timeline";
import useOnScreen from "../../../customHooks/useOnScreen";
import Link from "next/link";

const Journey : FunctionComponent = ()=>{
    const Journyref = useRef<HTMLDivElement>(null)
    const isVisibleJourney = useOnScreen(Journyref)? " appear" : " disappear";
    return (
        <section id="Journey" className={"section "+ styles.main }>
                <h1 ref={Journyref} className={isVisibleJourney}>My Journey</h1>
                <TimeLine points={timelinePoints} />
        </section>
    )
}

const timelinePoints= [
    {
        time: new Date(2014,8),
        Description: <>Started Programming in <span>C++</span></>
    },
    {
        time: new Date(2017,9),
        Description: <>Joinded <span>HIAST</span> starting a BSc in <span>Software Engineering</span></>
    },
    {
        time: new Date(2020,1),
        Description: <Link href="/Portfolio/Kraken-Academy">Built my First Website using <span>MVC</span> architectural pattern and <span>PHP</span></Link>
    },
    {
        time: new Date(2021,8),
        Description: <>Started Working for <span>Sama Pay</span> as a <span>Full Stack Web Developer</span></>
    },
    {
        time: new Date(2022,7),
        Description: <Link href="/Portfolio/Graduation-Project">Finalized Graduation Project titled <span><q>Traffic Surveillance System with GIS Integration</q></span></Link>
    },
    {
        time: new Date(2022,8),
        Description: <>Graduated from <span>HIAST</span> with GPA of <span>80.7%</span> ranking <span>2<sup>nd</sup></span> in my class</>
    },
    {
        time: new Date(2022,9),
        Description: <a href="https://www.facebook.com/hiast.edu.sy/posts/420630603583672">Awarded <span>Best Informatics Project By FMEE</span> exhibition held in Damascus University</a>
    }
]

export default Journey;