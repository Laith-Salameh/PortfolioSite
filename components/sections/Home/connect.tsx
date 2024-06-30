import { FunctionComponent, useRef } from "react";
import styles from "../../../styles/Home/connect.module.scss"
import useOnScreen from "../../../customHooks/useOnScreen";
import EmailIcon from "../../Icons/Connect/email"
import LinkedInIcon from "../../Icons/Connect/linkedInIcon"
import GitHubIcon from "../../Icons/Connect/gitIcon"


const Connect : FunctionComponent = ()=>{
    const Titleref = useRef<HTMLDivElement>(null)
    const isVisibleTitleref = useOnScreen(Titleref)? " appear " : " disappear "
    const Briefref = useRef<HTMLDivElement>(null)
    const isVisibleBriefref = useOnScreen(Briefref)? " appear" : " disappear"
    return (
        <footer id="Connect" className={"section "+ styles.main }>
            <div ref={Titleref} className={styles.container + isVisibleTitleref + " section "}>
                <h1>Connect</h1>
                <div className={styles.contacts}>
                    <div className={styles.contact + " center"}>
                        <EmailIcon className={styles.icon} /> 
                        <span className={styles.text}><a href="mailto:laith.salameh25@gmail.com?subject=Hello, I'd Like to ...">laith.salameh25@gmail.com</a></span>
                    </div>
                    <div className={styles.contact + " center"}>
                        <GitHubIcon className={styles.icon} /> 
                        <span className={styles.text}><a href="https://github.com/Laith-Salameh">github.com/Laith-Salameh</a></span>
                    </div>
                    <div className={styles.contact + " center"}>
                        <LinkedInIcon className={styles.icon} /> 
                        <span className={styles.text}><a href="https://www.linkedin.com/in/Laith-Salameh/">linkedin.com/in/Laith-Salameh</a></span>
                    </div>
                </div>
            </div>
            <div className={styles.rights}>© {(new Date()).getFullYear()} Laith Salameh. All rights reserved.</div>
        </footer>
    )
}


export default Connect;