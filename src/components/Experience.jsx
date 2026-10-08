import experienceData from "../data/experience";
import ExperienceCard from "./ExperienceCard";
function Experience() {
  return (
    <section id="experience" className='bg-blue-950 text-white py-10'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 text-center'>My Journey</h2>
        </div>
        <div className='container max-w-4xl justify-center mx-auto px-4'>
            <div className='grid grid-cols-1 gap-6  '>
                {/* Experience cards will go here */}
                {
                    experienceData.map((experience, index) => ( 
                        <ExperienceCard key={index} experience={experience} />
                    ))  
                }
                
            </div>
        </div>  
    </section>
  )
}

export default Experience;