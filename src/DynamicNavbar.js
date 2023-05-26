import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DynamicNavbar = (props) => {
	const { title } = props;
	// Value being driven by scrolling (e.g. height)
	const initialValue = 140;
	const finalValue = 88;
	const thresholdY = 170; // set the scroll position where you want the state change

	const speed = 1;
	const scrollDistance = (initialValue - finalValue) / speed;

	const startY = 0; // scroll position when transition starts
	const endY = startY + scrollDistance;

	const { scrollY } = useScroll();
	const scrollOutput = useTransform(
		scrollY,
		[startY, endY, endY],
		[initialValue, finalValue, finalValue],
		{
			clamp: false
		}
	);

	const [isPastThreshold, setIsPastThreshold] = useState(false);
	useEffect(
		() => scrollY.onChange((latest) => setIsPastThreshold(latest > thresholdY)),
		[]
	);

	return (
		<motion.div style={{ height: scrollOutput }}>
			<motion.p
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{
					opacity: isPastThreshold ? 1 : 0,
					scale: isPastThreshold ? 1 : 0.5
				}}
				className="text-2xl text-center"
			>
				{title}
			</motion.p>
		</motion.div>
	);
};

export default DynamicNavbar;
