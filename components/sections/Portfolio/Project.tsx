import { Fragment, FunctionComponent, useRef } from "react";
import styles from "../../../styles/Portfolio/project.module.scss"
import useOnScreen from "../../../customHooks/useOnScreen";
import { IProject } from "../../../src/dataprovider";
import PhotoAlbumLightbox from "./PhotoAlbumLightbox";

const Project : FunctionComponent<IProject> = ({ title, brief, technologies, liveLink, gitHubLink, images})=>{
    const Titleref = useRef<HTMLDivElement>(null)
    const isVisibleTitleref = useOnScreen(Titleref)? " appear" : " disappear"
    const Briefref = useRef<HTMLDivElement>(null)
    const isVisibleBriefref = useOnScreen(Briefref)? " appear" : " disappear"
    const Linkref = useRef<HTMLAnchorElement>(null)
    const isVisibleLinkref = useOnScreen(Linkref)? " appear" : " disappear"
    const GitLinkref = useRef<HTMLAnchorElement>(null)
    const isVisibleGitLinkref = useOnScreen(GitLinkref)? " appear" : " disappear"
    return (
        <main>
            <div className={"section "+ styles.main }>
                <h1 ref={Titleref} className={isVisibleTitleref}>{title}</h1>
                <p ref={Briefref} className={isVisibleBriefref} lang="en">
                    <span dangerouslySetInnerHTML={{__html: brief}}></span>. 
                     Using: {technologies.map((tech,i,n)=>{
                        if( (i+1 == n.length) ){
                            return <Fragment key={i}>and <strong>{tech}</strong>.</Fragment>
                        }
                        else{
                            return <Fragment key={i}><strong>{tech}</strong>, </Fragment>
                        }
                     })}
                </p>
                {liveLink && <a ref={Linkref} className={"button-group" + isVisibleLinkref} href={liveLink}>Visit Live Website</a>}
                {gitHubLink && <a ref={GitLinkref} className={"button-group" + isVisibleGitLinkref} href={gitHubLink}>Check GitHub Code</a>}
                {
                    images && <PhotoAlbumLightbox photos={
                        images.map(( image, i) => ({
                        src:  `/images/${image.containerPath}/${image.fileName}`,
                        alt: `image of ${title}-${i}`,
                        width:  image.width,
                        height: image.height,
                        }))}/>
                }
            </div>
        </main>
    )
}


export default Project;