import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import DynamicNavbar from './DynamicNavbar';

const UseTransformAndScroll = () => {
	return (
		<div className="items-center justify-center mt-10">
			<DynamicNavbar title="DYNAMIC NAVBAR" />
			<p className="text-4xl text-center ">Dynamic Navbar</p>
		</div>
	);
};

export default UseTransformAndScroll;
