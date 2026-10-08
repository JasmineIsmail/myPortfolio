import React from 'react'

function ExperienceCard({ experience }) {
  return (
    <div className='bg-slate-800 p-6 rounded-lg shadow-lg'>
      <div className='flex items-center mb-4'>
        <experience.icon className='text-blue-400 mr-3' />
        <h3 className='text-xl font-bold'>{experience.title}</h3>
      </div>
      <p className='text-blue-300 mb-2'>{experience.organization} • {experience.period}</p>
      {experience.description && (
        <p className='text-gray-300 mb-4'>{experience.description}</p>
      )}
      {experience.highlights && experience.highlights.length > 0 && (
        <div className='mb-4'>
          <h4 className='text-lg font-semibold mb-2'>Highlights:</h4>
          <ul className='list-disc list-inside text-gray-300'>
            {experience.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ExperienceCard;