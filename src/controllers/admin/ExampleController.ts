import BaseController from './BaseController';
import { Example } from 'models/Example';

class ExampleController extends BaseController<Example> {
	constructor() {
		const baseDbPath = 'examples';

		super(baseDbPath);
		Object.assign(this, new BaseController<Example>(baseDbPath));
	}
}

export default ExampleController;