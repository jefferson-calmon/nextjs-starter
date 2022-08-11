import { GetStaticProps } from 'next';

import { Head, Redirect } from 'idon';

import { HomeContainer } from './styles';

function Home(): JSX.Element {
	return (
		<HomeContainer>
			<Head title="Início" />

			<Redirect to="1" />
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
