import React from 'react'
import TodoSectionContainer from './TodoSectionContainer'

function TodoContainer({data}) {

    const {todoItem, handleDeleteActivity, handleStatusUpdate} = data;
    
    
  return (
    <div className='w-full px-2 pb-5 flex-auto flex flex-col items-center gap-20 md:flex-row md:justify-center md:items-center   '>
      
      <TodoSectionContainer todoItem={todoItem} heading='Todo list' events={{handleStatusUpdate, handleDeleteActivity}} status='enlisted' />

      <TodoSectionContainer  todoItem={todoItem}  heading='Ongoing Todo' status='ongoing' events={{handleStatusUpdate, handleDeleteActivity}} />
    </div>
  )
}

export default TodoContainer