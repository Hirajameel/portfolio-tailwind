import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-left">
                <h2 className='text-4xl md:text-5xl font-bold'>Technologies I Work With</h2>
                <p className='text-purple-950 pt-2'>
                "My expertise in HTML, CSS, JavaScript, and TypeScript forms a strong foundation for creating modern, 
                interactive, and visually appealing web applications. With HTML, I focus on building well-structured and accessible layouts. 
                Using CSS, I add unique styling and ensure that my designs are responsive across various devices. JavaScript is where I bring interactivity into my projects, adding dynamic features and functionality to enhance the user experience. With TypeScript,
             I prioritize writing reliable and maintainable code, leveraging type safety for better error handling and smoother development in larger projects. Together, these skills enable me to craft efficient and engaging websites that balance performance and design."
             </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text- text-3xl sm:text-4xl'data-aos="zoom-in-left">
                    <div className='spcae-y-2'>
                     <h2>Typescript</h2>
                     <h2>HTML</h2>
                     <h2>CSS</h2>
                    </div>
                    <div className='spcae-y-2'>
                     <h2>Next.js</h2>
                     <h2>Tailwind</h2>
                     <h2>Node.js</h2>

                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
