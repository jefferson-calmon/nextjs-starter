import { NextMiddlewareResult } from 'next/dist/server/web/types';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export type CustomMiddleware = (
	request: NextRequest,
	event: NextFetchEvent,
	response: NextResponse,
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;

type MiddlewareFactory = (middleware: CustomMiddleware) => CustomMiddleware;

export function chain(
	functions: MiddlewareFactory[],
	index = 0,
): CustomMiddleware {
	const current = functions[index];

	if (current) {
		const next = chain(functions, index + 1);

		return async (
			request: NextRequest,
			event: NextFetchEvent,
			response: NextResponse,
		) => {
			const nextResponse = await current(next)(request, event, response);

			if (nextResponse instanceof NextResponse) {
				return nextResponse;
			}

			return response;
		};
	}

	return (
		request: NextRequest,
		event: NextFetchEvent,
		response: NextResponse,
	) => {
		return response;
	};
}
