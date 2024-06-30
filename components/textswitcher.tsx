import { FunctionComponent,useEffect,useState } from "react"

interface ITextSwitcher{
    styles: {
        readonly [key: string]: string;
    },
    tasks: string[]
    staticText?: string
}
const TextSwitcher : FunctionComponent<ITextSwitcher> = ({ tasks, staticText, styles })=>{
    const [mounted,setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    
    return  <div className={ styles.textSwitcher}>
                        {staticText && <span className={styles.staticText}>{staticText}</span>}
                        <div className={styles.dynamicTasks}>
                            <ul className={`${ mounted ? styles.animateMovemntTextSwitcher : ""}`}>
                                { tasks.map((task,i)=>{
                                    return <li key={"task"+i}>{task}</li>
                                })}
                            </ul>
                        </div>
            </div>
}

export default TextSwitcher;