import React from 'react'
import './customPagination.css'

const Paginations = ({ page, setPage, userList, perPage, handleNextBton }) => {

    return (
        <div className='index__btn'>
            {page > 1 && <button onClick={() => setPage(page - 1)}>Prev </button>}
            {userList.length > 1 && [...Array(Math.ceil(userList.length / perPage))].map((_, i) => {
                return (
                    <span className={`num__container ${page === i + 1 ? 'active__index' : ''}`} key={i} onClick={() => handleNextBton(i + 1)}>{i + 1}</span>
                )
            })}
            {(userList.length / perPage) > page && <button onClick={() => setPage(page + 1)}>Next </button>}
        </div>
    )
}

export default Paginations;
