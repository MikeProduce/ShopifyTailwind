import React, { useState } from 'react'
import { Button } from './Button'

export const Pagination = ({totalPosts,postsPerPage,setCurrentPage,pageSelected}) => {
  let pages = []
  // this page declares an empty array of pages that will be used to store pages that will be rendered in the pagination UI
  const [pageRange, setPageRange] = useState([1,1]);
  //this line declares a page range using the useState hook

  for (let i = pageRange[0]; i <= pageRange[1]; i++){
    pages.push(i)
    // console.log(pages);
    // this line pushes the current value of i to the pages array created on line 2
  }
  //this loop iterates from the first value of page range and the second value of page range. pageRange[0] = this is the first item in the array, pageRange[1] is the second 

  const handleNextPage = () => {
    if (pageRange[0] ===  Math.ceil(totalPosts/postsPerPage)){
      return true;
    }
    if(pageRange[1] + 1 <= Math.ceil(totalPosts/postsPerPage))
    // if (4 <= 13) then do the bottom portion of this if statement
    // the index of 1 points to the 3. 
    // this line checks if the next page range value is less than or equal to the toal number of pages.
    setPageRange([pageRange[0] + 1, pageRange[1] + 1]);
    //this page updates the pageRange by one for [0], and [1].
    setCurrentPage(pageRange[0] + 1);
  }

  const handlePrevPage = () => {
    if (pageRange[0] === 1){
      return true
    }
    // if page === 1 then just return true, 
    if(pageRange[0] - 1 >= 1)
    // if pageRange[0] - 1 is bigger or equal to 1 then run the statements
    setPageRange([pageRange[0] - 1, pageRange[1] - 1]);
    setCurrentPage(pageRange[0] - 1);
  }
 
  return (
    <div className='flex justify-center items-center p-4'>
    <button className={`bg-gray-800 text-white rounded-md hover:bg-opacity-50 px-2 py-1 rounded-md text-lg px-6 py-3 mt-10 sm:text-base sm:px-4 sm:py-2 lg:text-lg lg:px-6 lg:py-3`} onClick={handlePrevPage}>Prev</button>
      {
      pages.map((page,index) => {
        return <div key={index} className='mx-2 mt-10'>
          <button onClick={() => setCurrentPage(index + pageRange[0])} className={`bg-gray-800 text-white rounded-md hover:bg-opacity-50 px-2 py-1 rounded-md text-lg px-6 py-3 lg:text-lg lg:px-6 lg:py-3 ${pageSelected === index + pageRange[0] ? "bg-gray-400" : ''}`}>{page}</button>
        </div> 
      })

    }
    <button className={`bg-gray-800 text-white rounded-md hover:bg-opacity-50 px-2 py-1 rounded-md text-lg px-6 py-3 mt-10 sm:text-base sm:px-4 sm:py-2 lg:text-lg lg:px-6 lg:py-3`} onClick={handleNextPage}>Next</button>
    </div>
  )

}


/// to be continued. i dont understand the logic but i will. 