"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import DeleteBtn from "./DeleteBtn";

export default function Home() {

  const [postData, setPostData] = useState([]);

  console.log(postData);

  const getPosts = async () =>{
    try{
      const res = await fetch("http://localhost:3000/api/posts",{
        method: "GET",
        cache: "no-store" // no cache ใช้ข้อมูลใหม่ที่ req ไป
      })
      
      if(!res.ok){
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();
      setPostData(data.posts)

    }catch(error){
      console.log("Error loading post",error)
    }
  }

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <main className="container mx-auto">
      <h3>NextJS Crub</h3>
      <hr />
      <button className="bg-green-500 p-3 text-white rounded"><Link href="/create">Create Post</Link></button>

      <div className="grid grid-cols-4 mt-3 gap-5">
        {postData && postData.length > 0 ? (
          postData.map(val => (
            <div key={val._id} className="shadow-xl my-10 p-10 rounded-xl">
          <h4 className='text-2xl'>{val.title}</h4>
          <Image className='my-3 rounded-md' 
            src={val.img} 
            width={300} 
            height={0} 
            alt={val.title} 
            priority={true}
          />
          <p>{val.content}</p>
            <div className="mt-5">
              <Link className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg" href={`/edit/${val._id}`}>Edit</Link>
              <DeleteBtn id={val._id}/>
            </div>
          </div>
          ))
        ) : (
          <p className="bg-gray-300 p-3 my-3">
            You do not have any posts yet.
          </p>
        )}
        
      </div>
    </main>
  );
}
