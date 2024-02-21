import React from 'react'

function Heading({name}) {
  return (
    <h1 className='text-2xl px-2 py-1 font-sans font-bold text-white  bg-slate-700 w-full  '>
        {name}
    </h1>
  )
}

export default Heading