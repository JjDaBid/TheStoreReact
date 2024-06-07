import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

  const activeStyle = 'underline underline-offset-4'

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white shadow-md'>
      <ul className='flex items-center gap-4'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            The Store
          </NavLink>
        </li>
        <li
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
          className="relative"
        >
          <NavLink to='/' className='relative'>
            Categorías
          </NavLink>
          {isDropdownVisible && (
            <ul 
              className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded shadow-lg"
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <li className="px-4 py-2 hover:bg-gray-100"><NavLink to='/category/Vestidos-Dama'>Vestidos de Dama</NavLink></li>
              <li className="px-4 py-2 hover:bg-gray-100"><NavLink to='/category/Chaquetas'>Chaquetas</NavLink></li>
              <li className="px-4 py-2 hover:bg-gray-100"><NavLink to='/category/Calzado'>Calzado</NavLink></li>
              <li className="px-4 py-2 hover:bg-gray-100"><NavLink to='/category/Camisetas'>Camisetas</NavLink></li>
              <li className="px-4 py-2 hover:bg-gray-100"><NavLink to='/category/Lenceria'>Lencería</NavLink></li>
              <li className="px-4 py-2 hover:bg-gray-100"><NavLink to='/category/Joyeria'>Joyeria</NavLink></li>   
              <li className="px-4 py-2 hover:bg-gray-100"><NavLink to='/category/Accesorios'>Accesorios</NavLink></li>              
            </ul>
          )}
        </li>
        <li className='relative'>
          <NavLink to='/contact'>
            Contacto
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-4'>
        <li className='text-black/60'>jdabid@mail.com</li>
        <li><NavLink 
          to='/'
          className={({ isActive }) => isActive ? activeStyle : undefined }          
          >Mis Ordenes</NavLink></li>
        <li><NavLink 
          to='/'
          className={({ isActive }) => isActive ? activeStyle : undefined }          
          >Perfil</NavLink></li>
        <li><NavLink 
          to='/'
          className={({ isActive }) => isActive ? activeStyle : undefined }
          >Login</NavLink></li>
        <li>
          <CartWidget/>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
