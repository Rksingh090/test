import React from 'react'

const page = () => {
  return (
    <div>
      
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
                B.Tech Computer Science
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Turning Coffee into <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Complex Code.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hello! I'm Sakshi. I am an engineering student passionate about building scalable web applications and solving real-world problems through logic and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#featured-work" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  View My Work <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="contact.html" className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition flex items-center justify-center">
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-400 grayscale hover:grayscale-0 transition-all duration-500">
                <i className="fa-brands fa-react text-3xl hover:text-blue-400 transition transform hover:scale-110"></i>
                <i className="fa-brands fa-python text-3xl hover:text-yellow-500 transition transform hover:scale-110"></i>
                <i className="fa-brands fa-java text-3xl hover:text-red-500 transition transform hover:scale-110"></i>
                <i className="fa-brands fa-js text-3xl hover:text-yellow-400 transition transform hover:scale-110"></i>
              </div>
            </div>

            <div className="relative lg:h-full flex justify-center">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

              <div className="relative animate-float bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-sm rotate-3 hover:rotate-0 transition duration-500">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sakshi Coding" className="rounded-xl object-cover h-80 w-full" />
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What I Bring to the Table</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Full Stack Dev</h3>
              <p className="text-gray-600">Capable of building complete web applications, handling both the user interface and the server-side logic.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Design</h3>
              <p className="text-gray-600">Creating websites that look beautiful and work perfectly on laptops, tablets, and mobile phones.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-brain"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Data Structures</h3>
              <p className="text-gray-600">Strong grasp of DSA in Java/C++, allowing me to write efficient and optimized code.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page