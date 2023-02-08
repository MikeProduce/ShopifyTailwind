import axios from "axios";
import React, { useState,useEffect } from "react";
import {Link,Outlet} from 'react-router-dom'


export const CheckOrder = () => {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="text" name="name" id="name" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" />
          </div>
          <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" />
          </div>
          </div>
          
      </form>
      </div>
    </div>
  )
};