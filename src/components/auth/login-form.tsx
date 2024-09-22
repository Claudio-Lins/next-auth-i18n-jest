'use client'

import { cn } from '@/lib/utils'
import { LoginSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon } from 'lucide-react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import type * as z from 'zod'
import { CardWrapper } from './card-wrapper'

import { login } from '@/actions/login'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'

interface LoginFormProps {}

export function LoginForm({}: LoginFormProps) {
	const [isPending, startTransition] = useTransition()
	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
		setError('')
		setSuccess('')
		startTransition(async () => {
			try {
				await login(values).then((data) => {
					setSuccess(data.success)
					setError(data.error)
				})
				// const resp = await login(values)
				// if (resp?.error) setError(resp.error)
				// form.reset()
			} catch (error) {
				// setError('Something went wrong!')
				// form.reset()
			}
		})
	}

	return (
		<CardWrapper
			headerLabel='Welcome Back'
			backButtonLabel='Do not have a account? '
			backButtonHref='/auth/register'
			showSocial={false}
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											type='email'
											placeholder='john.doe@exemplo.com'
											disabled={isPending}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input {...field} type='password' placeholder='******' disabled={isPending} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error} />
					<FormSuccess message={success} />
					<Button variant={'default'} className='w-full' disabled={isPending}>
						<LoaderIcon className={!isPending ? 'hidden' : 'animate-spin mr-2'} />
						<span>Login</span>
					</Button>
				</form>
			</Form>
		</CardWrapper>
	)
}
