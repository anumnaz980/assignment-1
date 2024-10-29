import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="bg-green-200 h-screen flex items-center justify-center">
        <div className="mx-auto p-4 pt-6 md:p-6 lg:p-12 flex flex-col items-center justify-center">
          <h1 className="text-7xl text-center font-bold mb-4">Contact Me</h1>
  
          <p className="text-black text-xl font-serif text-center mb-6">
             Feel free to drop a message I’m always here to chat!
          </p>
  
          <form className="max-w-md w-full py-4">
            <div className="mb-4">
              <label
                className="block text-pink-600 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
  
            <div className="mb-4">
              <label
                className="block text-pink-600 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="your@email.com"
              />
            </div>
  
            <div className="mb-4">
              <label
                className="block text-pink-600 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Write Your message Here..."
              />
            </div>
  
            <button
              className="bg-gray-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
    </div>
  </div>
  )
}

export default Contact


