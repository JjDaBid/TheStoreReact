const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-slate-300 text-white mt-5">
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Contáctanos</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-gray-500 focus:ring focus:ring-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-gray-500 focus:ring focus:ring-gray-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-gray-500 focus:ring focus:ring-gray-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-slate-200 text-black font-semibold rounded hover:bg-slate-300 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>

  )
}
export default Contact
