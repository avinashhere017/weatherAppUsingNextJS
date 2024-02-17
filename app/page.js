import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Weather App</h1>
        <Link href="/search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click To Search For Weather 
        </Link>
      </div>
    </main>
  )
}

export default Page
