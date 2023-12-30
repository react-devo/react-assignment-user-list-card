
import React, { useEffect, useState } from 'react';
import './App.css';
import ErrorPage from './components/ErrorPage/CustomErrorPage';
import UserListingPage from './components/User/UserListingPage';
import { fetchUserDataList } from './apiService/userService';
import Loader from './components/loader/Loader';
import './apiService/UserCard.css';

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    fetchUserListData()
  }, []);


  // get all user list from dummy api
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

  // custom debouce method
  const customDebounce = (cb, time) => {
    let timeoutId;
    return function (...arg) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        cb(...arg)
      }, time)
    }
  }

  // filter data by their name key
  const searchUserByName = (name) => {
    if (name.trim().length > 0) {
      const filterUserList = userList.filter((item) =>
        item.firstName.toLowerCase().includes(name.toLowerCase())
      );
      setUserList(filterUserList);
    } else {
      fetchUserListData();
    }
  };

  // handle input value onchange
  const hanldeInputChange = (value) => {
    setSearchKey(value)
    let filterByName = customDebounce(searchUserByName, 500)
    filterByName(value);

  }
  return (<>
    {/* <UserListingPage /> */}
    <div className="pageWrapper">
      {<div className="siteWidth">
        <div className="titleBar">
          <h2>Rails and React II: A Real USE CASE</h2>
        </div>
        <div className="filterBar">
          <input type="text" placeholder="Search people..." value={searchKey} onChange={(e) => hanldeInputChange(e.target.value)} />
        </div>
        {error && <ErrorPage error={error} />}
        {loading && <Loader />}
        {userList?.length > 0 ? <div className="cardBlock">
          {userList.slice(0,12).map((user) => {
            
            return (
              <UserListingPage key={user.id} {...user} />
            )
          })}

        </div> : !loading && <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "300px", color: 'white', }}>No result found.</p>}
      </div>}
    </div>
  </>
  );


}

export default App;
