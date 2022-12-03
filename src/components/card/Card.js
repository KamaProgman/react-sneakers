import { useState, useEffect } from "react";

import axios from "axios"

let url = 'https://6379e8ab702b9830b9e26f9e.mockapi.io'

const Card = ({ onCartAdded }) => {
   const [data, setData] = useState([])
   const [isAdded, setIsAdded] = useState({})

   useEffect(() => {
      axios.get(url + '/sneakers')
         .then(res => {
            setData(res.data)
         })
   }, [])

   const onAddCard = () => {
      setIsAdded(!isAdded)
   }

   return (
      <div className="grid grid-cols-4 gap-10">
         {
            data.map(item => {
               return (
                  <div key={item.id} className="w-fit p-7 pt-5 border border-[#efefef] rounded-[40px] transition hover:translate-y-[-5px] hover:shadow-lg" >
                     <div className='absolute cursor-pointer'>
                        <img src="/img/btn-unliked.svg" alt="unliked" />
                     </div>
                     <img src={item.img} alt="sneaker" className="w-[133px]" />
                     <p className="text-sm my-4">{item.name}</p>
                     <div className="flex justify-between items-center">
                        <div className="flex flex-col ">
                           <span className="text-xs text-[#BDBDBD] font-medium">Price:</span>
                           <p className="font-bold text-sm">{item.price}₽</p>
                        </div>
                        <img src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                           alt="plus"
                           onClick={onAddCard}
                           className="w-8 h-8" />
                     </div>
                  </div >
               )
            })
         }
      </div>
   )
}

export default Card;