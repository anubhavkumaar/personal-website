import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';
import { getProjects } from './api/projects';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>Unable to Load Project: 502</p>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const projects = await getProjects();
    projects.sort((a, b) => b.seq - a.seq);
    return {
      props: {
        title: "Projects",
        projects,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.error("Error in getStaticProps:", err);
    return {
      props: {
        projects: [],
      },
    };
  }
}

export default ProjectsPage;
