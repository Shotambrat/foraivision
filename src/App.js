import './styles/App.css';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Loading from './auth/Loading';
import { getToken } from './auth/auth';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from './actions/action';

// import { fetchResources } from './actions/resourses';
// import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  // const resources = useSelector(state => state.resources.resources);
  // // const loading = useSelector(state => state.resources.loading);
  // const error = useSelector(state => state.resources.error);
  const [loading, setLoading] = useState(true)
  const [token, setTaken] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        let response = await getToken();
        // console.log(response);
        setTaken(response);
        console.log(token);
        dispatch(setToken(response));
      } catch (error) {
        console.log(error, 'Oshibojka');
      }
      setLoading(false)
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

//   useEffect(() => {
//     dispatch(fetchResources('your_token_here'));
//   }, [dispatch]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       {resources.map(resource => (
//         <img key={resource.id} src={resource.preview} alt={resource.name} />
//       ))}
//     </div>
//   );
// };
}
