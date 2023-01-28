import React, { useState } from 'react'
import { Button } from './Button'

export const Pagination = ({totalPosts,postsPerPage,setCurrentPage,pageSelected}) => {
  let pages = []
  const [pageRange, setPageRange] = useState([1, 3]);

  for (let i = pageRange[0]; i <= pageRange[1]; i++){
    pages.push(i)
  }

  const handleNextPage = () => {
    if(pageRange[1] + 1 <= Math.ceil(totalPosts/postsPerPage))
    setPageRange([pageRange[0] + 1, pageRange[1] + 1]);
  }

  const handlePrevPage = () => {
    if(pageRange[1] + 1 <= Math.ceil(totalPosts/postsPerPage))
    setPageRange([pageRange[0] - 1, pageRange[1] - 1]);
  }

  return (
    <div className='flex justify-center items-center p-4'>
    <button className={`bg-gray-800 text-white rounded-md hover:bg-opacity-50 px-4 py-2 rounded-md text-lg px-6 py-3 mt-10`} onClick={handlePrevPage}>Prev</button>
      {
      pages.map((page,index) => {
        return <div key={index} className='mx-2 mt-10'>
          <button onClick={() => setCurrentPage(index + pageRange[0])} className={`bg-gray-800 text-white rounded-md hover:bg-opacity-50 px-4 py-2 rounded-md text-lg px-6 py-3 ${pageSelected === index + pageRange[0] ? "bg-gray-400" : ''}`}>{page}</button>
        </div> 
      })

    }
    <button className={`bg-gray-800 text-white rounded-md hover:bg-opacity-50 px-4 py-2 rounded-md text-lg px-6 py-3 mt-10`} onClick={handleNextPage}>Next</button>
    </div>
  )

}


/// to be continued. i dont understand the logic but i will. 