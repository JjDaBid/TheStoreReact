import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const CartWidget = () => {
  return (
    <div className='flex items-center'>
        <ShoppingBagIcon className='h-6 w-6'></ShoppingBagIcon>
        <div>0</div>
    </div>
  )
}
export default CartWidget
