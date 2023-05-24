import { projects } from "../../constants/portfolio"
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import '../../Styles/Projects.css'

export default function ProjectsPage() {
  if (!projects.length) return null
  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>

        {projects.map((project) => (
          <ProjectContainer key={project.projectId} project={project} />
        ))}
        
      </div>
    </section>
  );
}