import './App.css';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Loading from './Loading';
import { getToken, fetchUserData } from './auth';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  // const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const accessToken = await getToken();
        console.log(accessToken)
        const data = await fetchUserData(accessToken);
        console.log(data)
        console.log(data.data)
        console.log(data.request._header)
      } catch (error) {
        console.log(error, 'Oshibojka');
      }
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return ( 
    <div className="loading">
      <Loading />
    </div>
    );
  }


return (
      <div className="App">
        <Navbar />
        <Content />
      </div>
    );
}
