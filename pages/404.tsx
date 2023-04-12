import Head from "next/head";
import { FunctionComponent } from "react";
import NavBar from "../components/navbar";
import Link from "next/link";


const PageNotFound: FunctionComponent = ( )=>{
    return <>
    <Head>
      <title>Laith Salameh - 404 page not found</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className="page-404">
        <h1>404 | page not found</h1>
        <Link href="/">Back Home</Link>
    </section>

    </>
}

export default PageNotFound;