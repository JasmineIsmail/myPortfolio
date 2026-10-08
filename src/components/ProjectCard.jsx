import { ExternalLink, Eye, GitBranch, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function ProjectCard({data}) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  return (
    <>
    <div className='group bg-slate-900 rounded-lg overflow-hidden shadow-lg p-4 border-indigo-800'>
     <div className='relative overflow-hidden rounded-lg mb-4'>
      <img 
        src={data.image} 
        alt={data.title} 
        className='w-full h-48 object-cover mb-4 rounded group-hover:scale-105 transition-transform duration-500' />
      <div className='absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3' >
      <button 
        title='view project' 
        className='p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors'
        onClick={() => setSelectedProject(data)}
      >
        <Eye className='w-6 h-6 text-white' /> 
      </button>
      </div>
      </div> 
      <h3 className='text-xl font-bold mb-2'>{data.title}</h3>
      <h4 className='text-gray-400 font-semibold mb-2'>{data.tagline}</h4>
          <div className='flex flex-wrap gap-1.5 pt-2'>
        {
          data.techStack.map((tech, index) => (
          <span key={index} className='bg-gray-700 text-white text-sm px-1 py-1 rounded'>
            {tech}
          </span>
        ))}
      </div>
      <div className='flex gap-2 pt-2 justify-end'>
        <a href={data.liveDemo} target="_blank" rel="noopener noreferrer" className='bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors'> 
         <ExternalLink className='w-4 h-4 inline-block mr-1' />
        </a>
        <a href={data.github} target="_blank" rel="noopener noreferrer" className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors'>
          <GitBranch className='w-4 h-4 inline-block mr-1' />
        </a>
      </div>
    </div>

    {selectedProject && createPortal(
      <div
        className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4'
        onClick={() => setSelectedProject(null)}
      >
        <div
          role='dialog'
          aria-modal='true'
          aria-labelledby={`project-title-${data.id}`}
          className='relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-slate-900 text-white shadow-2xl'
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type='button'
            aria-label='Close project details'
            className='absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black'
            onClick={() => setSelectedProject(null)}
          >
            <X className='h-5 w-5' />
          </button>
          <img src={data.image} alt={data.title} className='h-56 w-full object-cover sm:h-72' />
          <div className='space-y-5 p-6 sm:p-8'>
            <div>
              <p className='mb-2 text-sm font-semibold uppercase tracking-wide text-sky-300'>{data.category}</p>
              <h2 id={`project-title-${data.id}`} className='text-2xl font-bold sm:text-3xl'>{data.title}</h2>
              <p className='mt-2 text-lg text-slate-300'>{data.tagline}</p>
            </div>
            <p className='leading-relaxed text-slate-200'>{data.description}</p>
            <div>
              <h3 className='mb-3 text-lg font-semibold'>Key features</h3>
              <ul className='list-disc space-y-2 pl-5 text-slate-300'>
                {data.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
            <div>
              <h3 className='mb-3 text-lg font-semibold'>Built with</h3>
              <div className='flex flex-wrap gap-2'>
                {data.techStack.map((tech) => (
                  <span key={tech} className='rounded bg-slate-700 px-2.5 py-1 text-sm text-slate-100'>{tech}</span>
                ))}
              </div>
            </div>
            <div className='flex flex-wrap gap-3 border-t border-slate-700 pt-5'>
              <a href={data.liveDemo} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded bg-sky-700 px-4 py-2 font-semibold transition-colors hover:bg-sky-600'>
                <ExternalLink className='h-4 w-4' /> Live demo
              </a>
              <a href={data.github} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded bg-slate-700 px-4 py-2 font-semibold transition-colors hover:bg-slate-600'>
                <GitBranch className='h-4 w-4' /> Source code
              </a>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )}
    </>
  )
}

export default ProjectCard