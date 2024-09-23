import { getUserByEmail } from '@/data/user'
import { LoginSchema } from '@/schemas'
import bcryptjs from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials)

				if (validatedFields.success) {
					const { email, password } = validatedFields.data

					const user = await getUserByEmail(email)
					if (!user || !user.password) {
						return null
					}

					const isPasswordValid = await bcryptjs.compare(password, user.password)

					if (isPasswordValid) {
						return user
					}
				}
				return null
			},
		}),
	],
} satisfies NextAuthConfig
