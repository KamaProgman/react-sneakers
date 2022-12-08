const Card = ({ name, img, price, isAdded, onAddToCart }) => {
   return (
      <>
         <div className='absolute cursor-pointer'>
            <img src="/img/btn-unliked.svg" alt="unliked" />
         </div>
         <img src={img} alt="sneaker" className="w-[133px]" />
         <p className="text-sm my-4">{name}</p>
         <div className="flex justify-between items-center">
            <div className="flex flex-col ">
               <span className="text-xs text-[#BDBDBD] font-medium">Price:</span>
               <p className="font-bold text-sm">{price}₽</p>
            </div>
            <img src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
               alt="plus"
               className="w-8 h-8 cursor-pointer"
               onClick={onAddToCart} />
         </div>
      </ >
   )
}

export default Card;