import { useState } from 'react';
import { ListBulletIcon } from '@heroicons/react/20/solid';
import './App.css';
import { useAnimate, stagger } from 'framer-motion';
import UseAnimate from './UseAnimate';
import UseTransformAndScroll from './UseTransformAndScroll';

function App() {
	const [items, setItems] = useState([
		{ id: '1', text: 'One', checked: true },
		{ id: '2', text: 'Two', checked: false },
		{ id: '3', text: 'Three', checked: true },
		{ id: '4', text: 'Four', checked: false },
		{ id: '5', text: 'Five', checked: true },
		{ id: '6', text: 'Six', checked: true },
		{ id: '7', text: 'Seven', checked: true }
	]);

	const [scope, animate] = useAnimate();
	const handleChange = (id) => {
		let newItems = items.map((item) => ({
			...item,
			checked: item.id === id ? !item.checked : item.checked
		}));
		setItems(newItems);

		// * animate the items
		if (newItems.every((item) => item.checked)) {
			let lastCompletedItem = items.findIndex((item) => !item.checked);

			// Staggering Effect
			animate(
				'input',
				{ scale: [1, 1.25, 1] },
				{ duration: 0.25, delay: stagger(0.1, { from: lastCompletedItem }) }
			);

			// Shimmy Effect
			// animate(
			// 	'input',
			// 	{ x: [0, 2, -2, 0] },
			// 	{ duration: 0.25, delay: stagger(0.1, { from: lastCompletedItem }) }
			// );
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-col items-center justify-center">
				<div className="flex w-full max-w-sm flex-col rounded bg-gray-100 px-3 py-4">
					<p className="ml-2 flex items-center text-lg font-semibold text-gray-700">
						<ListBulletIcon className="mr-3 h-5 w-5" />
						Checklist
					</p>

					<div ref={scope} className="mt-4">
						{items.map((item) => (
							<label
								key={item.id}
								className={`group flex w-full cursor-pointer select-none items-center ${
									item.checked ? 'text-gray-400 line-through' : 'text-gray-800'
								}`}
							>
								<input
									onChange={() => handleChange(item.id)}
									checked={item.checked}
									type="checkbox"
									className="mr-4 h-4 w-4 rounded-sm border-2 border-gray-300"
								/>
								{item.text}
							</label>
						))}
					</div>
				</div>
			</div>
			<UseAnimate />
			<br />
			<UseTransformAndScroll />
		</>
	);
}

export default App;
