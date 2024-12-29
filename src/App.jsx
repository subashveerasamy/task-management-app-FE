import React, { useState, useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import axios from 'axios';
import myContext from './Components/MyContext/Mycontext.jsx';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
   
    const fetchUserDetails = async () => {
      try {
        console.log("Fetching user details...");

        const response = await axios.get('/user/getuserdetails', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        });

        if (response.data) {
          setUserInfo(response.data.user);
          console.log("User details fetched successfully:", response.data.user);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <myContext.Provider value={{ userInfo, setUserInfo }}>
      <div className='d-flex'>
        <Dashboard />
        <Sidebar />
      </div>
    </myContext.Provider>
  );
};

export default App;
