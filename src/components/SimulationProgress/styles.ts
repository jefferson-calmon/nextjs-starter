import styled from 'styled-components';

export const SimulationProgressContainer = styled.div`
    width: 100%;

    .content {
        padding: 5.2rem 0;

        .progress {
            position: relative;

            width: 100%;
            height: 5px;

            background: #f5f5f5;
            border-radius: .5rem;

            overflow: hidden;

            .bar {
                position: absolute;
                top: 0;
                left: 0;

                height: 100%;
                background: #000;
            }
        }
    }
`;

export default SimulationProgressContainer;
