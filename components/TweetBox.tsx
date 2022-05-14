import React, { useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon
  } from "@heroicons/react/outline";

function TweetBox() {

    const [input, setInput] = useState<string>('')

  return (
    <div className='flex space-x-2 p-5'>
        <img
        className='h-1/4 w-14 rounded-full object-cover mt-4'
        src="https://links.papareact.com/gll" alt="" />

        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                type="text" className='h-24 w-full text-xl outline-none placeholder:text-xl' placeholder="What's happening" />
                <div className='flex items-center '>
                    <div className='flex-1 flex space-x-2 text-twitter  '>
                        <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-100 ease-out hover:scale-150'/>
                        <SearchCircleIcon className='h-5 w-5'/>
                        <EmojiHappyIcon className='h-5 w-5'/>
                        <CalendarIcon className='h-5 w-5'/>
                        <LocationMarkerIcon className='h-5 w-5'/>
                    </div>
                    <button 
                        disabled={!input}
                        className='bg-twitter px5
                        py-2 disabled:opacity-40 font-bold text-white rounded-full'> 
                        Tweet
                    </button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default TweetBox