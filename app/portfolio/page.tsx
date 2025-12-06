import React from 'react'

const page = () => {
    return (
        <div>
            <header id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">B.Tech Student</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
                            Hi, I'm <span className="text-indigo-600">Sakshi</span>. <br />
                                Building tech for the future.
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                            A passionate engineering student focused on full-stack development, problem-solving, and creating intuitive user experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 hover:shadow-lg transition">View My Work</a>
                            <a href="/resume.pdf" download={true} className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition">
                                <i className="fa-solid fa-download mr-2"></i> Download CV
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-indigo-200 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <img src="/avatar.jpg" alt="Sakshi" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </header>

            <section id="skills" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Technical Skills</h2>
                        <p className="text-gray-500 mt-2">Technologies I work with</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition border hover:border-indigo-200 group">
                            <i className="fa-brands fa-html5 text-4xl text-orange-500 mb-3 group-hover:scale-110 transition"></i>
                            <h3 className="font-semibold">HTML & CSS</h3>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition border hover:border-indigo-200 group">
                            <i className="fa-brands fa-js text-4xl text-yellow-400 mb-3 group-hover:scale-110 transition"></i>
                            <h3 className="font-semibold">JavaScript</h3>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition border hover:border-indigo-200 group">
                            <i className="fa-brands fa-python text-4xl text-blue-500 mb-3 group-hover:scale-110 transition"></i>
                            <h3 className="font-semibold">Python</h3>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition border hover:border-indigo-200 group">
                            <i className="fa-brands fa-react text-4xl text-cyan-400 mb-3 group-hover:scale-110 transition"></i>
                            <h3 className="font-semibold">React</h3>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition border hover:border-indigo-200 group">
                            <i className="fa-brands fa-java text-4xl text-red-500 mb-3 group-hover:scale-110 transition"></i>
                            <h3 className="font-semibold">Java</h3>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition border hover:border-indigo-200 group">
                            <i className="fa-solid fa-database text-4xl text-gray-600 mb-3 group-hover:scale-110 transition"></i>
                            <h3 className="font-semibold">SQL / MySQL</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
                        <p className="text-gray-500 mt-2">Some things I've built during my degree</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                                <i className="fa-solid fa-image text-4xl"></i>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Student Management System</h3>
                                <p className="text-gray-600 text-sm mb-4">A CRUD application to manage student records using Java and MySQL database connectivity.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">Java</span>
                                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">MySQL</span>
                                </div>
                                <a href="#" className="text-indigo-600 font-semibold hover:underline text-sm">View Source <i className="fa-solid fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                                <i className="fa-solid fa-cloud text-4xl"></i>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Weather App</h3>
                                <p className="text-gray-600 text-sm mb-4">Real-time weather application using OpenWeatherMap API with location detection features.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">JavaScript</span>
                                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">API</span>
                                </div>
                                <a href="#" className="text-indigo-600 font-semibold hover:underline text-sm">View Live Demo <i className="fa-solid fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                                <i className="fa-solid fa-laptop-code text-4xl"></i>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Portfolio Website</h3>
                                <p className="text-gray-600 text-sm mb-4">Fully responsive personal portfolio designed with Tailwind CSS to showcase my work.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">HTML</span>
                                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">Tailwind</span>
                                </div>
                                <a href="#" className="text-indigo-600 font-semibold hover:underline text-sm">View Source <i className="fa-solid fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-indigo-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-indigo-200 mb-8 text-lg">
                        I am currently looking for internships and entry-level opportunities.
                        Feel free to reach out!
                    </p>

                    <div className="flex justify-center gap-6 mb-12">
                        <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-900 transition">
                            <i className="fa-brands fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-900 transition">
                            <i className="fa-brands fa-github text-xl"></i>
                        </a>
                        <a href="mailto:sakshi@example.com" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-900 transition">
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </a>
                    </div>

                    <p className="text-indigo-400 text-sm">© 2024 Sakshi. Built with Tailwind CSS.</p>
                </div>
            </section>
        </div>
    )
}

export default page