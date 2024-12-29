import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserTie} from '@fortawesome/free-solid-svg-icons'
import myContext from './MyContext/Mycontext.jsx';

const Sidebar = () => {
  const [filter, setFilter]=useState(false);
  const {userInfo, setUserInfo}= useContext(myContext);

  return (
    <div className='p-4 d-flex text-light flex-column align-items-center text-center ' style={{width:"20vw", height:'100vh', background:'#50686f', borderLeft:"2px solid black", cursor:'pointer'}}>
      <div className='text-light'>
        <h4>Self Assist</h4>
      </div>
      <div className='mt-4'>
           <FontAwesomeIcon icon={faUserTie} size='2x' />
      </div>
      <div className='text-light mt-4'>
        {userInfo ? userInfo.name : "user"}
      </div>

      <div className='mt-3 px-3 p-1' id='filterDiv' onClick={()=> setFilter(!filter)} style={{background : filter ? 'black':'none', width:'100%', borderRadius:"20px", hover:"black"}}>
        filter importance
      </div>
     { filter ? ( 
      <>
      <div className='mt-3 px-3 p-1 ' onClick={()=> setFilter('pending')}  style={{borderBottom: filter === 'pending'? '4px solid white':'none', borderRadius:"20%"}}>
        Pending
      </div>
      <div className='mt-3 px-3 p-1' onClick={()=> setFilter('progress')}  style={{borderBottom: filter === 'progress'? '4px solid white':'none', borderRadius:"20%"}}>
        Progress
      </div>
      <div className='mt-3 px-3 p-1' onClick={()=> setFilter('completed')}  style={{borderBottom: filter === 'completed'? '4px solid white':'none', borderRadius:"20%"}} >
        Completed
      </div>
      </>
     ) : null}



    </div>
  )
}

export default Sidebar