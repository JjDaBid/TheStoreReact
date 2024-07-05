import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShopContext } from '../context/shopContext'


const CartWidget = () => {

  const { cart } = useContext(ShopContext)

  return (
    <div className='flex items-center'>
        <ShoppingBagIcon className='h-6 w-6'></ShoppingBagIcon>
        <div>{cart.length}</div>
    </div>
  )
}
export default CartWidget
