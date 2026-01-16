import React from 'react'
import { Spinner } from './spinner'

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-accent">
      <Spinner className=" size-10"/>
      <p>please wait...</p>
    </div>
  )
}

export default Loading
