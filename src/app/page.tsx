'use client';

import LoadingFullScreen from 'components/LoadingFullScreen';
import styles from './styles.module.scss';

export default function Home() {
	return <LoadingFullScreen />;

	return (
		<div className={styles.container}>
			<h1>Hello World</h1>
		</div>
	);
}
