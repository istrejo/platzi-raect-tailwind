import {
  CalendarDaysIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from '@heroicons/react/16/solid';

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className=' flex justify-between items-center mb-4 border border-gray-800 rounded-lg p-4 w-80 '>
      <div className='flex justify-between items-center w-full'>
        <p className='flex flex-col'>
          <span className='font-light flex'>
            <CalendarDaysIcon className='size-4 mr-2' />
            {date}
          </span>
          <span className='font-light flex'>
            <ShoppingBagIcon className='size-4 mr-2' />
            {totalProducts} articles
          </span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-bold text-2xl '>${totalPrice}</span>
          <ChevronRightIcon className='size-6 ' />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
