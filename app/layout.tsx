import React from 'react'
import '@/app/globals.css'


// normal function 
export default function sakshi({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <title>My webpage</title>
      <body>
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">

              <div className="shrink-0 flex items-center">
                <a href="#" className="text-2xl font-bold text-indigo-600 tracking-wide">
                  Home
                </a>
              </div>

              <div className="flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
                <a href="/portfolio" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Portfolio</a>
                <a href="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Contact</a>
              </div>

            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}



