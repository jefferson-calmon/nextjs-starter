import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { CustomMiddleware } from './chain';

export function withExample(middleware: CustomMiddleware) {
	return async (
		request: NextRequest,
		event: NextFetchEvent,
		response: NextResponse,
	) => {
		// do something

		return middleware(request, event, response);
	};
}
