import { Head, Loading } from 'idon';

import { LoadingFullScreenContainer } from './styles';

function LoadingFullScreen() {
	return (
		<LoadingFullScreenContainer>
			<Head title="Carregando" />

			<Loading size={40} strokeWidth={3} />
		</LoadingFullScreenContainer>
	);
}

export default LoadingFullScreen;
