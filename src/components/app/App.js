import { useState, useEffect } from "react";

import Header from '../header/Header';
import Drawer from '../drawer/Drawer';
import Card from '../card/Card';

import { FiSearch } from 'react-icons/fi';
import './app.scss'


function App() {
	const [cartOpened, setCartOpened] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [cartAdded, setCartAdded] = useState(null)

	const onCartAdded = (id) => {
		setCartAdded(id)
	}

	return (
		<div className="wrapper">
			{cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(!cartOpened)} /> : null}
			<Header onOpen={() => setCartOpened(!cartOpened)} />

			<div className="content py-9 px-10">

				<a href="#" className="block mb-8">
					<img src="/img/rec.png" alt="slider" className="w-[100%] object-cover" />
				</a>

				<div className='flex items-center justify-between mb-8'>
					<h1 className="text-[32px] font-bold ">All sneakers</h1>
					<label htmlFor='search-elem'>
						<div className="flex items-center px-3 border border-[#eaeaea] rounded-[10px]">
							<FiSearch className='w-4 h-4' color='#C4C4C4' alt='Search' />
							<input type="text"
								placeholder='Search...'
								id='search-elem'
								className='p-[10px] outline-none text-base' />
						</div>
					</label>
				</div>
				<Card onCartAdded={onCartAdded} />
				<button className="mt-4 ml-1 underline underline-offset-2 text-[#27b241] font-semibold">Show more</button>
			</div>
		</div>
	);
}

export default App;