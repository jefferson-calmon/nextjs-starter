import styled from 'styled-components';

export const LoadingFullScreenContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	z-index: 10;

	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	background: #fff;
`;

export default LoadingFullScreenContainer;
