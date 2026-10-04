import projectsData from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {

  return (
    <section className='bg-blue-950 text-white py-10'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>My Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* Project cards will go here */}
                {projectsData.map(project => ( 
                    <ProjectCard  {key:project.id, project} />
                )) 
                }
            </div>
        </div>
    </section>
  )
}

export default Projects