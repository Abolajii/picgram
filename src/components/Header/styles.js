import styled from 'styled-components';

export const Container = styled.div`
	position: sticky;
	height: 90px;
	/* background-color: grey; */
	@media (max-width: 800px) {
		padding-left: 10px;
	}
`;
export const Inner = styled.div`
	max-width: 1000px;
	margin: auto;
	/* background: red; */
	height: inherit;
	display: flex;
	align-items: center;
`;

export const Title = styled.h3`
	color: rgb(155, 9, 155);
	text-transform: uppercase;
`;
