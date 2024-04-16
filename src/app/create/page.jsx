"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function CreatePage() {

    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [content, setContent] = useState("");


    const router = useRouter();

  return (
    <div className='container mx-auto py-10'>
      <h3 className='text-3xl font-bold'>Create Post </h3>
      <hr className='my-3'/>
      <Link href="/" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go back</Link>
      <form >
        <input onChange={(e) => setTitle(e.target.value)} type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post title'/>
        <input onChange={(e) => setImg(e.target.value)} type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post img'/>
        <textarea onChange={(e) => setContent(e.target.value)} className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your content'></textarea>
        <button type='submit' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePage
