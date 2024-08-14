import React from 'react'
import conf from '../conf/conf'
import {Link} from 'react-router-dom'
function Postcard({id,title,featuredImage}) {
  return (
    <Link to={`/post/${id}`}>
        <div className='w-full bg-green-100 rounded-xl p-5 '>
                <div className='w-full justify-center mb-4'>
                        <img src="" alt={title}  className='rounded-xl'/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default Postcard