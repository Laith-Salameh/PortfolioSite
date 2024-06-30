import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "../../../styles/Home/portfolio.module.scss"
import useOnScreen from "../../../customHooks/useOnScreen";
import { Grid } from "@mui/material";
import {IProject } from "../../../src/dataprovider"
import Logos, { ILogo } from "../../Icons/Portfolio";



const Portfolio : FunctionComponent<{projects: IProject[]}> = ({projects})=>{
    const Titleref = useRef<HTMLDivElement>(null)
    const isVisibleTitleref = useOnScreen(Titleref)? " appear" : " disappear-left"
    const Cardref = useRef<HTMLDivElement>(null)
    const isVisibleCard = useOnScreen(Cardref)? " appear" : " disappear-right";
    return (
        <section>
            <div className={"section "+ styles.main }>
                <h1 id="Portfolio" ref={Titleref} className={isVisibleTitleref}>Portfolio</h1>
                <div ref={Cardref} className={styles["card-back"] + isVisibleCard}></div>
                <PortfolioContainer >
                    <>
                        {
                            projects.map((proj,i)=>(
                                <PortfolioCard key={i} Icon={Logos[proj.icon]} title={proj.title} path={proj.path} />
                            ))
                        }
                        <PortfolioLastCard title="Let's Create this Project Together" link="mailto:laith.salameh25@gmail.com?subject=Hello, I'd Like to ..."/>
                    </>
                </PortfolioContainer>
            </div>
        </section>
    )
}

const PortfolioContainer : FunctionComponent<{children?: JSX.Element | JSX.Element[]}> = ({children})=>{
    return (
        <Grid container spacing={3} className={styles.container} >
                { children }     
        </Grid> 
    )
}

const PortfolioCard :FunctionComponent< {title:  string, Icon?: FunctionComponent<ILogo>, path?: string} > = ({title, Icon, path})=>{
    const Cardref = useRef<HTMLDivElement>(null)
    const IsVisible = useOnScreen(Cardref);
    const isVisibleCard = IsVisible ? " appear" : " disappear-bottom";
    const content = <div className={styles["work-card"]}> 
                        {Icon && <Icon className={styles.icon} isVisible={IsVisible} /> }
                        <div className={styles["work-card-title"]}>{title}</div>
                    </div>
    return (
        <Grid ref={Cardref} className={isVisibleCard} item xs={12} sm={4} md={4} > 
            { 
                path ? <a href={"/Portfolio/"+path}>{content}</a> 
                     : content 
            }
        </Grid>
    )
}

const PortfolioLastCard :FunctionComponent< {title:  string, link: string} > = ({title, link})=>{
    const Cardref = useRef<HTMLDivElement>(null)
    const IsVisible = useOnScreen(Cardref);
    const isVisibleCard = IsVisible ? " appear" : " disappear-bottom";
    return (
        <Grid ref={Cardref} className={isVisibleCard} item xs={12} sm={4} md={4} > 
            <a href={link}>
                <div className={styles["work-card"] + " " +styles.active}> 
                    <div className={styles["work-card-title"]}>{title}</div>
                </div>
            </a>
        </Grid>
    )
}

export default Portfolio;