import { FunctionComponent, useRef } from "react";
import styles from "../../../styles/Home/about.module.scss"
import useOnScreen from "../../../customHooks/useOnScreen";

const About : FunctionComponent = ()=>{
    const Titleref = useRef<HTMLDivElement>(null)
    const isVisibleTitleref = useOnScreen(Titleref)? " appear" : " disappear"
    const Briefref = useRef<HTMLDivElement>(null)
    const isVisibleBriefref = useOnScreen(Briefref)? " appear" : " disappear"
    return (
        <section id="About">
            <div className={"section "+ styles.main }>
                <h1 ref={Titleref} className={isVisibleTitleref}>About me</h1>
                <p ref={Briefref} className={isVisibleBriefref}>
                    <span>Software Engineer</span> who has been enthusiastic about programming since <span>10<sup>th</sup> grade</span>.
                    Over the years, I have built a steady foundation in <span>Object Oriented Programming </span> 
                    and developed strong skills in both <span>Web Development</span> and <span>Machine Learning</span>. 
                </p>
            </div>
        </section>
    )
}


export default About;