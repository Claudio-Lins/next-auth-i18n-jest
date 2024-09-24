import * as z from 'zod'

export const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
})

export const ResetSchema = z.object({
	email: z.string().email(),
})

export const RegisterSchema = z.object({
	name: z.string().min(3, 'Name must be at least 3 characters'),
	email: z.string().email(),
	password: z.string().min(6, 'Password must be at least 6 characters'),
	// confirmPassword: z.string(),
})
