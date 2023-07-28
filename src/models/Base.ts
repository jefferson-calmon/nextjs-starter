import { uuid } from 'codekit';
import { z } from 'zod';

export const BaseModelSchema = z.object({
	id: z
		.string()
		.default('')
		.transform(() => uuid()),
	createdAt: z
		.string()
		.default('')
		.transform(() => new Date().toISOString()),
	updatedAt: z
		.string()
		.default('')
		.transform(() => new Date().toISOString()),
});

export type BaseModel = z.infer<typeof BaseModelSchema>;

export type WithoutBaseProps<T> = Omit<T, 'id' | 'updatedAt' | 'createdAt'>;
export type WithoutTimeProps<T> = Omit<T, 'updatedAt' | 'createdAt'>;
