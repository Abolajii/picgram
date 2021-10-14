import { motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import useFirebase from '../../hooks/useFirebase';

const Container = styled(motion.div)`
	max-width: 1000px;
	margin: auto;

	@media (max-width: 800px) {
		padding: 20px;
	}
`;

const Inner = styled(motion.div)`
	background-color: red;
	height: 6px;
	width: ${({ progress }) => `${progress}%`};
`;

const ProgressBar = ({ selected, setSelected }) => {
	const { url, progress } = useFirebase(selected);

	useEffect(() => {
		if (url) {
			setSelected(null);
		}
	}, [url, setSelected]);

	return (
		<Container>
			<Inner
				initial={{ width: 0 }}
				animate={{ width: `${progress}%` }}
				progress={progress}
			/>
		</Container>
	);
};

export default ProgressBar;
