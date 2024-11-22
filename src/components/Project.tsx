import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data=[
  {
    id:0,
    title:"Static Interactive Resume",
    desc:"Static Interactive Resume built with HTML and CSS, allowing user to showcase their skills dynamically.",
    img:"/project_01.jpeg",
    tags:["HTML", "Node" ,"CSS","TYPESCRIPT"],
  },
  {
    id:1,
    title:"Dynamic Resume Builder",
    desc:"Dynamic Resume Builder built with HTML and CSS allowing user to create customized, professional resumes efficiently.",
    img:"/project_02.jpeg",
    tags:["HTML", "Node" ,"CSS","TYPESCRIPT"],
  },
  {
    id:2,
    title:"Editable Resume Builder",
    desc:"Editable Resume Builder built with HTML and CSS  offers flexibility to adjust and tailor every part of the resume according to the user's preferences.",
    img:"/project_03.jpeg",
    tags:["HTML", "Node" ,"CSS","TYPESCRIPT"],
  },
  {
    id:4,
    title:"Shareable Resume Builder",
    desc:"Shareable Resume Builder built with HTML and CSS allowing user to create resumes that are not only customizable but also easily shareable through digital platforms",
    img:"/project_04.jpeg",
    tags:["HTML", "Node" ,"CSS","TYPESCRIPT"],
  },
  {
    id:5,
    title:"Backatown Coffee Corner Website",
    desc:"The website serves as a virtual extension of the shop, providing visitors with an immersive experience that reflects the warmth and charm of the physical location.",
    img:"/project_05.PNG",
    tags:["HTML", "Node" ,"CSS"],
  },
]

const Project = () => {
  return (
    <div id='projects' className='container pt-32 text-black font-bold'>
      <Heading title='My Projects ' />
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center items-baseline '>
      {data.map((el) =>(<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}
    
      </div>
    </div>
  )
}

export default Project