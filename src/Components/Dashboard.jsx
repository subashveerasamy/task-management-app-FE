import React, {  useContext, useState } from 'react'
import { TextField, IconButton, ThemeProvider, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import myContext from './MyContext/Mycontext.jsx';

const Dashboard = () => {
  const [taskTab, setTaskTab]=useState("pending");
  const [newTask, setNewTask]=useState(false);
  const {userInfo, setUserInfo}= useContext(myContext)
    const theme = createTheme({
        palette: {
          text: {
            primary: '#ffffff', 
          },
        },
      });








  return (
    <div style={{position:'relative'}}>
      { 
      newTask ? (
       <div style={{position:'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex:"1"}}>
           <div className="card m-2" style={{width:'60vw', height:'60vh'}} >
   <form >
    
    <div className='d-flex justify-content-around align-items-center'>
    <div>
    <label >Task Title :</label>
     </div>
     <div>
     <input className='form-control w-50 mx-5 m-3' type="text" placeholder='Task Title' required />
    
    </div>
    
      </div>


      <div className='d-flex justify-content-around align-items-center'>
    <div>
    <label >Task Importance :</label>
     </div>
     <div>
     <input  className=' mx-2' name='importance' value='low' type="radio" required/>Low
     <input  className=' mx-2' name='importance' value='medium' type="radio" required/>Medium
     <input  className=' mx-2' name='importance' value='high' type="radio" required/>High
    
    </div>
</div>
<div className='d-flex justify-content-around align-items-center'>
    <div>
    <label >Due Date :</label>
     </div>
     <div>
     <input className='form-control w-50 mx-5 m-3' type="date" placeholder='Task Title' required />
    
    </div>
    
      </div>

      <div className='d-flex justify-content-around align-items-center'>
    <div>
    <label >task Description :</label>
     </div>
     <div>
     <textarea name="task description" className='form-control' required></textarea>
    </div>
    
      </div>
   </form>
</div>
       </div>
      ): null

      }


      <div className='d-flex text-light justify-content-around align-items-center' style={{width:"80vw", background:"#50686f"}}>
        <div>Hi! {userInfo ?userInfo.name : "user"}</div>
       <div>
       <ThemeProvider theme={theme}>
                <TextField
                className='mb-3'
                  id="standard-basic"
                  label="Search"
                  variant="standard"
                 
                 
                  type='text'
                  InputProps={{
                    endAdornment: (
                      <IconButton type="button" aria-label="search" sx={{ color: "white" }}>
                        <SearchIcon />
                      </IconButton>
                    ),
                  }}
                  sx={{
                    width: '35vw',
                    '& .Mui-focused .MuiInputLabel-root': {
                      color: 'white',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'white',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottomColor: 'white',
                    },
                  }}
                />
              </ThemeProvider>
       </div>

        <div className='btn btn-primary' onClick={()=> setNewTask(!newTask)}>
          Add New task
        </div>
    
    
    
    </div>



    <div className='d-flex justify-content-evenly aling-items-center p-3 text-light' style={{background:"#080013", cursor:'pointer'}}>
                  <div className='p-2' onClick={()=>setTaskTab("pending")} style={{borderRadius:"20%",borderBottom : taskTab==='pending' ? '4px solid white' : "none" }}>Pending</div>
                  <div className='p-2' onClick={()=> setTaskTab('progress')}  style={{borderRadius:"20%",borderBottom : taskTab==='progress' ? '4px solid white' : "none" }}>Progress</div>
                  <div className='p-2' onClick={()=>setTaskTab('completed')} style={{borderRadius:"20%",borderBottom : taskTab==='completed' ? '4px solid white' : "none" }}>Completed</div>
    </div>
   
   <div>
    
   </div>
   {userInfo && Array.isArray(userInfo.task) && userInfo.task.length > 0 ? userInfo.task.map((eachTask) => {
  if (eachTask.status === taskTab) {
    return (
      <div className="card m-2" style={{width: '30vw'}} key={eachTask.id}>
        <div className="card-body">
          <h5 className="card-title">{eachTask.title}</h5>
          <p>Added on: {eachTask.addedOn}</p>
          <h6 className="card-subtitle mb-2 text-body-secondary">Due date: {eachTask.dueDate}</h6>
          <p className="card-text">{eachTask.description}</p>
        </div>
      </div>
    );
  }
  return null;
}) : null}



    </div>
    
)
  
}

export default Dashboard