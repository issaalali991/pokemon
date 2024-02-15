import React from 'react'
import { useNavigate } from 'react-router-dom';

function FightButton() {

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=>{
        navigate('/fight');
      }}>
        <img src="./fight.svg" alt="" className="mb-4 w-96 h-11/12" />
      </button>
    </div>
  );
}

export default FightButton