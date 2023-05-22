import type { NextPage } from 'next';

import Home from '../pages/home';

const Index: NextPage = () => <Home />;

export { getStaticProps } from '../pages/home';

export default Index;
