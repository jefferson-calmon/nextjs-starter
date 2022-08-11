import { useMemo } from 'react';

import { motion } from 'framer-motion';

import { Simulation } from 'models/Simulation';

import { SimulationProgressContainer } from './styles';

interface SimulationProgressProps {
	simulation: Simulation;
	currentQuestion: number;
}

function SimulationProgress({
	simulation,
	currentQuestion,
}: SimulationProgressProps) {
	// Memo vars
	const questions = useMemo(() => simulation.questions || [], [simulation]);

	return (
		<SimulationProgressContainer className="simulation-progress">
			<div className="content">
				<div className="progress">
					<motion.div
						className="bar"
						initial={{ width: '0%' }}
						animate={{
							width: `${
								((currentQuestion + 1) / questions.length) * 100
							}%`,
						}}
					/>
				</div>
			</div>
		</SimulationProgressContainer>
	);
}

export default SimulationProgress;
