import React from 'react';
import { useHistory, useParams } from 'react-router-dom';


import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
  const params = useParams();

  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  return ( 
    <>
      <div className="back-button-container">
        <Button onClick={handleBack}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dolor vero ut provident assumenda. In deserunt, enim nam nulla rem iste, impedit accusamus quos totam possimus consequatur! Non, aut soluta!</p>
      </div>
    </>
   );
}
 
export default TaskDetails;