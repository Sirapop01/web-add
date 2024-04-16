import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h3>NextJS Crub</h3>
      <hr />
      <button className="bg-green-500 p-3 text-white rounded"><Link href="/create">Create Post</Link></button>

      <div className="grid grid-cols-4 mt-3 gap-5">
        <div className="shadow-md p-5 rounded-md">
          <h4>Post title</h4>
          <img src="img.jpg" />
          <p>Post Content</p>
        </div>
        <div className="shadow-md p-5 rounded-md">
          <h4>Post title</h4>
          <img src="img.jpg" />
          <p>Post Content</p>
        </div>
        <div className="shadow-md p-5 rounded-md">
          <h4>Post title</h4>
          <img src="img.jpg" />
          <p>Post Content</p>
        </div>
        <div className="shadow-md p-5 rounded-md">
          <h4>Post title</h4>
          <img src="img.jpg" />
          <p>Post Content</p>
        </div>
      </div>

    </main>
  );
}
