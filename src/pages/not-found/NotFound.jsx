import { NavLink } from "react-router-dom"
import Layout from "../../components/layout"

const NotFound = () => {
  return (
    <Layout>
        <div className="w-100 flex flex-col justify-center items-center bg-gray-100">
            <div className="bg-white p-12 rounded-lg shadow-lg text-center">
                <h1 className="text-6xl font-bold text-slate-950">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">Página no encontrada</h2>
                <p className="text-gray-600 mt-2">
                Lo sentimos, la página que estás buscando no existe.
                </p>
                <NavLink to="/" className="mt-6 inline-block bg-slate-950 text-white text-lg font-medium py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Volver al inicio
                </NavLink>
            </div>
        </div>
    </Layout>
  )
}
export default NotFound
