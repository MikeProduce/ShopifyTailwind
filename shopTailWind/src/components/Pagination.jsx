import React from 'react'
import { Button } from './Button'

export const Pagination = ({totalPosts,postsPerPage,setCurrentPage}) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i)
  }
  return (
    <div className='flex justify-center items-center p-4'>{
      pages.map((page,index) => {
        return <div className='mx-2'>
          <button key={index} onClick={() => setCurrentPage(index)} className='bg-gray-800 text-white rounded-md hover:bg-opacity-50 px-4 py-2 rounded-md text-lg px-6 py-3'>{page}</button>
        </div> 
      })

    }</div>
  )

}