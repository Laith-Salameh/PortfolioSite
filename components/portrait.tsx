import { FunctionComponent } from "react";

interface IPortrait{
    className?: string
}

const Portrait: FunctionComponent<IPortrait> = ({className})=>{
    const src = "/images/me.png";
    return <img alt="personal portrait" className={className?? ""} src={src} />
}

export default Portrait;