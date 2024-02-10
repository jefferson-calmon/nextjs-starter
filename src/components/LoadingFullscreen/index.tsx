import { useEffect } from 'react';

import { Head, Loading } from 'aresui';
import { debounce, useBoolean, clearSiteData } from 'codekit';

import Button from 'components/Button';

import { LoadingFullScreenContainer } from './styles';

const timeoutInSeconds = 15;

function LoadingFullScreen(): JSX.Element {
	// Boolean hooks
	const timeout = useBoolean(false);

	// Effects
	useEffect(() => {
		debounce(timeout.setTrue, timeoutInSeconds * 1000);
	}, [timeout.setTrue]);

	return (
		<LoadingFullScreenContainer>
			<Head title="Carregando" />

			<div className="loader">
				<Loading type="spinner" size={40} />
			</div>

			{timeout.value && (
				<div className="text">
					<p>
						Este carregamento está demorando mais que o esperado,
						tente recarregar a janela ou clique no botão abaixo.{' '}
						<br />
						<br />
						Se o problema persistir, entre em contato conosco.
					</p>

					<Button
						size="small"
						onClick={() => clearSiteData({ reload: true })}
					>
						Tentar novamente
					</Button>
				</div>
			)}
		</LoadingFullScreenContainer>
	);
}

export default LoadingFullScreen;
