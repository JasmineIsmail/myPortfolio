import skills from '../data/skills';
import React, { useState } from 'react';

const Skills = () => {
    console.log(skills);
    const [skillsData, setSkillsData] = useState(skills);
    let skillcategories = [...new Set(skills.map(skill => skill.category))];
    const showSkillsByCategory = (category) => {
    if (category === 'All') {
      setSkillsData(skills);
    }
    const filteredSkills = skills.filter(skill => skill.category === category);
    setSkillsData(filteredSkills);
};
  return (
   <section id ="skills" className='bg-blue-950 text-white py-10'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-8 text-center'>My technical toolkit</h2>
        <div className='flex justify-center mb-8'>
            <button 
                className='bg-white hover:bg-purple-600 text-blue-950 font-bold py-2 px-4 rounded transition-colors cursor-pointer'
                onClick={() => showSkillsByCategory('All')}
            >
                All
            </button> 
            {skillcategories.map((category, index) => (
                <button key={index} 
                    className='bg-white hover:bg-purple-600 text-blue-950 font-bold py-1 px-2 rounded transition-colors ml-2 cursor-pointer'
                    onClick={() => showSkillsByCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
            {skillsData.map((skill, index) =>{
                const IconComponent = skill.icon;
                return  (
                <div key={index} className=' bg-slate-900 p-2 rounded-lg shadow-lg flex flex-col'>
                    < IconComponent className={`w-12 h-12 ${skill.color} animate-pulse`}/>
                    <h3 className='text-md mb-2'>{skill.name}</h3>
                </div>
            )
            })}
        </div>
      </div>
    </section>  
  )
}

export default Skills   