import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { Head } from 'idon';

import SimulationProgress from 'components/SimulationProgress';
import SimulationQuestion from 'components/SimulationQuestion';
import Button from 'components/Button';
import { useData } from 'hooks/useData';
import * as S from 'models/Simulation';

import { SimulationQuestionPageContainer } from './styles';

function SimulationQuestionPage() {
	// Hooks
	const { simulation, customer, alreadyLoaded } = useData();
	const router = useRouter();

	// Memo vars
	const query = useMemo(() => router.query, [router.query]);
	const index = useMemo(() => Number(query.questionIndex || '0'), [query]);
	const questions = useMemo(() => simulation.questions || [], [simulation]);
	const question = useMemo(
		() => (questions.length > 0 ? questions[index] : undefined),
		[questions, index]
	);

	// States
	const [data, setData] = useState<S.Simulation>(simulation);
	const [isSending, setIsSending] = useState<boolean>(false);

	// Callbacks
	const submit = useCallback(() => {
		setIsSending(true);
		console.log(data);
	}, [data]);

	const next = useCallback(
		(e?: React.FormEvent) => {
			e?.preventDefault();

			console.log(questions.length);

			if (index === questions.length - 1) return submit();

			if (index + 1 < questions.length) {
				router.push(`/${simulation.id}/${index + 1}`);
			}
		},
		[index, questions.length, router, simulation.id, submit]
	);

	const previous = useCallback(() => {
		index > 0
			? router.push(`/${simulation.id}/${index - 1}`)
			: router.push(`/${simulation.id}`);
	}, [index, router, simulation.id]);

	// Effects
	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [next]);

	// Functions
	function changeQuestion(value: string) {
		if (!question) return;

		const newQuestion = {
			...question,
			value,
		};

		setData((prev) => ({
			...prev,
			questions: prev.questions.map((q) =>
				q?.id === newQuestion.id ? newQuestion : q
			),
		}));
	}

	function handleKeyDown(event: KeyboardEvent) {
		const button = document.querySelector(
			'button[type="submit"]'
		) as HTMLButtonElement;

		event.key === 'Enter' && !event.shiftKey && button.click();
	}

	if (!alreadyLoaded) return <NotDataPage />;

	return !question ? null : (
		<SimulationQuestionPageContainer>
			<Head title={`Simulação - ${customer.name}`} />

			<SimulationProgress
				simulation={simulation}
				currentQuestion={index}
			/>

			<section id="question">
				<div className="content">
					<form className="question" onSubmit={next}>
						<div className="heading">
							<h2>{question.label}</h2>

							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Architecto error officiis
								provident.
							</p>
						</div>

						<SimulationQuestion
							question={question}
							value={data.questions[index]?.value || ''}
							onChange={changeQuestion}
						/>

						<div className="buttons">
							<Button
								variant="outline"
								disabled={isSending}
								onClick={previous}
							>
								Voltar
							</Button>

							<Button
								type="submit"
								loading={isSending}
								disabled={isSending}
							>
								{index === questions.length - 1
									? 'Finalizar'
									: 'Avançar'}
								<i className="far fa-arrow-right" />
							</Button>
						</div>
					</form>
				</div>
			</section>
		</SimulationQuestionPageContainer>
	);
}

function NotDataPage() {
	// Hooks
	const router = useRouter();

	// Effects
	useEffect(() => {
		const simulationId = router.query.simulationId as string | undefined;

		if (simulationId) {
			router.push(`/${simulationId}`);
		}
	}, [router]);

	return null;
}

export default SimulationQuestionPage;
