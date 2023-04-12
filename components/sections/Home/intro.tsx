import { FunctionComponent} from "react";
import styles from '../../../styles/Home/intro.module.scss'
//MUI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid } from '@mui/material'
import {MyLocation } from "@mui/icons-material"
//Componanats
import Portrait from '../../portrait'
import TextSwitcher from '../../textswitcher'


const Intro:  FunctionComponent = ()=>{
    return (
        <main className={styles.main}>
        <Grid container>
          <Grid item xs={12} md={1}/>
          
          <Grid item xs={12} md={6} className="center-column">
              <div className={styles.intro}>
                <div className={styles.location}>
                  <MyLocation /> Dubai, UAE
                </div>
                <div className={styles.name}>Laith Salameh</div>
                <TextSwitcher styles={styles} tasks={["Software Engineer", "Web Developer", "AI Developer" ,"Programmer"]} staticText='Hello, I`m a' />
                <p className={styles.brief}><span>Passionate about</span><span>Developing and Delivering</span><span>high-quality Software</span></p>
                <a className="button-group" href="#Skills">Check My Skills</a>
                <a className="button-group" href="/cv.pdf" download="Laith-Salameh-CV.pdf">Download My CV</a>
              </div>
          </Grid>
          <Grid item xs={12} md={4} className="center">
            <div className={styles['portrait-container']}>
              <Portrait className={styles.portrait} />
            </div>
          </Grid>
          <Grid item xs={12} md={1}/>
        </Grid>
        
      </main>
    );
}


export default Intro;