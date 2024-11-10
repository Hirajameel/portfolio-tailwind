import React from 'react'
import Image from 'next/image';
interface propstype {
    title: string;
    desc: string;
    img: string;
    tags: string[]; // Change to string[] to allow an array of strings
}

const Card:React.FC<propstype> = ({title,desc,img,tags}) => {
  return (
    <div className='border-4  border-black lg:w-[300px] md:w-[300px] w-full'data-aos="zoom-in-left">
        <div>
           <Image className='w-full h-56'
           src={img}
           width={350}
           height={350}
           alt={title}
           />
        </div>

        <div className='p-4 space-y-4'>
            <div className='text-4xl font-sans-extralight'>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) =>(
                    <div className='tags'key={el}>
                        {el}
                    </div>))}
            </div>
        </div>

    </div>
  )
}

export default Card