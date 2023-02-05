import React from 'react';

export const Button = (props) => {
  return (
    <button  onClick={props.onClick} className='bg-gray-800 text-white p-2 rounded-md hover:bg-opacity-50 focus:outline-none focus:shadow-outline'>{props.children}</button>
  );
}

