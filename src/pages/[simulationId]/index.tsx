import { useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Head, Image } from 'idon';
import { useIsomorphicLayoutEffect } from 'pandora-tools';
import * as database from 'firebase/database';

import LoadingFullScreen from 'components/LoadingFullScreen';
import Button from 'components/Button';
import { useData } from 'hooks/useData';
import { dbRef } from 'config/firebase';
import { Customer } from 'models/Customer';
import { Simulation } from 'models/Simulation';

import { SimulationContainer } from './styles';

type SSGData<T> = {
	data: T | null;
	error: string | null;
};

interface SimulationPageProps {
	simulation: SSGData<Simulation>;
	customer: SSGData<Customer>;
}

function SimulationPage(props: SimulationPageProps) {
	// Hooks
	const data = useData();
	const router = useRouter();

	// States
	const [simulation, setSimulation] = useState<Simulation>();
	const [customer, setCustomer] = useState<Customer>();
	const [loading] = useState<boolean>(!!(simulation && customer));

	// Effects
	useIsomorphicLayoutEffect(() => {
		const { simulation, customer } = props;

		if (simulation.data && !simulation.error) {
			setSimulation(simulation.data);
			data.simulation.set(simulation.data);
		}

		if (customer.data && !customer.error) {
			setCustomer(customer.data);
			data.customer.set(customer.data);
		}

		// setLoading(false);
	}, [props.simulation, props.customer]);

	return !simulation || !customer || loading ? (
		<LoadingFullScreen />
	) : (
		<SimulationContainer>
			<Head title={customer.name} />

			<section id="explanation">
				<div className="content">
					<div className="text">
						<div className="logo">
							<Image
								src={simulation.logoURL}
								alt={simulation.title}
								width={320}
								height={170}
							/>
						</div>

						<h1>{simulation.title}</h1>

						<p>{simulation.description}</p>

						<Button linkTo={router.asPath + '/0'}>
							Começar agora
							<i className="far fa-arrow-right" />
						</Button>
					</div>
				</div>
			</section>
		</SimulationContainer>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const simulationsIds = await database
		.get(dbRef('/simulations'))
		.then((snap) => snap.val())
		.then((obj) => Object.keys(obj))
		.catch((err) => {
			console.log(err);
			return null;
		});

	if (!simulationsIds) return { paths: [], fallback: true };

	const paths = simulationsIds.map((id) => ({
		params: { simulationId: id },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const simulationId = ctx.params?.simulationId as string;
	let error = null;

	const simulation = await database
		.get(dbRef(`/simulations/${simulationId}`))
		.then((obj) => obj.val() as Simulation)
		.catch((err) => {
			console.log(err);
			error = err.message;
			return null;
		});

	if (!simulation) {
		return {
			notFound: true,
		};
	}

	const customer = await database
		.get(dbRef(`/customers/${simulation.customerId}`))
		.then((obj) => obj.val() as Customer)
		.catch((err) => {
			console.log(err);
			error = err.message;
			return null;
		});

	return {
		props: {
			customer: {
				data: customer,
				error,
			},
			simulation: {
				data: simulation,
				error,
			},
		},
		revalidate: 5,
	};
};

export default SimulationPage;
