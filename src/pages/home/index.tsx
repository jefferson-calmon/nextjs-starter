import { GetStaticProps } from 'next';

import { Head } from 'idon';

import { HomeContainer } from './styles';
import { Button } from 'aresui';

function Home(): JSX.Element {
	return (
		<HomeContainer>
			<Head title="Início" />

			<h1>Home</h1>
			<Button rippleEffect>Teste</Button>
		</HomeContainer>
	);
}

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {
			data: {},
		},
	};
};

export default Home;
