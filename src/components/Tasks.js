import React, { useState } from 'react';

const Tasks = ({task , deleteTodo , index, }) => {

const[complete, setComplete]=useState('') 

  return (
    <div className='main'>
     <div> 
       <input type='checkbox'  checked = {complete} onChange={()=>{setComplete(!complete)}} />
       </div>
          <div className='task'>
        <h2 style={{textDecoration:complete? "line-through":""}}> {task} </h2>
    </div>
    <div>
    <button className='delete-btn' onClick={() => deleteTodo(index)}> DELETE </button>
    </div>
   </div>
 
  )
}

export default Tasks;