import React from 'react'
import { Outlet } from "react-router-dom";

export default function Add() {
  return (
    <div className='mx-10 my-10'>
        <div className=''>
            <h1 className="text-gray-800 font-medium text-2xl">Program Kerja</h1>
            <p className="text-gray-800/50 text-lg">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <Outlet />
    </div>
  )
}
