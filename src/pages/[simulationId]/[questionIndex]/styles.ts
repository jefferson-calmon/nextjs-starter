import styled from 'styled-components';

export const SimulationQuestionPageContainer = styled.main`
	div.simulation-progress {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;

		width: 100%;
	}

	section#question {
		display: flex;
		align-items: center;
        /* justify-content: center; */

		height: 100vh;

		.content {
			display: flex;
			align-items: center;
			justify-content: center;
            /* padding: 0 10rem; */

			.question {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 3.2rem;

				width: 72rem;

				.heading {
					display: flex;
					flex-direction: column;
					gap: 0.8rem;

					width: 50rem;

					h2 {
						font-size: 3.2rem;
					}

					p {
						font-size: 1.6rem;
						line-height: 1.5;
					}
				}

                .buttons {
                    display: flex;
                    gap: 1.2rem;

                    .idon-button {
                        &.outline {
                            border: unset;
                        }
                    }
                }
			}
		}
	}
`;
