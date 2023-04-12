import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "../../../styles/Home/skills.module.scss"
import useOnScreen from "../../../customHooks/useOnScreen";
import WebIcons from "../../Icons/Web/index"
import SoftIcons from "../../Icons/Software/index"
import AIIcons from "../../Icons/AI/index"
import useIsMobile from "../../../context/isMobile-Context";
import TextSwitcher from "../../textswitcher";
import _debounce from 'lodash/debounce';

const Skills : FunctionComponent = ()=>{
    const Titleref = useRef<HTMLDivElement>(null)
    const isVisibleTitleref = useOnScreen(Titleref)? " appear" : " disappear"
    const isMobile = useIsMobile();
    const Webref = useRef<HTMLDivElement>(null)
    const isVisibleWeb = useOnScreen(Webref)? " appear" : " disappear";
    const AIref = useRef<HTMLDivElement>(null)
    const isVisibleAI = useOnScreen(AIref)? " appear" : " disappear";
    const PrRef = useRef<HTMLDivElement>(null)
    const isVisiblePR = useOnScreen(PrRef)? " appear" : " disappear";
    return (
        <div id="Skills" className={"section "+ styles.main}>
            <h1 ref={Titleref} className={isVisibleTitleref} >My Skills</h1>
            <Skill icons={WebIcons} isVisible={isVisibleWeb}>
                <div ref={Webref} className={styles.title +" "+ styles.center}>
                    Building <TextSwitcher tasks={["Fast","Responsive","Elegant","Dynamic"]} styles={styles}/> Websites
                </div>
            </ Skill>
            <Skill icons={SoftIcons} isVisible={isVisiblePR}>
                <div ref={PrRef} className={styles.title +" "+ styles.center}>
                    { !isMobile && "Designing and "}Developing <TextSwitcher tasks={["Efficient","Reliable","Robust","Maintainable"]} styles={styles}/> Software{ !isMobile && " Systems"}
                </div>
            </ Skill>
            <Skill icons={AIIcons} isVisible={isVisibleAI}>
                <div ref={AIref} className={styles.title +" "+ styles.center}>
                <TextSwitcher tasks={["Training","Fine-tuning","Testing","Using"]} styles={styles}/> {isMobile? "AI" :"Machine Learning"} Models
                </div>
            </ Skill>

        </div>
    )
}


const Skill: FunctionComponent<{icons: typeof WebIcons, children: JSX.Element | JSX.Element[], isVisible: string}> = ({icons, children, isVisible})=>{
    const isMobile = useIsMobile();
    const [ phi, setPhi] = useState(0)
    const [skillPositions , setSkillsPositions] = useState( getSkillPoitions(icons.length, 0 ,isMobile))
    useEffect(()=>{
        if(isVisible === " appear" ){

            const timer: NodeJS.Timer = setInterval( ()=>{
                setPhi(a => (a+ 0.004) );
                setSkillsPositions( getSkillPoitions( icons.length, phi ,isMobile)  )
            }, 10)
    
            return () => {clearInterval(timer);}
        }
    },[skillPositions, isVisible, icons.length, phi, isMobile])
    return (
        <div className={styles.skill + isVisible}>
                { icons.map((Icon,i)=> <Icon key={i} className={styles.icon} style={skillPositions[i] } />) }
                { children }
        </div>
    )
}

function getSkillPoitions( length: number, phi: number, isMobile: boolean){
    var arr: {top: string, left: string}[] = [];
    var pi = Math.PI;
    if(isMobile){
        for( let k=0 ; k < length ; k++){
            arr[k] = {  top : (Math.sin( 2*pi*k/length - phi) +1.1)*40+'%',
                        left : (Math.cos( 2*pi*k/length - phi) + 1.05)*40+'%',
                        
                    };
        }
    }
    else{
        for( let k=0 ; k < length ; k++){
            arr[k] = { top : (Math.sin( 2*pi*k/length - phi) + 0.65)*60+'%',
                        left : (Math.cos( 2*pi*k/length - phi) + 0.7)*60+'%',
                        }
            };
    }
    return arr;
  }




export default Skills;