const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-lg">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-8">Contact Us</h1>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-400" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-green-400"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
