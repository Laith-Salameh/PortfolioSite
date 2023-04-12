import { FunctionComponent } from "react";
import styles from "../styles/componants/navbar.module.scss"
import Link from "next/link";
import { useRouter } from "next/router";

const items= [
    {
        text: "About",
        link: "/#About"
    },
    {
        text: "Portfolio",
        link: "/#Portfolio"
    },
    {
        text: "Connect",
        link: "/#Connect"
    },
    {
        text: "Hire Me",
        link: "mailto:contact@laithsalameh.com?subject=Hello, I'd Like to ..."
    }
]
const NavBar: FunctionComponent = ()=>{
    const router = useRouter();
    const { route } = router;
    const isHome = route === "/" ? true : false;
    return (
        <nav className={styles.nav}>
            <ul>
                {
                    items.map((item,i)=>(
                        <li key={i} >
                            {   isHome  ? <a href={item.link}>{item.text}</a>  
                                        : <Link href={item.link}>{item.text}</Link>
                            }
                        </li>
                        ))
                }
            </ul>
        </nav>
    );
}

export default NavBar;