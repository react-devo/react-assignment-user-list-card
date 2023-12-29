
import React, { useEffect, useState } from 'react';
import './App.css';
import ErrorPage from './components/ErrorPage/CustomErrorPage';
import UserListingPage from './components/User/UserListingPage';
import { fetchUserDataList } from './apiService/userService';
import Loader from './components/loader/Loader';

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserListData()
  }, []);


  // get user list from dummy api
  const fetchUserListData = async () => {
    try {
      const result = await fetchUserDataList('users')

      setUserList(result.users);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="App">
      {loading ? <Loader /> : <div className='main_container'>
        <div className='heading'><h2>Rails and React II: A real use case</h2></div>
        <div className='input_box'>Search Box</div>

        {error && <ErrorPage error={error} />}

        {userList?.length > 0 && <div>
          {userList.map((user) => {
            return (
              <UserListingPage key={user.id} {...user} />
            )
          })}

        </div>}
      </div>}
    </div>
  );
}

export default App;
