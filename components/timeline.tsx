import { FunctionComponent, useRef } from "react";
import styles from "../styles/componants/timeline.module.scss"
import useOnScreen from "../customHooks/useOnScreen";
import useIsTablet from "../context/isTablet-Context";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface IPointinTimeInterface{
    time: Date 
    Description: ReactJSXElement
}
const TimeLine : FunctionComponent< {points: IPointinTimeInterface[]}> = ( {points})=>{
    const isTablet = useIsTablet()? ` ${styles.tablet} ` : ` ${styles.pc} ` ;
    return (
        <div  className={styles["timeline-container"] + isTablet}>
            {   
                points.sort((a,b)=>(a.time.getTime() - b.time.getTime()))
                      .map((point,i)=> <PointinTime key={"point"+i} time={point.time} Description={point.Description}/>)
            }
        </div>
    );
}

const PointinTime : FunctionComponent<IPointinTimeInterface> = ({time, Description})=>{
    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref)? " appear " : " disappear ";
    return(
        <div ref={ref} className={styles.cirlce + isVisible}>
            <span className={styles.time}>{ months[time.getMonth()] +", "+time.getFullYear()}</span>
            <p className={styles.action}>{Description}</p>
        </div>
    ) ;
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export default TimeLine;