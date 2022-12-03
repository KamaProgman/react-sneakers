import { useState } from "react";


const Header = ({onOpen}) => {
   return (
      <header className="flex items-center justify-between p-8 border-b">
         <div className="flex items-center">
            <img src="/img/logo.png" alt="logo"
               className="w-10 h-10 mr-4" />
            <div className="header__info">
               <h3 className="font-bold text-xl uppercase">React Sneakers</h3>
               <p className="text-[#9D9D9D] text-sm">The best sneakers store</p>
            </div>
         </div>
         <ul className="flex items-center">
            <li
               className="flex items-center mr-8 cursor-pointer"
               onClick={onOpen}>
               <img src="/img/cart.svg" alt="cart" className="w-[18px] h-[18px]" />
               <span className="ml-1.5 text-sm text-[#5C5C5C] font-semibold"> 1205₽</span>
            </li>
            <li>
               <img src="/img/user.svg" alt="user" className="w-[18px] h-[18px]" />
            </li>
         </ul>
      </header>
   )
}

export default Header;