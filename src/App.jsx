import { useState } from 'react'
import Form from './components/Form'
import TodoSectionContainer from './components/TodoSectionContainer';
import TodoContainer from './components/TodoContainer';


function App() {

  const [input, setInput] = useState('');
  const [todoItem, setTodoItem] = useState([]);
  

  const handleChange = e => setInput(e.target.value);

  const handleSubmit = function(e) {
    e.preventDefault();
    const data = [...todoItem];
    const random = `${Math.trunc(Math.random() * 1000)}${Math.trunc(Math.random() * 1000)}${Math.trunc(Math.random() * 1000)}`;
    data.push({id: random, task: input, status: 'enlisted'});
    setTodoItem(data);
    setInput('');
  }

  const handleStatusUpdate = function(customKey) {
    const res = todoItem.map(item => (item.id === customKey ? {...item, status: 'ongoing'} : item ));

    setTodoItem(res);

  }

  const handleDeleteActivity = function(customKey) {
    const res = todoItem.filter(item => (item.id !== customKey && item));
    setTodoItem(res);
  }


  return (
    <div className='min-h-screen bg-gradient-to-b from-orange-400 to-orange-300 flex flex-col items-center gap-10 '>
      <Form info={{todoItem, input, handleSubmit, handleChange}} />

      <TodoContainer data={{todoItem, handleDeleteActivity, handleStatusUpdate}} />
      
      {/* <TodoSectionContainer todoItem={todoItem} heading='Todo list' events={{handleStatusUpdate, handleDeleteActivity}} status='enlisted' />

      <TodoSectionContainer  todoItem={todoItem}  heading='Ongoing Todo' status='ongoing' events={{handleStatusUpdate, handleDeleteActivity}} /> */}
    </div>
  )
}

export default App


// flex flex-col gap-5 items-center bg-gradient-to-b from-orange-400 to-orange-300 md:bg-blue-300

// bg-red-200 flex flex-col items-center gap-5 md:bg-blue-300 md:flex-row md:items-start