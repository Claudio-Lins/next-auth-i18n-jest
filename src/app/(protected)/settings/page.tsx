import { cn } from '@/lib/utils'
import { auth, signOut } from '../../../../auth'

interface SettingsProps {}

export default async function Settings({}: SettingsProps) {
	const session = await auth()
	return (
		<div className={cn('w-full flex flex-col items-center justify-center h-full')}>
			<h1>Settings Page</h1>
			<p>User: {session?.user?.email}</p>
			<pre>Session: {JSON.stringify(session, null, 2)}</pre>
			<form
				action={async () => {
					'use server'
					await signOut()
				}}
			>
				<button type='submit'>SignOut</button>
			</form>
		</div>
	)
}
