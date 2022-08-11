import styled from 'styled-components';

export const SimulationContainer = styled.main`
    position: relative;

	display: flex;
	align-items: center;

	width: 100%;
	height: 100vh;

	section#explanation {
        width: 100%;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;

			.text {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				text-align: center;
                gap: 2.4rem;

				width: 60rem;

                .logo {
                    width: 32rem;
                    height: 17rem;

                    /* margin-bottom: 1.2rem; */

                    img, span {
                        width: 100% !important;
                        height: 100% !important;
                        object-fit: cover !important;
                    }
                }

                h1 {
                    font-size: 4.2rem;
                }

                p {
                    font-size: 1.6rem;
                    line-height: 1.5;
                }

                .button {
                    margin-top: 1.2rem;
                }
			}
		}
	}
`;

export default SimulationContainer;
