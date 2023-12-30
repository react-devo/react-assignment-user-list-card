
import React, { useEffect, useState } from 'react';
import './App.css';
import ErrorPage from './components/ErrorPage/CustomErrorPage';
import UserListingPage from './components/User/UserListingPage';
import { fetchUserDataList } from './apiService/userService';
import Loader from './components/loader/Loader';
import './components/User/UserCardListing.css';
import Paginations from './components/pagination/CustomPagination';

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState('')
  const [page, setPage] = useState(1);
  let perPage = 12;

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
      setLoading(true);
      fetchUserListData();
    }
  };

  // handle input value onchange
  const hanldeInputChange = (value) => {
    setSearchKey(value)
    let filterByName = customDebounce(searchUserByName, 500)
    filterByName(value);

  }

  // handle next btn
  const handleNextBton = (pageNum) => {
    page !== pageNum && setPage(pageNum)
  }
  return (
    <>
      <div className="pageWrapper">
        {<div className="siteWidth">
          <div className="titleBar">
            <h3>Rails and React II: A Real Use Case</h3>
          </div>
          <div className="filterBar">
            <input type="text" placeholder="Search people..." value={searchKey} onChange={(e) => hanldeInputChange(e.target.value)} />
          </div>
          {error && <ErrorPage error={error} />}
          {loading && <Loader />}
          {userList?.length > 0 ? <div className="cardBlock">
            {userList.slice(page * perPage - 12, page * perPage).map((user) => {
              return (
                <UserListingPage key={user.id} {...user} />
              )
            })}

            <Paginations page={page} setPage={setPage} userList={userList} perPage={perPage} handleNextBton={handleNextBton} />

          </div> : !loading && <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "300px", color: 'white', }}>No result found.</p>}
        </div>}
      </div>
    </>
  );


}

export default App;
