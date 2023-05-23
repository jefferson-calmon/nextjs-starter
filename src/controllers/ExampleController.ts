import BaseController from './BaseController';
import { Example } from 'models/Example';

class ExampleController extends BaseController.firestore<Example> {
	constructor() {
		const baseDbPath = 'examples';

		super(baseDbPath);
		Object.assign(this, new BaseController.firestore<Example>(baseDbPath));
	}
}

export default ExampleController;
