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
                    <span>Senior Software Engineer</span> who has been enthusiastic about programming for <span>9 years</span>.
                    I bring proficiently in <span>translating business requirements and Figma designs into functional systems</span>. 
                    In addition to my technical skills, I excel in <span>project planning and delivery</span>, 
                    ensuring <span>timely and efficient</span> development cycles.
                </p>
            </div>
        </section>
    )
}


export default About;