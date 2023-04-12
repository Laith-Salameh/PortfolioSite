import { GetStaticPaths, GetStaticProps } from 'next'
import React, { Fragment, FunctionComponent } from 'react'
import apiRequest from '../../src/dataprovider'
import { IProject } from "../../src/dataprovider"
import Project from '../../components/sections/Portfolio/Project'
import NavBar from '../../components/navbar'

const ProjectPage: FunctionComponent<{project: IProject}> = ({project}) => {
  return (
          <>
            <NavBar />
            <Project {...project} />
          </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
    const projects = apiRequest();
    const paths: {params: {slug: string}}[] = projects.map(proj=>({params: { slug: proj.path}}))
    return {
        fallback: 'blocking',
        paths: paths ?? []
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params?.slug;
  const project = apiRequest();

  return {
    props: {
      project: project?.filter((proj)=> proj.path == slug)[0]
    }
  }
}

export default ProjectPage