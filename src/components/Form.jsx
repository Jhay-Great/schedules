import React, { useState } from 'react'

function Form({info}) {
    const {todoItem, input, handleSubmit, handleChange} = info;

  return (
    <>
        <form onSubmit={handleSubmit} className='w-full h-10 flex gap-10 '>
            <input type="text" value={input} onChange={handleChange} className='flex-auto h-full p-3' />
            <button type='submit' onSubmit={handleSubmit} className='w-10 h-full'>Add</button>
        </form>
        {/* {todoItem.map(item => <p key={item.id}>{item.task}</p>)} */}
    </>
  )
}

export default Form



