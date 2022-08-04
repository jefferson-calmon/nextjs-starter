import { GetStaticProps } from 'next';

import { Head } from 'idon';

import { HomeContainer } from './styles';

function Home(): JSX.Element {
	return (
		<HomeContainer>
			<Head title="Início" />

			<h1>Home</h1>

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
