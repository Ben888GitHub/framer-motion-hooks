import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect } from 'react';

const UseTransformAndScroll = () => {
	const { scrollY } = useScroll();

	// const x = useTransform(scrollY, [0, 1], ['0%', '-100%']);

	useEffect(() => {
		return scrollY.onChange((latest) => {
			// Apply your desired animation or effect
			console.log('Scroll progress:', latest);
		});
	}, [scrollY]);

	return (
		<div style={{ height: '300vh' }}>
			<div
				style={{
					// position: 'sticky',
					top: 0,
					height: '100vh',
					width: '100%',

					overflow: 'hidden'
				}}
			>
				<p>Rainbow Rainbow Rainbow</p>
			</div>
		</div>
	);
};

export default UseTransformAndScroll;
