import React from 'react'

const skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>

            <div>
                <h2 className='text-4xl md:text-5xl'>Technology</h2>
                <p className='text-gray-600 pt-3'>I have a good experience in HTML,CSS and JavaScript.</p>

    
            </div>
            <div className='space-y-2'>
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>Typescript</h2>
              <h2>Tailwind</h2>
            </div>
        </div>
      
    </div>
  )
}

export default skills
