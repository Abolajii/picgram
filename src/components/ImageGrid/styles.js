import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div``;
export const Inner = styled.div`
	max-width: 1000px;

	margin: auto;
	margin-top: 30px;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	/* align-items: center; */
	justify-items: center;
	margin-bottom: 30px;
	@media only screen and (max-width: 894px) {
		/* gap: 5px; */
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (max-width: 404px) {
		/* gap: 5px; */
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ImageItem = styled(motion.div)`
	/* overflow: hidden; */
	height: 300px;
	width: 300px;
	padding: 50% 0;
	position: relative;
`;

export const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	height: 100%;
	width: 100%;
`;
