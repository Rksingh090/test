import React from 'react'

const page = () => {
  return (
    <div className="grow container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900">Get In Touch</h1>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Have a project idea, an internship opportunity, or just want to chat about technology? I'd love to hear from you.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
            
            <div className="bg-indigo-600 p-10 text-white flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                    <p className="text-indigo-100 mb-8">
                        Feel free to reach out via email or connect with me on social media. I usually respond within 24 hours.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <i className="fa-solid fa-envelope mt-1 text-indigo-300"></i>
                            <span>sakshi@example.com</span>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fa-solid fa-phone mt-1 text-indigo-300"></i>
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fa-solid fa-location-dot mt-1 text-indigo-300"></i>
                            <span>Mumbai, Maharashtra, India</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="mb-4 text-indigo-200 text-sm font-semibold uppercase tracking-wider">Connect with me</p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-10">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="John Doe" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="john@example.com" />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="Internship Opportunity" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="Write your message here..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default page