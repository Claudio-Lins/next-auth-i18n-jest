'use server'

import { RegisterSchema } from '@/schemas'
import type { z } from 'zod'

export async function register(values: z.infer<typeof RegisterSchema>) {
	console.table(values)
	const validatedFields = RegisterSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: 'Invalid fields!' }
	}
	return { success: 'Email sent successfully!' }
}
