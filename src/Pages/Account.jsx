import React from 'react'
import SavedShows from '../component/SavedShows'

const Account = () => {
  return (
    <>
      <div>
        <div className='w-full text-white'>
          <img className='w-full h-[400px] object-cover' 
            src='https://i0.wp.com/www.nationalturk.com/en/wp-content/uploads/2022/05/netflix-codes.jpg' 
            alt='/' />
            <div className='bg-black/50 fixed top-0 left-0 w-full h-[550px]'></div>
            <div className='absolute top-[20%] p-4 md:p-8'> 
                <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>

            </div> 

        </div>

      </div>
      <SavedShows />
    </>
  )
}

export default Account