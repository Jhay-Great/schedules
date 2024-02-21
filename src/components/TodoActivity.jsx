import React from 'react'

function TodoActivity({data}) {
    const {todoItem, events: { handleStatusUpdate, handleDeleteActivity }, status} = data;

    
  return (
    <div>
        {todoItem.map(item => (item.status === status &&
        <div key={item.id} className='w-full h-10 px-2 py-1 flex justify-between items-center'>
            <p>{item.task}</p>
            {item.id ?
            <div className='flex gap-4'>
                <button onClick={() => handleStatusUpdate(item.id)}>b</button>
                <button onClick={() => handleDeleteActivity(item.id)}>x</button>
            </div>
            : null}
            
        </div>
        ))}
    </div>
  )
}

export default TodoActivity