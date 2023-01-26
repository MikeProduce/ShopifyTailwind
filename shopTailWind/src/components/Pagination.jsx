import React from 'react'
import { Button } from './Button'

export const Pagination = ({totalPosts,postsPerPage,setCurrentPage}) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i)
  }
  return (
    <div className='flex justify-center items-center p-4'>{
      pages.map((index,page) => {
        return <div className='mx-2'>
          <Button key={index} onClick={() => setCurrentPage(page)}>{page}</Button>
        </div> 
      })
    }</div>
  )

}