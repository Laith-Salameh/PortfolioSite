import { FunctionComponent } from "react"

interface ITextSwitcher{
    styles: {
        readonly [key: string]: string;
    },
    tasks: string[]
    staticText?: string
}
const TextSwitcher : FunctionComponent<ITextSwitcher> = ({ tasks, staticText, styles })=>{
    return  <div className={ styles.textSwitcher }>
                        {staticText && <span className={styles.staticText}>{staticText}</span>}
                        <div className={styles.dynamicTasks}>
                            <ul >
                                { tasks.map((task,i)=>{
                                    return <li key={"task"+i}>{task}</li>
                                })}
                            </ul>
                        </div>
            </div>
}

export default TextSwitcher;