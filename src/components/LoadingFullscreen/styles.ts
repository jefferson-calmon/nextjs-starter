import styled from 'styled-components';

export const LoadingFullScreenContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	overflow: hidden;

	.loader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2.25rem;

		width: 27.5rem;
		margin-top: 2rem;

		p {
			font-size: var(--text-size);
			line-height: 1.4;
		}

		.button,
		.aresui-button {
			--base-height: 2.5rem;

			background: #000 !important;
			color: #fff !important;

			border-radius: .25rem;
		}
	}
`;

export default LoadingFullScreenContainer;
