import React from 'react'
import Heading from './Heading'
import TodoActivity from './TodoActivity';

function TodoSectionContainer({todoItem=[], heading, events={}, status }) {
    const {handleStatusUpdate, handleDeleteActivity} = events;

    
    

  return (
    <div className='w-80 h-96  overflow-auto bg-gradient-to-tr from-slate-800 to-slate-400 shadow-2xl bg-slate-800 rounded-md relative overflow-x-hidden '>
        <Heading name={heading} />
        <TodoActivity data={{todoItem, events, status}} />


        {/* {todoItem.map(item => (item.status === 'enlisted' &&
        <div key={item.id} className='w-full h-10 flex justify-between items-center'>
            <p>{item.task}</p>
            {item.id ?
            <div className='flex gap-4'>
                <button onClick={() => handleStatusUpdate(item.id)}>b</button>
                <button onClick={() => handleDeleteActivity(item.id)}>x</button>
            </div>
            : null}
            
        </div>
        ))} */}
    </div>
  )
}

export default TodoSectionContainer