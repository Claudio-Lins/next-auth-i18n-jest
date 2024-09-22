'use server'

import { prisma } from '@/lib/prisma'
import bcryptjs from 'bcryptjs'

import { RegisterSchema } from '@/schemas'
import type { z } from 'zod'

export async function register(values: z.infer<typeof RegisterSchema>) {
	console.table(values)
	const validatedFields = RegisterSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: 'Invalid fields!' }
	}
	const { name, email, password } = validatedFields.data
	const hashedPassword = await bcryptjs.hash(password, 10)

	const existingUser = await prisma.user.findUnique({
		where: { email },
	})

	if (existingUser) {
		return { error: 'Email already exists!' }
	}

	await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	})

	// Send verification email

	return { success: 'Email sent successfully!' }
}
