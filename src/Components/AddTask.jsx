import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button'

const AddTask = ({handleTaskAdd}) => {

  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTaskAdd(inputData);
    setInputData('');
  }

  return (
    <div className='add-task-container'>
      <input 
        type="text" 
        className='add-task-input' 
        onChange={handleInputChange}
        value={inputData}
      />
      <div className="add-task-button-container">
      <Button onClick={handleSubmit}>Adicionar</Button>
      </div>
    </div>
   );
}
 
export default AddTask;