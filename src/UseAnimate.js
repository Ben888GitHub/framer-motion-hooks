import { useState } from 'react';
import { stagger, motion } from 'framer-motion';
import { ListBulletIcon } from '@heroicons/react/20/solid';

// const container = {
// 	hidden: {},
// 	show: {
// 		transition: {
// 			staggerChildren: 0.2
// 		}
// 	}
// };

const container = (staggerChildren, delayChildren) => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren
		}
	}
});

const UseAnimate = () => {
	const [items, setItems] = useState([
		{ id: '1', text: 'One', checked: true },
		{ id: '2', text: 'Two', checked: false },
		{ id: '3', text: 'Three', checked: true },
		{ id: '4', text: 'Four', checked: false },
		{ id: '5', text: 'Five', checked: true },
		{ id: '6', text: 'Six', checked: true },
		{ id: '7', text: 'Seven', checked: true }
	]);

	const handleChange = (id) => {
		setItems((currentItems) =>
			currentItems.map((item) => ({
				...item,
				checked: item.id === id ? !item.checked : item.checked
			}))
		);
	};

	items.every((item) => item.checked) &&
		console.log(items.every((item) => item.checked));

	const inputAnimation = (id, item) => ({
		hidden: {},
		show: {
			scale: item.checked ? [1, 1.25, 1] : 1,
			// scale: items[1].checked ? [1, 1.25] : 1,
			transition: {
				duration: 0.25,
				delay: Number(id) * 0.1
			}
		}
	});

	return (
		<div className="flex min-h-full flex-col items-center justify-center">
			<div className="flex w-full max-w-sm flex-col rounded bg-gray-100 px-3 py-4">
				<p className="ml-2 flex items-center text-lg font-semibold text-gray-700">
					<ListBulletIcon className="mr-3 h-5 w-5" />
					Checklist
				</p>

				<motion.div
					// variants={container}
					// initial="hidden"
					// animate="show"
					className="mt-4"
				>
					{items.map((item, idx) => (
						<label
							key={item.id}
							className={`group flex w-full cursor-pointer select-none items-center ${
								item.checked ? 'text-gray-400 line-through' : 'text-gray-800'
							}`}
						>
							<motion.input
								// variants={inputAnimation(item.id, item)}
								// initial
								animate={{
									scale: items.every((item) => item.checked) ? [1, 1.25, 1] : 1,
									transition: {
										duration: 0.25,
										delay: Number(item.id) * 0.1
									}
								}}
								transition={{
									type: 'spring',
									ease: 'easeOut'
								}}
								// viewport={{ once: false, amount: 0.25 }}
								onChange={() => handleChange(item.id)}
								checked={item.checked}
								type="checkbox"
								className="mr-4 h-4 w-4 rounded-sm border-2 border-gray-300"
							/>
							<span>{item.text}</span>
						</label>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default UseAnimate;
