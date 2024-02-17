"use client"
import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [city, setCity] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.currentTarget.input.value;
    router.push(`/detail?city=${input}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="text-3xl font-bold mb-4">Start your Search Here ....</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8 w-full max-w-md">
            <input
              type="text"
              name="input"
              placeholder="Enter city name"
              className="p-4 mr-2 mb-2 sm:mb-0 sm:w-auto bg-gray-700 text-white rounded"
            />
            <button type="submit" className="p-4 bg-blue-500 text-white rounded cursor-pointer">
              Search
            </button>
          </div>
        </form>
      </main>
      <footer className="text-center mt-8">
         <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Back To Home Page
         </Link>
       </footer>
    </div>
  );
}
