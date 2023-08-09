import React from "react";
import jsonProjects from "@/data/project.json";
// import { Project } from '@/data/schema';
import { graphql, GraphQlQueryResponseData } from "@octokit/graphql";
import ProjectCard from "@/components/ProjectCard";
import Repo from "./Repo";
import { fetchProjects } from "@/lib/graphql/data";
import { ProjectResponse } from "@/lib/graphql/schema";

const Projects = async () => {
  // const fetchedProjects: ProjectResponse[] =
  //   process.env.NEXT_PUBLIC_DATASOURCE === "json"
  //     ? jsonProjects
  //     : await fetchProjects();

  // const fetchedProjects = await fetchProjects();

  const fetchedProjects = jsonProjects;
  const [featuredProjects, unfeaturedProjects] = await sortProjects(
    fetchedProjects
  );
  return (
    <main>
      <section className="bg-white dark:bg-indigo">
        <div className="w-full max-w-7xl px-4 sm:px-[3rem] lg:px-[7.5rem] py-[3.875rem] sm:py-28 m-auto">
          <h1 className="text-center sm:text-left">Featured Projects</h1>
          <div className="mt-6 sm:mt-4 flex flex-col gap-6 sm:gap-12">
            {featuredProjects.map(
              (
                {
                  name,
                  logo_path,
                  owner,
                  repo,
                  deployed_link,
                  description,
                  stacks,
                },
                i
              ) => (
                <ProjectCard
                  key={i}
                  name={name}
                  logo_path={logo_path}
                  deployed_link={deployed_link!}
                  description={description}
                  stacks={stacks}
                  github_link={`https://github.com/${owner}/${repo}`}
                  left={!!(i % 2)}
                />
              )
            )}
          </div>
        </div>
      </section>
      <section className="w-full bg-zinc-100 dark:bg-purple-dark">
        <Repo projects={unfeaturedProjects} />
      </section>
    </main>
  );
};

const sortProjects = async (fetchedProjects: ProjectResponse[]) => {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${process.env.GH_PAT}`,
    },
  });
  let query = "{";
  for (let i = 0; i < fetchedProjects.length; i++) {
    const project = fetchedProjects[i];
    query += `repo${i}: repository(name: "${project.repo}", owner: "${project.owner}") {pushedAt}`;
  }
  query += "}";
  const result = await graphqlWithAuth<GraphQlQueryResponseData>(query);

  const fetchedProjectsWithResults: (ProjectResponse & { pushedAt: string })[] =
    fetchedProjects.map((project, i) => ({
      ...project,
      ...result[`repo${i}`],
    }));
  const featuredProjects = fetchedProjectsWithResults.filter(
    (project) => project.featured
  );
  const unfeaturedProjects = fetchedProjectsWithResults.filter(
    (project) => !project.featured
  );
  featuredProjects.sort((a, b) => {
    if (a.pushedAt && b.pushedAt) {
      return new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime();
    } else if (b.pushedAt) {
      return 1;
    } else {
      return -1;
    }
  });
  unfeaturedProjects.sort((a, b) => {
    if (a.pushedAt && b.pushedAt) {
      return new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime();
    } else if (b.pushedAt) {
      return 1;
    } else {
      return -1;
    }
  });
  return [featuredProjects, unfeaturedProjects];
};

export default Projects;
