import React from 'react'

const NotFound = () => {
  return (
    <main className='h-screen flex flex-col justify-center items-center gap-4'>
        <h1 className=' text-5xl font-bold text-accent'>Page Not Found</h1>
        <span className='px-4 font-mono rounded-2xl text-white bg-gray-700'>error code 404</span>
    </main>
  )
}

export default NotFound
