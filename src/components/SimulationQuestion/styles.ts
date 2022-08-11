import styled from 'styled-components';

export const SimulationQuestionContainer = styled.div`
	width: 100%;

	.idon-input,
	.idon-select {
		label {
			display: none;
		}
	}

	.idon-select .select,
	.idon-input input {
		width: 100%;
		height: 4.8rem !important;
	}

    .idon-select {
        .options {
            z-index: 200;
        }
    }
`;

export default SimulationQuestionContainer;
