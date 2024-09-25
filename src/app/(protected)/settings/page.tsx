'use client'
import { logout } from '@/actions/logout'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import { useCurrentUser } from '../../../../hooks/use-current-user'

interface SettingsProps {}

export default function Settings({}: SettingsProps) {
	const user = useCurrentUser()

	useEffect(() => {
		if (!user) {
			return
		}
		// Handle user authentication and update state
	}, [user])

	function handleSingOut() {
		logout()
	}
	return (
		<div
			className={cn('w-full flex flex-col items-center justify-center h-full')}
		>
			<h1>Settings Page</h1>

			<div className='w-full max-w-sm p-4 border rounded-xl overflow-hidden flex flex-col gap-4'>
				<pre>Session: {JSON.stringify(user, null, 2)}</pre>
			</div>

			<Button onClick={handleSingOut} variant='destructive'>
				SignOut
			</Button>
		</div>
	)
}
