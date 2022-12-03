
const Drawer = ({ onClose, items = [] }) => {

   return (
      <div className='w-full h-full bg-[#00000099] fixed left-0 top-0 z-10'>
         <div className="w-[420px] h-full flex flex-col bg-white p-[30px]
					absolute right-0 top-0">
            <div className='flex justify-between items-center mb-[30px]'>
               <h2 className='text-2xl font-bold'>Basket</h2>
               <img
                  src="/img/btn-remove.svg" alt="Remove"
                  className='cursor-pointer'
                  onClick={onClose}
               />
            </div>
            <div className='flex flex-1 flex-col gap-4 overflow-auto scroll-hidden'>
               {
                  items.map(item => {
                     <div key={item.id} className="px-6 pt-4 pb-6 flex items-center  justify-between border border-[#efefef] rounded-[20px]">
                        <div className='flex'>
                           <img className='max-w-[80px]' src={item.img} alt="sneakers" />
                           <div className='mx-4 mt-2'>
                              <p className=''>item.name</p>
                              <b>{item.price}₽</b>
                           </div>
                        </div>
                        <img className='cursor-pointer mt-2' src="/img/btn-remove.svg" alt="Remove" />
                     </div>
                  })
               }
            </div>

            <div className='mt-6 scroll-hidden'>
               <ul>
                  <li className='flex items-center mb-5'>
                     <span>Total:</span>
                     <div className='flex-1 h-3 mx-2 border-b border-dashed border-[#dfdfdf]'></div>
                     <b className='font-semibold'>21 499₽</b>
                  </li>
                  <li className='flex items-center '>
                     <span>Tax 5%:</span>
                     <div className='flex-1 h-3 mx-2 border-b border-dashed border-[#dfdfdf]'></div>
                     <b className='font-semibold'>1000₽</b>
                  </li>

               </ul>
               <button className='w-full h-[55px] mt-6 text-white font-semibold rounded-2xl bg-[#9DD458]'>To order</button>
            </div>
         </div>
      </div>
   )
}

export default Drawer;