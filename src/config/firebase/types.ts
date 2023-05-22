import { errors } from "./errors";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FirestoreQueryOptions {
	filters?: {
		field: string;
		operator: FirebaseFirestore.WhereFilterOp;
		value: any;
	}[];
	orderByField?: string;
	limitValue?: number;
	startAfterValue?: any;
	endBeforeValue?: any;
}

export interface FirebaseError {
	name: string;
	code: keyof typeof errors;
	message: string;
	stack?: string;
}
